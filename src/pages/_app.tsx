import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Inter } from "@next/font/google";

import Layout from "src/components/Layout/Layout";

const inter = Inter({
  weight: ["400", "600", "700"],
  subsets: ["latin"],
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={inter.className}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </div>
  );
}
