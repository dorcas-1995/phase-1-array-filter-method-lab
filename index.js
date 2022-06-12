// Code your solution here

const findMatching = (drivers, string) => {
  return drivers.filter((name) => name.toLowerCase() === string.toLowerCase());
};

const fuzzyMatch = (drivers, string) => {
  return drivers.filter((index) => index[0] === string[0]);
};

const matchName = (drivers, string) => {
  return drivers.filter((data) => data.name === string);
};