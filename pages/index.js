import React from "react";
import Link from "next/link";
import Head from "next/head";
import GlobalStyles from "../src/styles/global";

import styled from "styled-components";

const Welcome = styled.h1`
  color: #058;
  font-size: 48px;
`;

const Index = () => (
  <>
    <GlobalStyles />
    <div>
      <Head>
        <title>Meu App NextJS</title>
      </Head>
      <Welcome>Bem vindos ao NextJS - SSR</Welcome>
      <img width="200" src="/panda.jpg" />
      <br />
      <Link prefetch href="/users">
        <a>Usuários</a>
      </Link>
    </div>
  </>
);

export default Index;
