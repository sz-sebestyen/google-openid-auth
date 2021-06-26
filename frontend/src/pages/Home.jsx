import React, { useState } from "react";

const CLIENT_ID =
  "427486198336-e44i9apd8ihk8gutb4kdot7v8gog2f74.apps.googleusercontent.com";

function Home() {
  const [dto, setDto] = useState();

  const getMessage = async (type) => {
    try {
      const res = await fetch(`/api/${type}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          authorization: `Bearer ${localStorage.getItem("jwt")}`,
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
    window.location.href = `https://accounts.google.com/o/oauth2/v2/auth?client_id=${CLIENT_ID}&response_type=code&scope=openid email&redirect_uri=http://localhost:3000/login`;
  };

  return (
    <div>
      <h1>Home</h1>
      <button onClick={getPublic}>Public</button>
      <button onClick={getPrivate}>Private</button>
      <button onClick={login}>Login</button>
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
