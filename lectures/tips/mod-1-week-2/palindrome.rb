# solution 1
def palindrome(str)
    str == str.reverse
  end
  
  # solution 2
  def palindrome(string)
    if string.length == 1 || string.length == 0
      true
    else
      if string[0] == string[-1]
        palindrome(string[1..-2])
      else
        false
      end
    end
  end
  
  
  palindrome('tacocat')