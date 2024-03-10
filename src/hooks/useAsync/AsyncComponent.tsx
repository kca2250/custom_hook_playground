import { useState } from "react";
import useAsync from "./useAsync";
import { CollapseSection } from "../../components/CollapseSection";

export default function AsyncComponent() {
  const [fire, setFire] = useState<boolean>(false);
  const [active, setActive] = useState<boolean>(true);
  const { loading, error, value } = useAsync<string>(() =>
    asyncDisplayString()
  );

  const clickFire = () => {
    setFire(true);
    setActive(!active);
  };

  function asyncDisplayString(): Promise<string> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        fire
          ? resolve("着火オンファイヤァァァァ")
          : reject("着火しませんでした");
      }, 1000);
    });
  }

  return (
    <CollapseSection title="useAsync">
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <div>
          <div>{error ? error.message : undefined}</div>
          <div>{value === undefined ? "着火しますか？" : value}</div>
        </div>
        <button
          style={
            active
              ? {
                  outline: "1px solid #ff4500",
                  padding: "4px 8px",
                  borderRadius: "4px",
                  color: "#ff4500",
                }
              : {
                  backgroundColor: "#ff4500",
                  color: "whitesmoke",
                  padding: "4px 8px",
                  borderRadius: "4px",
                }
          }
          onClick={clickFire}
        >
          {active ? "ignite" : "ignited"}
        </button>
      </div>
    </CollapseSection>
  );
}
