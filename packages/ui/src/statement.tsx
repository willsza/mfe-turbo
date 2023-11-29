import { useStore } from "./store";

export function Statement(): JSX.Element {
  const addToBalance = useStore((state) => state.addToBalance);

  return (
    <section className="ui-flex ui-justify-center ui-flex-col">
      <h1>Statement</h1>
      <small className="ui-text-[11px] ui-font-semibold">
        (apps/mfe-statements)
      </small>

      <button
        className="ui-btn ui-btn-primary"
        onClick={() => {
          addToBalance(100);
        }}
        type="button"
      >
        Add Amount
      </button>
    </section>
  );
}
