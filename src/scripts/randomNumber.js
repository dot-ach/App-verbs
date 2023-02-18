const randomNumber = (max, min) => {
  const result = Math.floor((Math.random() * (max - min + 1)) + min);
  return result;
};

export { randomNumber };