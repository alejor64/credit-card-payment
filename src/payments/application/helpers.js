import { CARD_TYPES } from "./constants";

export const getCardTypeByValue = value => {
  return CARD_TYPES.find(cardType => cardType.startPattern.test(value))
};

export const validateNumber = (number, length) => {
  const pattern = `^\\d{${length}}$`;
  const regex = new RegExp(pattern);
  return regex.test(number);
};