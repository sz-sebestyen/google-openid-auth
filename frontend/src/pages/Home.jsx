import React, { useState, useContext } from "react";
import { Context } from "../context";

const CLIENT_ID =
  "427486198336-e44i9apd8ihk8gutb4kdot7v8gog2f74.apps.googleusercontent.com";

function Home() {
  const [context, setContext] = useContext(Context);
  const [dto, setDto] = useState();

  const getMessage = async (type) => {
    try {
      const res = await fetch(`/api/${type}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      const json = await res.json();
      console.log(json);
      setDto(json);
    } catch (error) {
      console.error(error);
    }
  };

  const getPrivate = () => getMessage("private");
  const getPublic = () => getMessage("public");

  const login = () => {
    window.location.href = `https://accounts.google.com/o/oauth2/v2/auth?client_id=${CLIENT_ID}&response_type=code&scope=openid email&redirect_uri=http://localhost:3000/login&prompt=select_account`;
  };

  const logout = () => {
    localStorage.removeItem("token");
    setContext();
  };

  return (
    <div>
      <h1>Home</h1>

      <div>
        {!context ? (
          <button onClick={login}>Login</button>
        ) : (
          <button onClick={logout}>Logout</button>
        )}
      </div>

      <button onClick={getPublic}>Public</button>
      {context && <button onClick={getPrivate}>Private</button>}

      {dto && (
        <div>
          <div>Response:</div>
          <div>{dto.message}</div>
        </div>
      )}
    </div>
  );
}

export default Home;
