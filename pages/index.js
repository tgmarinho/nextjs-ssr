import React from "react";
import Link from "next/link";
import Head from "next/head";

export default function home() {
  return (
    <div>
      <Head>
        <title>Home</title>
      </Head>
      <h1>Oi</h1>

      <Link href="/users">
        <a>Usuários</a>
      </Link>
    </div>
  );
}
