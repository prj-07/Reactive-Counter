import { useState } from "react";

export default function Counter() {
  const [count, setcount] = useState(0);

  function increamentparent(by) {
    setcount(count + by);
  }

  function decreamentparent(by) {
    setcount(count - by);
  }

  function resetcnt(by) {
    setcount(0);
  }
  return (
    <>
      <span className="totalcount" style={{ color: "pink", fontSize: "70px" }}>
        {count}
      </span>
      <CounterBtn by={1} incm={increamentparent} decm={decreamentparent} />
      <CounterBtn by={2} incm={increamentparent} decm={decreamentparent} />
      <CounterBtn by={3} incm={increamentparent} decm={decreamentparent} />
      <button onClick={resetcnt} style={{ color: "purple", fontSize: "40px" }}>
        Reset
      </button>
    </>
  );
}

function CounterBtn({ by, incm, decm }) {
  const [count, setcount] = useState(0);
  //const [countsub, setcountsub] = useState(0);
  const byValue = Number(by);

  function increaser() {
    setcount(count + by);
    incm(by);
  }

  function decreaser() {
    setcount(count - by);
    decm(by);
  }

  return (
    <div className="Counter">
      <div>
        <button
          className="counterbtn"
          onClick={increaser}
          style={{
            fontSize: "40px",
            backgroundColor: "#00a5ab",
            color: "whitesmoke",
            width: "60px",
            borderRadius: "30px",
            borderColor: "black",
          }}
        >
          +{by}
        </button>
        <button
          className="counterbtn"
          onClick={decreaser}
          style={{
            fontSize: "40px",
            backgroundColor: "#00a5ab",
            color: "whitesmoke",
            width: "60px",
            marginLeft: "10px",
            borderRadius: "30px",
            borderColor: "black",
          }}
        >
          -{by}
        </button>
      </div>
    </div>
  );
}
