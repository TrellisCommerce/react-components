/**
 * Debounce
 * @param func
 * @returns {(function(...[*]): void)|*}
 */
export const debounce = (func: (index: number) => void) => {
  let timer: string | number | NodeJS.Timeout;
  return function (...args: any) {
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
export const firstItemInAnObject = (obj: any) => {
  return obj[Object.keys(obj)[0]];
};

interface ClassName {
  overrideDefaults: boolean;
  styles: string;
  classOverride: boolean;
}

/*
 * Generate component custom classes
 * @param classes
 * @param classNames
 * @returns {string}
 */
export const generateClasses = (
  classes: string,
  classNames: string,
  shouldOverride: boolean,
) => {
  if (shouldOverride) {
    classes = classNames;
  } else {
    classes = `${classes} ${classNames}`;
  }
  return classes;
};
