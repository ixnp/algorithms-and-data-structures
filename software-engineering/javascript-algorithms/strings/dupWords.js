//given a string of words, determine if the string has any duplicate words. 
// in: "cookie cat he's a pet for your tummy!"
// out: false
// in: "Cookie Cat! He's super duper yummy! Cookie Cat! He left his family behind! Cookie Caaaaat! Now available at Gurgens off Route 109!"
// in: true

//part two
// remove all duplicate words from string
// in: "Cookie Cat! He's super duper yummy! Cookie Cat! He left his family behind! Cookie Caaaaat! Now available at Gurgens off Route 109!"
// out: "super duper yummy! left his family behind! Caaaaat! Now available at Gurgens off Route 109!"

//solution 1
function dupWords(string){
    let str = string.split(' ')
    let keyMap = {}
    let dups = false
    for(let i = 0; i < str.length; i++){
      if(!keyMap[str[i]]){
        keyMap[str[i]] = true;
      } else {
        dups = true
        break
      }
    }
    return dups
  }
  
  dupWords("Cookie cat") //false
  dupWords("cat, cat, cat") //true