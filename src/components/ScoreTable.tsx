// import data from "../data/score.json";
import { ScoreCard } from "./ScoreCard";

import { useState, useEffect } from "react";
import axios from "axios";

interface IContestant {
  name?: string;
  score?: number;
}

export const ScoreTable = () => {
  const [data, setData] = useState<IContestant[]>([]);

  useEffect(() => {
    axios.get(process.env.NEXT_PUBLIC_API_ROUTE!).then((res) => {
      // console.log(res.data.data);
      setData(res.data.data);
    });

    const interval = setInterval(() => {
      axios.get(process.env.NEXT_PUBLIC_API_ROUTE!).then((res) => {
        console.log(res.data.data);
        setData(res.data.data);
      });
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex w-full justify-center">
      <div className="mt-14 grid w-3/4 grid-cols-3 justify-center gap-x-4 gap-y-10">
        {data.map((item, idx) => (
          <ScoreCard key={idx} name={item.name!} score={item.score!} />
        ))}
      </div>
    </div>
  );
};
