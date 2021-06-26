import { Context } from "../context";
import { useState, useEffect } from "react";
import jwt_decode from "jwt-decode";

import React from "react";

function ContextProvider({ children }) {
  const [context, setContext] = useState();

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (token) {
      const decoded = jwt_decode(token);
      console.log("found token", decoded, Date.now());

      const isNotExpired = () => decoded.exp * 1000 >= Date.now();

      if (isNotExpired()) {
        setContext(decoded);
      }
    }
  }, []);

  return (
    <Context.Provider value={[context, setContext]}>
      {children}
    </Context.Provider>
  );
}

export default ContextProvider;
