import { Header } from "./header";
import { Menu } from "./menu";

interface ShellProps {
  children: React.ReactNode;
}

export function Shell({ children }: ShellProps): JSX.Element {
  return (
    <>
      <Header />
      <main className="ui-bg-slate-100 ui-flex">
        <Menu />
        {children}
      </main>
    </>
  );
}
