/// ======= JOINER ======== ////
// Необходимо реализовать функцию joiner, где
// первый аргумент - разделитель, последующие -
// данные для слияния через разделитель

/** JOINER v1 
 * 
 * первый аргумент - разделитель, последующие -
 * данные для слияния через разделитель 
 * */
const joinerV1 = (separator, ...args) => {
  return args.join(separator)
}

joinerV1("*", 1, 2, 3, 4); // '1*2*3*4'
console.log('joinerV1: ', joinerV1("*", 1, 2, 3, 4))

/** JOINER v2 
 * 
 * первый аргумент - разделитель, последующие -
 * данные для слияния через разделитель 
 * */
function joinerV2(devider, ...args) {
  let finalStr = '';

  for (let i = 0; i < args.length; i++) {
    finalStr += args[i] + (i < args.length - 1 ? devider : '' );
  }

  return finalStr;
}

joinerV2("*", 1, 2, 3, 4); // '1*2*3*4'
console.log('joinerV2: ', joinerV2("*", 1, 2, 3, 4))
