function isWinner(board,symobl){
  if(board[0] == board[1] && board[1] == board[2] && board[2] == symobl) return symobl;
  if(board[3] == board[4] && board[4] == board[5] && board[5] == symobl) return symobl;
  if(board[6] == board[7] && board[6] == board[8] && board[8] == symobl) return symobl;

  if(board[0] == board[3] && board[3] == board[6] && board[6] == symobl) return symobl;
  if(board[1] == board[4] && board[4] == board[7] && board[7] == symobl) return symobl;
  if(board[2] == board[5] && board[5] == board[8] && board[8] == symobl) return symobl;

  if(board[0] == board[4] && board[4] == board[8] && board[4] == symobl) return symobl;
  if(board[2] == board[4] && board[4] == board[6] && board[4] == symobl) return symobl;


  return "";
}
export default isWinner;