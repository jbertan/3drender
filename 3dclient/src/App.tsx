import React from "react";
import { useState, useEffect } from "react";
import { io, Socket } from "socket.io-client";
import Cube from "./components/cube";
import Sphere from "./components/sphere";

import "./App.css";
import Cylinder from "./components/cylinder";
import Cylinder2 from "./components/cylinder2";

function App() {
  const [socket, setSocket] = useState<Socket | null>(null);
  const [size, setSize] = useState<number>(0);

  useEffect(() => {
    const newSocket = io("http://localhost:3001");
    setSocket(newSocket);

    newSocket.on("newSize", (value: number) => {
      console.log(value);
      setSize(value);
    });
    return () => {
      newSocket.disconnect();
    };
  }, []);

  return (
    <div>
      <h1>Welcome to Epilepsy Programing</h1>
      <Cube size={size} />
      <Sphere size={size} />
      <Cylinder size={size} />
      <p className="">react-fiber-three version</p>
      <Cylinder2 size={size} />
      <p>Width of cube cylinder etc{size}</p>
    </div>
  );
}

export default App;
