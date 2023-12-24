import React, { useState } from "react";
import Navbar from "./Components/Navbar";
import Card from "./Components/Card";
const App = () => {
  const data = [
    {
      img: "https://plus.unsplash.com/premium_photo-1700081737402-8aad0453bff8?q=80&w=1501&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      Artist: "Arjit",
      Songname: "tumhi ho",
      added: false,
    },
    { img: "https://plus.unsplash.com/premium_photo-1697695567115-d0769c8f9649?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", Artist: "sushant", Songname: "satayera", added: false },
    { img: "https://media.istockphoto.com/id/1427952718/photo/portrait-of-confident-man.jpg?s=1024x1024&w=is&k=20&c=QsNumYUmGiiATaFjLmjyJmQQVJVU2_Jh6kE7CcB82m8=", Artist: "Gopal", Songname: "nepali hami", added: false },
  ];
  const [songdata, setsongdata] = useState(data)
  const handler = (index) =>setsongdata((previous)=>previous.map((items,i)=>{
    if(i ===index){
      return{...items,added:!items.added}
    }
    return items
  }))


  return (
    <>
      <div className="w-full h-screen bg-zinc-300">
        <Navbar data={songdata} />
        <div className="px-10 flex gap-6 flex-wrap">
          {songdata.map((item,index)=>{
           return <Card key={index} index={index} handler={handler} name={item.Songname} Artist={item.Artist} img={item.img} added={item.added} />
          })}
        </div>
      </div>
    </>
  );
};

export default App;
