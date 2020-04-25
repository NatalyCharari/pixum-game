import { INIT_BOARD, MOVE_LEFT, MOVE_RIGHT } from "./actions";

const initialState = {
  app: {
    name: "Pixum Game",
  },
  board: [],
  rows: 0,
  cols: 0,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case INIT_BOARD:
      return {
        ...state,
        ...action.payload,
      };
    case MOVE_LEFT:
      return {
        ...state,
        board: action.payload.board,
      };
    case MOVE_RIGHT:
      return {
        ...state,
        board: action.payload.board,
      };
    default:
      return state;
  }
};

export default reducer;
