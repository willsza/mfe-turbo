import { Header } from "./header";

interface ShellProps {
  children: React.ReactNode;
}

export function Shell({ children }: ShellProps): JSX.Element {
  return (
    <>
      <Header />
      <main className="ui-bg-slate-100 ui-min-h-[calc(100vh-90px)] ui-py-10">
        {children}
      </main>
    </>
  );
}
