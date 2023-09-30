import { type AppType } from "next/dist/shared/lib/utils";
import "~/styles/globals.css";
import { IBM_Plex_Sans_Thai, Inter } from 'next/font/google'

import * as React from "react"
import { ThemeProvider as NextThemesProvider } from "next-theme";
import type { ThemeProviderProps } from "next-theme/dist/provider/index.props";

// If loading a variable font, you don't need to specify the font weight
const inter = Inter({ subsets: ['latin'] })

const ibm_plex_sans_thai = IBM_Plex_Sans_Thai({ weight: ['400', '500', '600', '700'], subsets: ['thai'] })

const MyApp: AppType = ({ Component, pageProps }) => {
  // return <Component {...pageProps} />;
  return <main className={`${inter.className} ${ibm_plex_sans_thai.className} bg-slate-100 dark:bg-slate-900`}>
    <Component {...pageProps} />
  </main>
};

export default MyApp;
