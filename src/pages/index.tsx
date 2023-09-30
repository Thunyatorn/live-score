import Head from "next/head";

import { ScoreTable } from "../components/ScoreTable";

export default function Home() {
  return (
    <>
      <Head>
        <title>TUGMOs | Live Scoreboard</title>
        <link rel="icon" href="/tugmos.ico" />
      </Head>
      <div className="flex w-full flex-col items-center py-6">
        <h1 className="text-5xl font-bold dark:text-slate-300">TUGMOs 20th Live Scoreboard</h1>
        <ScoreTable />
      </div>
    </>
  );
}
