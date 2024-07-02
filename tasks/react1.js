import React, { useState, useEffect } from 'React'; // from React не должно быть с большойо буквы

// имитация запроса к серверу. просто получаем число асинхронно
const fetchRandomNumber = () => Promise.resolve(Math.random());

function NumberAndScroll = () => {
  const [number, setNumber] = useState();
  const [scroll, setScroll] = useState();
  
  useEffect(async () => { // Коллбэк в useEffect не должен возвращать ничего (undefined), либо функцию очистки = а тут сейчас возвращается Promise
    setNumber(await fetchRandomNumber());
    
    window.addEventListener('scroll', () => setScroll(window.scrollY)); // убрать коллбэк в хандлер

    return () => window.addEventListener('scroll', () => setScroll(window.scrollY)); // тут нуджен removeEventListener и убрать коллбэк в хандлер
  }); // нужен массив зависимостей для монтирования
  
  return (
    <div>
      <div> Number: { number } </div>
      <div> Scroll: { scroll } </div>
    </div>  
  )
}


// ------------ // ------------ // ------------ // ------------ //
// VERSION 1

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
  }, []);

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


// ------------ // ------------ // ------------ // ------------ //
// VERSION 2

import React, { useState, useEffect } from "react"; // from React не должно быть с большойо буквы
import throttle from 'lodash/throttle';

// имитация запроса к серверу. просто получаем число асинхронно
const fetchRandomNumber = () => Promise.resolve(Math.random());

export const NumberAndScroll = () => {
  const [number, setNumber] = useState();
  const scroll = useWindowScrollY(); 

  // добавил начальное значение
  // const [scroll, setScroll] = useState(window.scrollY);

  // Принцип единственной ответственности
  // отдельно логика получения числа
  // убрали async
  useEffect(() => {
    // переписали через промис
    fetchRandomNumber().then(setNumber);
  }, []);

  // ВЫНОСИМ ЛОГИКУ СКРОЛЛА В КАСТОМНЫЙ ХУК useWindowScrollY()
  // // отдельно логика для скролла
  // // убрали async
  // useEffect(() => {
  //   // перенес создание в useEffect (отработает тольк оодин раз на монтировании а не каждый раз при ререндерах)
  //   const handleScroll = () => setScroll(window.scrollY);

  //   window.addEventListener("scroll", handleScroll);

  //   return () => window.addEventListener("scroll", handleScroll);
  // }, []); // добавили вторым аргументом массив зависимостей

  return (
    <div>
      <div> Number: {number} </div>
      <div> Scroll: {scroll} </div>
    </div>
  );
};

// ПЛЮС логику скролла можно вынести в отдельный кастомный ХУК useWindowScrollY()

/** Кастомный ХУК useWindowScrollY() */
const useWindowScrollY = () => {
  const [scroll, setScroll] = useState(window.scrollY);

  useEffect(() => {
    // обернем в троттл
    const handleScroll = throttle(() => setScroll(window.scrollY), 37);

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, [])
  
  return scroll;
}