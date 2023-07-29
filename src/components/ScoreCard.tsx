interface IScoreCard {
  name: string;
  score: number;
}

export const ScoreCard = ({ name, score }: IScoreCard) => {
  return (
    <div className="flex flex-col rounded-lg p-3 shadow-md">
      <center>
        <h2 className="text-3xl font-semibold">{name}</h2>
        <p className="text-2xl font-semibold">{score}</p>
      </center>
    </div>
  );
};
