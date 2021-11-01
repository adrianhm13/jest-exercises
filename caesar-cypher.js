
  let alphabet;
  for (i = 9, alphabet = ""; ++i < 36; ) {
    alphabet += i.toString(36);
  }
  let alphabetArray = Array.from(alphabet)

function cipheringMessage(message){
    let arrayMessage = Array.from(message);  // Creating array from the message to cipher
    let arrayNumbers = []
    let cipherMessageArray = []

    for (let index = 0; index < arrayMessage.length; index++) { // Comparing array's and pushing the index from the alphabet to a new array

        arrayNumbers.push(alphabetArray.indexOf(arrayMessage[index]))

        if(!(/[a-zA-Z]/).test(arrayMessage[index])){
          arrayNumbers.push(arrayMessage[index])
          if(arrayMessage[index] !== -1)
          arrayNumbers.splice(index, 1)
        }
    }

    let arrayCipher = arrayNumbers.map(sumOne);  // Sum one to each index 

    for (let index = 0; index < arrayCipher.length; index++) { // Loop through the array with the new index's and push the encripted character to a new array
      if(isNaN(arrayCipher[index])){
        let character = arrayCipher[index]
        cipherMessageArray.push(character)
      }else{
        let character = alphabetArray[arrayCipher[index]]
        if(character == undefined){
          character = "_"
        }
        cipherMessageArray.push(character)
      }

    }

    const cipherMessage = cipherMessageArray.join("").replace(/_/g, " ")
    return cipherMessage;
}

function sumOne(index){
  if(typeof index != 'number'){  // If it's not a number, it will not sum one more, it only will use the special character
    return index
  }else{
    return index + 1;
  }

}
function result(message){
    return cipheringMessage(message)
}

module.exports = result;