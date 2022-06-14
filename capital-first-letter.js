function capitalize(string) {
   const firstLetter = string.slice(0,1).toUpperCase();
   const otherLetters = string.slice(1 , string.length);
   
    return firstLetter + otherLetters;
}

module.exports = capitalize;