export default function appReducer(state, action) {
    switch (action.type) {
      case "ADD_PLAY":
        return {
          ...state,
          plays: [...state.plays, action.payload],
        };
      case "ADD_LEVEL":
        return {
          ...state,
          level: action.payload,
        };
      default:
        return state;
    }
  };