const full_score: number = 20 * 10;

// copied from Gean Dev TOI Scoreboard
function redToGreen(percent: number) {
  let r = Math.floor(255 * (1.25 - percent));
  let g = Math.floor(255 * (0.25 + percent));
  return `rgb(${r},${g},0)`;
}

export const ScoreGauge = ({ score }: { score: number }) => {
  return (
    <div className="mt-3">
      <div
        className="h-1.5 rounded-full"
        style={{
          width: `${(score / full_score) * 100}%`,
          background: redToGreen(score / full_score),
        }}
      />
    </div>
  );
};
