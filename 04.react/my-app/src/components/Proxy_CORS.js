import React, { useState } from "react";
import axios from "axios";

function Proxy_CORS() {
  const [data, setData] = useState();

  const onNoProxyHandler = () => {
    axios.get("/api/no-proxy").then(res => console.log(res));
  };
  const onProxyHandler = () => {
    axios.get("/api/proxy").then(res => {
      console.log(res);
      setData(res.data);
    });
  };
  const onNoCorsHandler = () => {
    axios.get("/api/no-cors").then(res => console.log(res));
  };
  const onCorsHandler = () => {
    axios
      .get(
        "/api/cors",
        {},
        { header: { "access-control-allow-origin": "true" } }
      )
      .then(res => {
        console.log(res);
        setData(res.data);
      });
  };

  return (
    <div>
      <div>{data}</div>
      <div>
        <button onClick={onNoProxyHandler}>no-proxy</button>
        <button onClick={onProxyHandler}>proxy</button>
        <button onClick={onNoCorsHandler}>no-cors</button>
        <button onClick={onCorsHandler}>cors</button>
      </div>
    </div>
  );
}

export default Proxy_CORS;
