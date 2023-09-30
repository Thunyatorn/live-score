import { ScoreGauge } from "./ScoreGauge";

interface IScoreCard {
  name: string;
  score: number;
  is_skeleton: boolean;
}

export const ScoreCard = ({ name, score, is_skeleton }: IScoreCard) => {
  return (
    <div className="w-1/4 flex flex-col rounded-lg bg-purple-100 dark:bg-purple-200 border border-purple-700 text-purple-950 p-4 shadow-md">
      {!is_skeleton ? (
        <h2 className="text-center text-xl font-semibold">{name}</h2>
      ) : (
        <div className="flex justify-center">
          <div className="mt-3 h-8 w-full animate-pulse rounded-md bg-gray-50" />
        </div>
      )}
      <ScoreGauge score={!is_skeleton ? score : 0} />
      {!is_skeleton ? (
        <p className="mt-3 text-center text-xl text-purple-700">{score} point(s)</p>
      ) : (
        <div className="flex justify-center">
          <div className="mt-3 h-6 w-1/4 animate-pulse rounded-md bg-gray-50" />
        </div>
      )}
    </div>
  );
};
