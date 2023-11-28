import { Header } from "ui";

export default function Page(): JSX.Element {
  return (
    <>
      <Header />
      <main className="flex h-[calc(100vh-100px)] flex-col items-center p-24 bg-slate-100">
        <h1>Hello world</h1>
        <small>(apps/mfe-statements)</small>
      </main>
    </>
  );
}
