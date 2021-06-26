import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import useQuery from "../hooks/useQuery";
import jwt_decode from "jwt-decode";

function Login() {
  const history = useHistory();
  const query = useQuery();

  const code = query.get("code");

  const login = async () => {
    const res = await fetch("/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ code }),
    });

    const json = await res.json();

    if (json.token) {
      const decoded = jwt_decode(json.token);
      console.log("token: ", decoded);

      localStorage.setItem("token", json.token);
      history.push("/", { login: json, decoded });
    }
  };

  useEffect(() => {
    login();
  }, []); // eslint-disable-line

  return <div>loading...</div>;
}

export default Login;
