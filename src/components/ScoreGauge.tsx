const full_score: number = 25 * 20;

export const ScoreGauge = ({ score }: { score: number }) => {
  return (
    <div className="relative mt-3">
      <div className="absolute h-1.5 w-full rounded-full bg-gray-50" />
      <div
        className="absolute h-1.5 rounded-full bg-purple-500"
        style={{
          width: `${(Math.min(score,full_score) / full_score) * 100}%`,
          // background: redToGreen(score / full_score),
        }}
      />
    </div>
  );
};
