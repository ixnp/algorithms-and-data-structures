def reverse_string(string)
    result = ''
     i = 0 
     while i < string.length 
      result= string[i] + result
      i += 1 
     end
     
     return result
    end
    
    reverse_string('aaabbbccc') #"cccbbbaaa"