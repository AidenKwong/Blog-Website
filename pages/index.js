import Head from "next/head";

import Main from "./main";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Blog</title>
      </Head>

      <Main />
    </div>
  );
}
