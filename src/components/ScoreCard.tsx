interface IScoreCard {
  name: string;
  score: number;
}

export const ScoreCard = ({ name, score }: IScoreCard) => {
  return (
    <div className="flex flex-col rounded-lg p-3 shadow-md">
      <h2 className="text-3xl font-semibold">{name}</h2>
      <p className="text-2xl">คะแนนรวม : {score}</p>
    </div>
  );
};
