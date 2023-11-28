import { Fragment } from "react";

import { Header } from "ui";

export default function Home() {
  return (
    <Fragment>
      <Header />
      <main className="flex h-[calc(100vh-100px)] flex-col items-center p-24 bg-slate-100">
        <h1>Hello Statements</h1>
        <small>(apps/mfe-statements)</small>
      </main>
    </Fragment>
  );
}
