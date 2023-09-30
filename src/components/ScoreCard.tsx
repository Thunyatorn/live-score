import { ScoreGauge } from "./ScoreGauge";

interface IScoreCard {
  name: string;
  score: number;
  is_skeleton: boolean;
}

export const ScoreCard = ({ name, score, is_skeleton }: IScoreCard) => {
  return (
    <div className="hidden w-1/4 flex-col rounded-lg border border-purple-700 bg-purple-100 p-4 text-purple-950 shadow-md dark:bg-purple-200 sm:flex">
      {!is_skeleton ? (
        <h2 className="text-center text-xl font-semibold">{name}</h2>
      ) : (
        <div className="flex justify-center">
          <div className="mt-3 h-8 w-full animate-pulse rounded-md bg-gray-50 dark:bg-gray-900" />
        </div>
      )}
      <ScoreGauge score={!is_skeleton ? score : 0} />
      {!is_skeleton ? (
        <p className="mt-3 text-center text-xl text-purple-700">
          {score} point(s)
        </p>
      ) : (
        <div className="flex justify-center">
          <div className="mt-3 h-6 w-1/4 animate-pulse rounded-md bg-gray-50 dark:bg-gray-900" />
        </div>
      )}
    </div>
  );
};

export const ScoreCardMobile = ({ name, score, is_skeleton }: IScoreCard) => {
  return (
    <div className="flex w-2/3 flex-col rounded-lg border border-purple-700 bg-purple-100 p-4 text-purple-950 shadow-md dark:bg-purple-200 sm:hidden">
      {!is_skeleton ? (
        <h2 className="text-center text-sm font-semibold">{name}</h2>
      ) : (
        <div className="flex justify-center">
          <div className="mt-3 h-8 w-full animate-pulse rounded-md bg-gray-50 dark:bg-gray-900" />
        </div>
      )}
      <ScoreGauge score={!is_skeleton ? score : 0} />
      {!is_skeleton ? (
        <p className="mt-3 text-center text-sm text-purple-700">
          {score} point(s)
        </p>
      ) : (
        <div className="flex justify-center">
          <div className="mt-3 h-6 w-1/4 animate-pulse rounded-md bg-gray-50 dark:bg-gray-900" />
        </div>
      )}
    </div>
  );
};