import { ScoreGauge } from "./ScoreGauge";

interface IScoreCard {
  name: string;
  score: number;
}

export const ScoreCard = ({ name, score }: IScoreCard) => {
  return (
    <div className="flex flex-col rounded-lg bg-[#c79dd7] p-4 shadow-md">
      <h2 className="text-center text-3xl font-semibold">{name}</h2>
      <ScoreGauge score={score} />
      <p className="mt-3 text-center text-xl">{score} point(s)</p>
    </div>
  );
};
