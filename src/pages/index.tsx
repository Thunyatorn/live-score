import Head from "next/head";
import Link from "next/link";

import { ScoreTable } from "../components/ScoreTable";

export default function Home() {
  return (
    <>
      <Head>
        <title>เกียน?</title>
        <link rel="icon" href="/tugmos.ico" />
      </Head>
      <div className="mt-6 flex w-full flex-col items-center">
        <h1 className="text-8xl font-bold">คะแนน ?</h1>
        <ScoreTable />
      </div>
      {/* <footer className="absolute bottom-3 w-full">
        <div className="flex w-full items-center justify-center">
          <Link href="https://otog.cf" className="w-full text-center">
            <h1 className="text-8xl font-bold text-[#ff851b]">
              By Icy Anos and Blackslex
            </h1>
          </Link>
        </div>
      </footer> */}
    </>
  );
}
