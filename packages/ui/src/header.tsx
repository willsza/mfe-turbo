import { IconUser } from "./icon-user";
import { useStore } from "./store";

export function Header(): JSX.Element {
  const user = useStore((state) => state.user);
  const balance = useStore((state) => state.balance);

  return (
    <header className="ui-flex ui-justify-between ui-items-center ui-shadow-lg ui-p-4 ui-border-b-[1px]">
      <section>
        <h1>Header</h1>
        <small className="ui-text-[11px] ui-font-semibold">(packages/ui)</small>
      </section>

      <section className="ui-flex ui-gap-2 ui-items-center">
        <span className="ui-font-semibold">Balance: {balance}</span>

        <button className="ui-btn ui-btn-primary" type="button">
          <IconUser className="ui-h-5 ui-w-5" />
        </button>
        {user}
      </section>
    </header>
  );
}
