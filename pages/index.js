import React from "react";
import Link from "next/link";
import Head from "next/head";

import withAnalytics from "../src/hocs/withAnalytics";

function Home() {
  return (
    <div>
      <Head>
        <title>Home</title>
      </Head>
      <img src="/static/panda.jpg" width="200" height="auto" />
      <h1>Oi</h1>

      <Link href="/users">
        <a>Usuários</a>
      </Link>
    </div>
  );
}

export default withAnalytics()(Home);
