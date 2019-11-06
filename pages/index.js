import React from "react";

import Link from "next/link";

export default function home() {
  return (
    <div>
      <h1>Oi</h1>

      <Link href="/users">
        <a>Usuários</a>
      </Link>
    </div>
  );
}
