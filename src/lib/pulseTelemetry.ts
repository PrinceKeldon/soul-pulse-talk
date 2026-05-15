import { useQuery } from "@tanstack/react-query";

const PULSECHAT_FUNCTIONS_URL =
  import.meta.env.VITE_PULSECHAT_FUNCTIONS_URL ||
  "https://lrucwoqorqeywnjtdeif.supabase.co/functions/v1";

export const EMOTIONS = {
  joy: { label: "Joy", color: "#2dd4a8", score: 10 },
  hope: { label: "Hope", color: "#4a90d4", score: 8 },
  sadness: { label: "Sadness", color: "#6366f1", score: 3 },
  fear: { label: "Fear", color: "#a855f7", score: 2 },
  anger: { label: "Anger", color: "#e05050", score: 1 },
  apathy: { label: "Apathy", color: "#94a3b8", score: 5 },
} as const;

export type Emotion = keyof typeof EMOTIONS;

export type EmotionDistribution = Record<Emotion, number>;

export interface RegionalStats {
  region: string;
  total_posts: number;
  emotion_distribution: EmotionDistribution;
  dominant_emotion: Emotion;
}

export interface GlobeStats {
  total_posts: number;
  emotion_distribution: EmotionDistribution;
  regional_stats: Record<string, RegionalStats>;
  last_updated: string;
}

export interface PulsePost {
  id: string;
  emotion: Emotion;
  text: string;
  region: string;
  posted_at: string;
  day_id: string;
  continent?: string;
  country?: string;
  country_code?: string;
}

export interface LiveFeed {
  posts: PulsePost[];
}

export interface Highlights {
  summary: string;
  totalPosts: number;
  emotionalTrends: Array<{
    emotion: Emotion;
    count: number;
    percentage: number;
  }>;
  regionalInsights: Array<{
    region: string;
    count: number;
    percentage: number;
  }>;
  timeframe: string;
  generatedAt: string;
}

const endpoint = (functionName: string, params?: Record<string, string | number>) => {
  const url = new URL(`${PULSECHAT_FUNCTIONS_URL}/${functionName}`);
  if (params) {
    Object.entries(params).forEach(([key, value]) => url.searchParams.set(key, String(value)));
  }
  return url.toString();
};

const fetchJson = async <T>(url: string): Promise<T> => {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`Pulse Chat telemetry request failed: ${response.status}`);
  }
  return response.json() as Promise<T>;
};

export const useGlobeStats = () =>
  useQuery({
    queryKey: ["pulsechat", "globe-stats"],
    queryFn: () => fetchJson<GlobeStats>(endpoint("get-globe-stats")),
    refetchInterval: 30_000,
    staleTime: 15_000,
  });

export const useLiveFeed = (limit = 24) =>
  useQuery({
    queryKey: ["pulsechat", "live-feed", limit],
    queryFn: () => fetchJson<LiveFeed>(endpoint("get-live-feed", { limit })),
    refetchInterval: 30_000,
    staleTime: 15_000,
  });

export const useHighlights = () =>
  useQuery({
    queryKey: ["pulsechat", "highlights"],
    queryFn: () => fetchJson<Highlights>(endpoint("generate-highlights")),
    refetchInterval: 300_000,
    staleTime: 300_000,
  });

export const calculatePulseScore = (distribution?: Partial<Record<Emotion, number>>) => {
  if (!distribution) return null;

  const totals = Object.entries(EMOTIONS).reduce(
    (acc, [emotion, meta]) => {
      const count = distribution[emotion as Emotion] || 0;
      return {
        count: acc.count + count,
        weighted: acc.weighted + count * meta.score,
      };
    },
    { count: 0, weighted: 0 },
  );

  if (totals.count === 0) return null;
  return totals.weighted / totals.count;
};

export const formatPulseScore = (score: number | null) => (score === null ? "--" : score.toFixed(1));
