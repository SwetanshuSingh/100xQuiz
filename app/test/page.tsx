"use client";
import { useEffect, useState } from "react";
import { io, Socket } from "socket.io-client";

const data = {
  username: "Swetanshu",
  userId: "adkfhgadkgfkdg",
};

const TestPage = () => {
  const [socket, setSocket] = useState<Socket | null>(null);

  useEffect(() => {
    const socketInstance = io("http://localhost:3001");

    setSocket(socketInstance);
    socketInstance.emit("new-user", data);

    return () => {
      socketInstance.disconnect();
    };
  }, []);

  return (
    <main className="w-full h-screen flex justify-center items-center">
      <h2>Hello</h2>
    </main>
  );
};

export default TestPage;
