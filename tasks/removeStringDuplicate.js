
/** Убрать дубликаты в строке */
const removeStringDuplicate = (str) => {
  console.log(str)
  return Array.from(new Set(str))
}

removeStringDuplicate();
console.log('removeStringDuplicate: ',removeStringDuplicate("aaaaabbbbbbbcccccdddddddeeeeeee"));
