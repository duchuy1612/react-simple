import { ReactNode, useState } from "react";

export function Navigation(props: { children?: ReactNode; className: string }) {
  return <div className={props.className}>{props.children}</div>;
}

export function ContentBoard(props: { active: boolean; children?: ReactNode }) {
  return (
    <div className="grow stretch flex flex-wrap bg-white rounded-tl-none rounded-b rounded-tr p-10 gap-5">
      {props.children}
    </div>
  );
}

export default function Dashboard() {
  const [viewState, setViewState] = useState("sell");
  return (
    <div className="w-full h-full flex flex-col gap-4">
      <div className="w-full flex flex-row gap-1">
        <button
          className={`h-10 rounded-b-none ${
            viewState === "buy"
              ? "bg-green-200 hover:bg-green-400 active:bg-green-600"
              : "bg-primary hover:bg-primaryHover active:bg-primaryActive"
          }`}
          onClick={() => setViewState("sell")}
        >
          Sell
        </button>
        <button
          className={`h-10 rounded-b-none ${
            viewState === "sell"
              ? "bg-green-200 hover:bg-green-400 active:bg-green-600"
              : "bg-primary hover:bg-primaryHover active:bg-primaryActive"
          }`}
          onClick={() => setViewState("buy")}
        >
          Buy
        </button>
      </div>
      {viewState === "sell" ? (
        <ContentBoard active={viewState == "sell"}>
          <button className="w-20 h-20 drop-shadow rounded flex items-center justify-center">
            <div className="m-auto">I</div>
          </button>
          <button className="w-20 h-20 drop-shadow rounded flex items-center justify-center">
            <div className="m-auto">Want</div>
          </button>
          <button className="w-20 h-20 drop-shadow rounded flex items-center justify-center">
            <div className="m-auto">To</div>
          </button>
          <button className="w-20 h-20 drop-shadow rounded flex items-center justify-center">
            <div className="m-auto">Buy</div>
          </button>
          <button className="w-20 h-20 drop-shadow rounded flex items-center justify-center">
            <div className="m-auto">These</div>
          </button>
        </ContentBoard>
      ) : (
        <ContentBoard active={viewState === "buy"}>
          <button className="w-20 h-20 drop-shadow rounded flex items-center justify-center">
            <div className="m-auto">You</div>
          </button>
          <button className="w-20 h-20 drop-shadow rounded flex items-center justify-center">
            <div className="m-auto">Want</div>
          </button>
          <button className="w-20 h-20 drop-shadow rounded flex items-center justify-center">
            <div className="m-auto">To</div>
          </button>
          <button className="w-20 h-20 drop-shadow rounded flex items-center justify-center">
            <div className="m-auto">Sell</div>
          </button>
          <button className="w-20 h-20 drop-shadow rounded flex items-center justify-center">
            <div className="m-auto">These</div>
          </button>
          <button className="w-20 h-20 drop-shadow rounded flex items-center justify-center">
            <div className="m-auto">Don't</div>
          </button>
          <button className="w-20 h-20 drop-shadow rounded flex items-center justify-center">
            <div className="m-auto">You?</div>
          </button>
        </ContentBoard>
      )}
    </div>
  );
}
