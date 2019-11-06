import React, { useEffect } from "react";
import axios from "axios";
import Link from "next/link";
import Head from "next/head";

export default function User({ users }) {
  return (
    <div>
      <Head>
        <title>Usuários</title>
      </Head>
      <ul>
        {users.map(user => (
          <li key={user.id}>{user.login}</li>
        ))}
      </ul>
      <Link href="/">
        <a>Voltar</a>
      </Link>
    </div>
  );
}

User.getInitialProps = async () => {
  const response = await axios.get(
    "https://api.github.com/orgs/rocketseat/members"
  );

  console.log(response.data);

  return { users: response.data };
};
