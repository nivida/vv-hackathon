let compose2 = (f, g) => (...args) => f(g(...args));

export const compose = (...functions) => {

  const funcs = functions.filter(fn => typeof fn === 'function');

  if (funcs.length <= 0) {
    throw new Error('No funcs passed');
  }

  return funcs.reduce(compose2);
};
