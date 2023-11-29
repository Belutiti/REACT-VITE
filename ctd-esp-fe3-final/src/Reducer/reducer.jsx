export const reducer = (state, action) => {
  switch (action.type) {
    case "THEME":
      return { ...state, theme: !state.theme };
    case "FAVLIST":
      return { ...state, data: action.payload };
      case "HOMELIST":
        return { ...state, homeList: action.payload };
        case "DETAILIST":
            return { ...state, detaiList: action.payload };
    default:
      return state;
  }
};
