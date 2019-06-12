//source: Cracking the coding interview, Gayle Mcdowell, chapter 1
//Given a string, compress it useing the counts of  repeated characters
//in: 'aabccccccaaaa'
//out: 'aa2b1c6a4'


//solution 1
function stringCompress(str){
    let result = [];
    let counter = 1;
    for(let i = 0; i < str.length; i++){
      if(str.charAt(i) != str.charAt(i+1)){
        result.push(str.charAt(i))
        result.push(counter)
        counter = 1
      }else{
        counter++
      }
    }
    return result.join('');
  }
  //test 
  stringCompress('aabccccccaaaa') //'aa2b1c6a4'
  stringCompress('a')// 'a1'
  stringCompress('')// ''