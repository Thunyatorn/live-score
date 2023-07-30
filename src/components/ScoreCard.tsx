import { ScoreGauge } from "./ScoreGauge";

interface IScoreCard {
  name: string;
  score: number;
  is_skeleton: boolean;
}

export const ScoreCard = ({ name, score, is_skeleton }: IScoreCard) => {
  return (
    <div className="flex flex-col rounded-lg bg-[#c79dd7] p-4 shadow-md">
      {!is_skeleton ? (
        <h2 className="text-center text-3xl font-semibold">{name}</h2>
      ) : (
        <div className="flex justify-center">
          <div className="mt-3 h-8 w-full animate-pulse rounded-md bg-gray-900"></div>
        </div>
      )}
      <ScoreGauge score={!is_skeleton ? score : 0} />
      {!is_skeleton ? (
        <p className="mt-3 text-center text-xl">{score} point(s)</p>
      ) : (
        <div className="flex justify-center">
          <div className="mt-3 h-6 w-1/4 animate-pulse rounded-md bg-gray-900"></div>
        </div>
      )}
    </div>
  );
};
