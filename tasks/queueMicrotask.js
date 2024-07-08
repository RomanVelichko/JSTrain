
console.log(1)

setTimeout(() => console.log(8))

requestIdleCallback(() => {
    console.log(7)
})

Promise.resolve(2).then(console.log)

requestAnimationFrame(() => {
    console.log(4)
    console.log(6)
})

queueMicrotask(() => console.log(8)) // Это просто функция, которая добавляет в очередь микро переданную ей ф-ю

console.log(5)

// 1, 5, 2, 8, (rerender), 4, 6, (rerender), 8, 7
// https://learn.javascript.ru/event-loop