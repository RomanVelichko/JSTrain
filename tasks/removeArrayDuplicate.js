
/** Убрать дубликаты в массиве */
const removeArrayDuplicate = (arr) => {
  return [...new Set(arr)]
}

removeArrayDuplicate([1, 1, 1, 1, 1, 1, 4234, 4234, 1, 231, 3]);
console.log('removeArrayDuplicate: ',removeArrayDuplicate([1, 1, 1, 1, 1, 1, 4234, 4234, 1, 231, 3]));
