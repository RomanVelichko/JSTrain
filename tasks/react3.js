// Что и как будет выводится?

import { useState, useEffect } from "react";

export default function App() {
  const [value, setValue] = useState("");

  const handleChange = ({ target }) => {
    setValue(() => target.value);
  };
  useEffect(() => {
    console.log('MOUNT', value);
  }, []);
  
  useEffect(() => {
    console.log('ALL', value);
  });
  
  useEffect(() => {
    return () => console.log('UPDATE', value);
  }, [value]);
  
  

  return (
    <div className="App">
      <input value={value} onChange={handleChange} />
    </div>
  );
}

// При первом рендере засетилась пустая строка ''
// При вводе символов useEffect начинает работать со второго рендеринга
// срабатывает функция очистки у useEffect и в консоль выводится 
// старое значение value (при размонтировании)
// т.е. сначала размонитруем пустую строку " ",
// потом водим второй символ - на размонтирование в return летит первый 
// символ (предыдущее значение). При вводе третьего, размонтируется второй ...
// ' '
//    1
//    1 2
//    1 2 3 
