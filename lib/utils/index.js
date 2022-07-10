export const debounce = (func) => {
  let timer;
  return function (...args) {
    const context = this;
    if (timer) clearTimeout(timer);
    timer = setTimeout(() => {
      timer = null;
      func.apply(context, args);
    }, 250);
  };
};

/**
 * Returns first item in an Object
 * @param obj
 * @returns {*}
 */
export const firstItemInAnObject = (obj) => {
  return obj[Object.keys(obj)[0]]
};
