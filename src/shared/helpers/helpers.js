export const setValueToLocalStorage = (key, value) => {
  localStorage.setItem(key, value);
};

export const getValueFromLocalStorage = (key) => {
  return localStorage.getItem(key);
};

export const removeValueFromLocalStorage = (key) => {
  return localStorage.removeItem(key);
};