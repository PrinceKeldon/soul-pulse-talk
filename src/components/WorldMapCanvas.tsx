import { useEffect, useRef } from "react";

const lands: [number, number][] = [
  [60,-96],[50,-85],[45,-75],[56,-117],[49,-123],[37,-95],[32,-88],[30,-98],
  [25,-105],[20,-100],[15,-87],[10,-84],[9,-80],[19,-72],[18,-70],[23,-82],
  [18,-77],[17,-63],[13,-85],[14,-90],[14,-87],
  [-5,-55],[-10,-52],[-15,-50],[-20,-48],[-25,-50],[-30,-55],[-35,-60],
  [-38,-65],[-30,-70],[-25,-57],[-16,-64],[-10,-75],[-4,-79],[5,-58],
  [4,-74],[8,-66],[10,-67],[6,-58],[3,-60],[1,-79],
  [54,-3],[52,1],[48,2],[44,3],[40,-4],[43,12],[42,13],[46,14],[47,16],
  [48,18],[50,14],[52,21],[54,25],[57,25],[59,25],[60,22],[62,26],[65,28],
  [68,18],[66,15],[63,13],[60,10],[57,10],[56,9],[53,9],[52,6],[51,5],
  [50,4],[48,8],[47,8],[44,25],[42,25],[41,20],[43,20],[41,28],[39,22],
  [55,37],[50,30],[48,32],[56,44],[48,24],
  [55,60],[60,80],[62,110],[55,130],[50,80],[48,67],[40,60],[42,71],[39,68],
  [38,58],[41,47],[43,44],[40,45],[55,105],[63,143],[70,85],[70,110],
  [24,45],[26,51],[24,54],[17,56],[23,58],[29,48],[31,35],[34,36],[33,44],
  [32,54],[28,68],[30,70],[35,40],[38,36],[31,30],[27,30],[16,38],[10,42],
  [10,8],[6,3],[5,-1],[8,-2],[14,-2],[17,-3],[12,16],[15,20],[8,26],
  [0,22],[4,22],[-4,22],[-6,20],[-10,28],[-15,28],[-20,30],[-26,28],
  [-30,25],[-26,32],[-18,36],[-13,35],[-8,37],[0,37],[4,38],[10,38],
  [14,38],[10,44],[2,42],[14,9],[18,10],[22,12],[25,10],[28,25],[30,30],
  [32,28],[26,8],[20,8],[14,23],[20,18],[24,23],[17,30],[10,18],[-1,10],
  [22,78],[20,82],[28,72],[26,74],[30,76],[12,78],[8,80],[26,89],[24,91],
  [28,85],[14,75],[18,74],[23,70],
  [15,101],[18,103],[14,107],[10,107],[16,96],[20,96],[4,113],[1,110],
  [-2,117],[-5,120],[-8,125],[15,121],[12,122],[7,125],[4,117],
  [2,110],[5,103],[1,103],[-8,115],[-6,108],[-7,112],[17,102],
  [36,104],[32,108],[28,112],[24,115],[30,120],[35,118],[40,116],[45,126],
  [35,126],[37,128],[36,138],[34,135],[39,141],[33,131],[30,131],
  [43,143],[50,130],[47,133],[22,114],[23,120],[25,121],[24,118],
  [-25,133],[-28,125],[-23,150],[-30,150],[-35,148],[-38,144],
  [-33,121],[-20,128],[-15,130],[-12,135],[-25,115],[-17,146],
  [-37,174],[-40,176],[-43,172],[-46,168],
  [71,-42],[74,-38],[68,-52],[66,-38],[77,-65],
  [31,130],[32,130],[33,131],[34,132],
  [-1,128],[-3,129],[1,127],[0,120],[0,125],
  [57,-4],[58,-3],[53,-8],[54,-7],[55,-5],
  [70,28],[72,27],[70,22],[67,20],[65,22],[65,17],[67,17],[68,18],
];

const pulsePoints = [
  { lat: 9, lng: 8, color: "#2dd4a8", label: "NGA" },
  { lat: 22, lng: 78, color: "#c8903a", label: "IND" },
  { lat: 46, lng: 2, color: "#e05050", label: "FRA" },
  { lat: -14, lng: -51, color: "#c8903a", label: "BRA" },
  { lat: 36, lng: 104, color: "#4a90d4", label: "CHN" },
  { lat: 37, lng: -95, color: "#4a90d4", label: "USA" },
  { lat: 51, lng: 10, color: "#4a90d4", label: "DEU" },
  { lat: 35, lng: 138, color: "#2dd4a8", label: "JPN" },
  { lat: 0, lng: 37, color: "#2dd4a8", label: "KEN" },
  { lat: -38, lng: -65, color: "#e05050", label: "ARG" },
  { lat: 15, lng: 101, color: "#c8903a", label: "THA" },
  { lat: -0.5, lng: 117, color: "#2dd4a8", label: "IDN" },
  { lat: 50, lng: 30, color: "#4a90d4", label: "UKR" },
  { lat: 35, lng: 127, color: "#2dd4a8", label: "KOR" },
  { lat: 23, lng: -102, color: "#c8903a", label: "MEX" },
];

const WorldMapCanvas = () => {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let W = 0, H = 0;
    const phases = pulsePoints.map(() => Math.random() * Math.PI * 2);

    const resize = () => {
      W = canvas.width = window.innerWidth;
      H = canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const toXY = (lat: number, lng: number): [number, number] => [
      ((lng + 180) / 360) * W,
      ((90 - lat) / 180) * H,
    ];

    let frame = 0;
    let raf = 0;
    const draw = () => {
      ctx.clearRect(0, 0, W, H);
      frame++;

      for (const [lat, lng] of lands) {
        const [x, y] = toXY(lat, lng);
        ctx.beginPath();
        ctx.arc(x, y, 1.8, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(60,90,130,0.45)";
        ctx.fill();
      }

      pulsePoints.forEach((pt, i) => {
        const [x, y] = toXY(pt.lat, pt.lng);
        const phase = (frame * 0.018 + phases[i]) % (Math.PI * 2);
        const progress = (Math.sin(phase) + 1) / 2;
        const maxR = 30;
        const r = progress * maxR;
        const alpha = (1 - progress) * 0.5;

        ctx.beginPath();
        ctx.arc(x, y, r, 0, Math.PI * 2);
        ctx.strokeStyle = pt.color + Math.round(alpha * 255).toString(16).padStart(2, "0");
        ctx.lineWidth = 0.8;
        ctx.stroke();

        const r2 = progress * maxR * 0.55;
        const a2 = (1 - progress) * 0.8;
        ctx.beginPath();
        ctx.arc(x, y, r2, 0, Math.PI * 2);
        ctx.strokeStyle = pt.color + Math.round(a2 * 255).toString(16).padStart(2, "0");
        ctx.lineWidth = 0.6;
        ctx.stroke();

        ctx.beginPath();
        ctx.arc(x, y, 2.5, 0, Math.PI * 2);
        ctx.fillStyle = pt.color;
        ctx.fill();

        ctx.font = '8px "IBM Plex Mono", monospace';
        ctx.fillStyle = "rgba(200,200,200,0.35)";
        ctx.fillText(pt.label, x + 6, y - 5);
      });

      raf = requestAnimationFrame(draw);
    };
    draw();

    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <canvas
      ref={ref}
      aria-hidden="true"
      className="fixed inset-0 w-full h-full pointer-events-none z-0"
    />
  );
};

export default WorldMapCanvas;
