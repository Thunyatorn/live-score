const full_score: number = 25 * 20;

// copied from Gean Dev TOI Scoreboard
function redToGreen(percent: number) {
  let r = Math.floor(255 * (1.25 - percent));
  let g = Math.floor(255 * (0.25 + percent));
  return `rgb(${r},${g},0)`;
}

export const ScoreGauge = ({ score }: { score: number }) => {
  return (
    <div className="relative mt-3">
      <div className="absolute h-1.5 w-full rounded-full bg-gray-200" />
      <div
        className="absolute h-1.5 rounded-full"
        style={{
          width: `${(Math.min(score,full_score) / full_score) * 100}%`,
          background: redToGreen(score / full_score),
        }}
      />
    </div>
  );
};
