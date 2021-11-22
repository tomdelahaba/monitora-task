import TagTypes from "../utils/Tag.types";

export const tagTypeForProps = (diff) => {
  if (diff <= -3) {
    return TagTypes.IS_LOWER;
  }
  if (diff >= 3) {
    return TagTypes.IS_HIGHER;
  }
  return TagTypes.IS_EQUAL;
};
