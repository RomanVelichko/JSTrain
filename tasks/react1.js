import React, { useState, useEffect } from 'React';

// имитация запроса к серверу. просто получаем число асинхронно
const fetchRandomNumber = () => Promise.resolve(Math.random());

function NumberAndScroll = () => {
  const [number, setNumber] = useState();
  const [scroll, setScroll] = useState();
  
  useEffect(async () => {
    setNumber(await fetchRandomNumber());
    
    window.addEventListener('scroll', () => setScroll(window.scrollY));

    return () => window.removeEventListener('scroll', () => setScroll(window.scrollY));
  });
  
  return (
    <div>
      <div> Number: { number } </div>
      <div> Scroll: { scroll } </div>
    </div>  
  )
}


// ------------ // ------------ // ------------ // ------------ //


import React, { useEffect, useState } from "react";

const fetchRandomNumber = () => Promise.resolve(Math.random());

export const NumberAndScroll = () => {
  const [number, setNumber] = useState(0);
  const [scroll, setScroll] = useState(0);

  useEffect(() => {
    const fetchNumber = async () => {
      const randomNumber = await fetchCall();
      setNumber(randomNumber);
    };

    fetchNumber();
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    
    return () => window.removeEventListener("scroll", handleScroll);
  }, [scroll]);

  const handleScroll = () => {
    setScroll(window.scrollY);
  };

  return (
    <div>
      <div> Number: {number} </div>
      <div> Scroll: {scroll} </div>
    </div>
  );
};
