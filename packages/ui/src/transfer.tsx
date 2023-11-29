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
          className="ui-bg-black ui-inline-block ui-m-3"
          onClick={() => {
            addToBalance(100);
          }}
          type="button"
        >
          Add Amount
        </button>
      </section>
    </section>
  );
}
