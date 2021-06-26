import React, { useEffect } from "react";
import useQuery from "../hooks/useQuery";
import jwt_decode from "jwt-decode";

function Login() {
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

    if (json.jwt) {
      console.log("jwt: ", jwt_decode(json.jwt));
    }
  };

  useEffect(() => {
    login();
  }, []); // eslint-disable-line

  return <div>loading...</div>;
}

export default Login;
