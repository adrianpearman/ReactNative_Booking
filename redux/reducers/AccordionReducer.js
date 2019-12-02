import TYPES from "../actions/types";

const INITIAL_STATE = {
  activeSections: [0], //default active selector
  fontLoaded: false,
  bookMarked: false
};

export const AccordionReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case TYPES.ACCORDION_SECTION_SELECT:
      return {
        ...state,
        activeSections: action.payload
      };
    case TYPES.FONTS_LOADED:
      return {
        ...state,
        fontLoaded: action.payload
      };
    case TYPES.BOOKMARK_TOGGLE:
      return {
        ...state,
        bookMarked: !state.bookMarked
      };
    default:
      return state;
  }
};
