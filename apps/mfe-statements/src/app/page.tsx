import { Fragment } from "react";

import { Header } from "ui";

export default function Home() {
  return (
    <Fragment>
      <Header />
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <h1>Hello Statements</h1>
      </main>
    </Fragment>
  );
}
