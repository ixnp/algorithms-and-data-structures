// Chessboards are 8x8 with alternating colors. 
// | white | BROWN | white | BROWN | white | BROWN | white | BROWN | 1
// | BROWN | white | BROWN | white | BROWN | white | BROWN | white | 2
// | white | BROWN | white | BROWN | white | BROWN | white | BROWN | 3
// | BROWN | white | BROWN | white | BROWN | white | BROWN | white | 4
// | white | BROWN | white | BROWN | white | BROWN | white | BROWN | 5
// | BROWN | white | BROWN | white | BROWN | white | BROWN | white | 6
// | white | BROWN | white | BROWN | white | BROWN | white | BROWN | 7
// | BROWN | white | BROWN | white | BROWN | white | BROWN | white | 8
//     A       B       C       D       E       F       G       H


// Given two cells on the standard chess board, determine whether they have the same color or not.

// Build a chessboard using a 2d array

//Given the positions of a white bishop and a black pawn on the standard chess board, 
//determine whether the bishop can capture the pawn in one move.
//The bishop has no restrictions in distance for each move, but is limited to diagonal movement. 
// in: {bishop:[a,8]}, {pawn:[c,6]}
// out:true
// in: {bishop:[a,8]}, {pawn:[d,7]}
// out: false