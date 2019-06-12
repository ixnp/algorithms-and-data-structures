#source: Cracking the coding interview, Gayle Mcdowell, chapter 1
#Given a string, compress it useing the counts of  repeated characters
#in: 'aabccccccaaaa'
#out: 'a2b1c6a4'

#solution 1
def strCompress(string)
    str = string.split('')
     result = []
     counter = 1
     current = 0
     str.each do |char|
       if char != str[current+1]
         result << char
         result << counter
         counter = 0
       end
         current +=1
         counter +=1
     end
     result.join('')
   end
   
   strCompress('aabccccccaaaa')