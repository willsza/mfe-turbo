export function Menu(): JSX.Element {
  return (
    <nav className="ui-h-[calc(100vh-90px)] ui-bg-white ui-inline-block ui-border-r-[1px] ui-min-w-[200px]">
      <ul>
        <li>
          <a className="ui-p-3 ui-border-b-[1px] ui-block" href="/">
            Home
          </a>
        </li>
        <li>
          <a className="ui-p-3 ui-border-b-[1px] ui-block" href="/transfers">
            Transferências
          </a>
        </li>
      </ul>
    </nav>
  );
}
