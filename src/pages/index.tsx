import Head from "next/head";

import { ScoreTable } from "../components/ScoreTable";

export default function Home() {
  return (
    <>
      <Head>
        <title>TUGMOs | Live Scoreboard</title>
        <link rel="icon" href="/tugmos.ico" />
      </Head>
      <div className="py-6 flex w-full flex-col items-center">
        <h1 className="text-5xl font-bold">Live Scoreboard</h1>
        <ScoreTable />
      </div>
    </>
  );
}
