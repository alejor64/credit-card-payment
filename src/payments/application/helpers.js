import { CARD_TYPES } from "./constants";

export const getCardTypeByValue = value => {
  return CARD_TYPES.find(cardType => cardType.startPattern.test(value))
};

export const matchCardLengthWith = (value, network) => {
  return network.maxCardNumberLength.some(length => length === value.length)
};