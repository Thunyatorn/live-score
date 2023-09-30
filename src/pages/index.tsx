import Head from "next/head";

import { ScoreTable } from "../components/ScoreTable";
import { useState, useEffect } from "react";
import useTheme from "next-theme/dist/useTheme";
import { ThemeSwitcher } from "~/components/ThemeSwitcher";

export default function Home() {
  return (
    <>
      <Head>
        <title>TUGMOs | Live Scoreboard</title>
        <link rel="icon" href="/tugmos.ico" />
      </Head>
      <div className="flex w-full flex-col items-center py-6">
        {/* desktop */}
        <h1 className="hidden text-center text-5xl font-bold dark:text-slate-300 sm:flex">
          TUGMOs 20th Live Scoreboard
        </h1>
        {/* mobile */}
        <h1 className="flex text-center text-3xl font-bold dark:text-slate-300 sm:hidden">
          TUGMOs 20th Live Scoreboard
        </h1>
        <ScoreTable />
        {/* <ThemeSwitcher /> */}
      </div>
    </>
  );
}
