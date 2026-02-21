import React from "react";
import Header from "./components/Header";
import Hero from "./sections/Hero";
import second from "./components/RoomCard";
import RoomCard from "./components/RoomCard";
import Rooms from "./sections/Rooms";

export default function App() {
  return(
    <>
      <Header />
      <Hero />
      <Rooms />
      
    </>
  );
}