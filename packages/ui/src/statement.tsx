import { useStore } from "./store";

export function Statement(): JSX.Element {
  const addToBalance = useStore((state) => state.addToBalance);

  return (
    <section className="ui-justify-center ui-p-8 ui-flex-1">
      <h1 className="ui-flex ui-flex-col ui-text-center">
        Statement
        <small className="ui-text-[11px] ui-font-semibold">
          (apps/mfe-statements)
        </small>
      </h1>

      <section className="ui-text-center">
        <button
          className="ui-bg-blue-600 ui-text-white ui-inline-block ui-w-[200px] ui-my-3 ui-rounded ui-py-3 ui-px-4"
          onClick={() => {
            addToBalance(100);
          }}
        >
          Add 100
        </button>
      </section>
    </section>
  );
}
