import TYPES from "./types";

export const bookMarkToggle = () => {
  return {
    type: TYPES.BOOKMARK_TOGGLE
  };
};

export const fontLoadedToggle = () => {
  return {
    type: TYPES.FONTS_LOADED,
    payload: true
  };
};

export const activeSectionToggle = sections => {
  return {
    type: TYPES.ACCORDION_SECTION_SELECT,
    payload: sections
  };
};
