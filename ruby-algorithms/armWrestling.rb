#Given the lifting strength of the arms of two people.
#Determine the results of a arm wrestling match between the two
#[leftArm,rightArm]
#playerOne = [10,13]
#playerTwo = [11,9]
#in: playerOne,PlayerTwo
#out: Left Arm winner, playerTwo
#     Right Arm winner, playerOne

#in: [11,10], [11,9]
#out: Left arm tie 
#     Right arm winner, playerOne


#solution 1
def _game(arm1,arm2)
    if arm1 > arm2
       'winner player one'
    elsif arm1 < arm2
       'winner player two'
    else
       'tie'
    end
end
  
def armWrestling(playerOne, playerTwo)  

  playerOne.each_with_index.map { |arm, i| playerOne[i] = _game(playerOne[i], playerTwo[i]) }

  puts 'left arm game result is: ' + playerOne[0]
  puts 'right arm game result is: ' + playerOne[1]
end
  
#solution 2

def armWrestling(playerOne, playerTwo)
    left_winner = ''
    right_winner = ''

    if playerOne[0] > playerTwo[0]
        left_winner = "winner player One"
    elsif playerOne[0] == playerTwo[0]
        left_winner = "tie"
    else
        left_winner = "winner player Two"
    end

    if playerOne[1] > playerTwo[1]
        right_winner = "winner player One"
    elsif playerOne[1] == playerTwo[1]
        right_winner = "tie"
    else
        right_winner = "winner player Two"
    end

    puts "left arm game result is: #{left_winner}"
    puts "left arm game result is: #{right_winner}"
end
