const PulseLine = () => {
  return (
    <div className="absolute left-8 top-0 bottom-0 w-0.5 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-primary/20 via-primary to-primary/20" />
      <div className="absolute inset-0 bg-primary animate-pulse-glow" 
           style={{ 
             background: 'linear-gradient(180deg, transparent 0%, hsl(var(--primary)) 50%, transparent 100%)',
             animation: 'pulse-glow 3s ease-in-out infinite'
           }} 
      />
    </div>
  );
};

export default PulseLine;
