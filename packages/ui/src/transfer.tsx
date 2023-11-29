import { useStore } from "./store";

export function Transfer(): JSX.Element {
  const addToBalance = useStore((state) => state.addToBalance);

  return (
    <section className="ui-justify-center ui-p-8">
      <h1 className="ui-flex ui-flex-col">
        Transfers
        <small className="ui-text-[11px] ui-font-semibold">
          (apps/mfe-transfers)
        </small>
      </h1>

      <section>
        <button
          className="ui-bg-blue-600 ui-text-white ui-inline-block ui-m-3 ui-rounded ui-p-6 ui-text-xs"
          onClick={() => {
            addToBalance(300);
          }}
          type="button"
        >
          Add 300
        </button>
      </section>
    </section>
  );
}
