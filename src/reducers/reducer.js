import { INIT_BOARD, UPDATE_BOARD, UPDATE_GAME_STATE } from "./actions";

const initialState = {
  app: {
    name: "Pixum Game",
  },
  board: [],
  rows: 0,
  cols: 0,
  gameOver: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case INIT_BOARD:
      return {
        ...state,
        ...action.payload,
      };
    case UPDATE_BOARD:
      return {
        ...state,
        board: action.payload.board,
      };
    case UPDATE_GAME_STATE:
      return {
        ...state,
        gameOver: action.payload.gameOver,
      };
    default:
      return state;
  }
};

export default reducer;
