import { firstItemInAnObject } from './index';
import { generateClasses } from './index';
import { debounce } from './index';

jest.useFakeTimers();

describe('firstItemInAnObject', () => {
  it('returns the first item in an object', () => {
    const obj = { a: 1, b: 2, c: 3 };
    expect(firstItemInAnObject(obj)).toBe(1);
  });
});

describe('generateClasses', () => {
  it('should override classes if shouldOverride is true', () => {
    const classes = 'original-class';
    const classNames = 'new-class';
    const shouldOverride = true;
    const result = generateClasses(classes, classNames, shouldOverride);
    expect(result).toBe(classNames);
  });

  it('should concatenate class names if shouldOverride is false', () => {
    const classes = 'original-class';
    const classNames = 'new-class';
    const shouldOverride = false;
    const result = generateClasses(classes, classNames, shouldOverride);
    expect(result).toBe(`${classes} ${classNames}`);
  });

  it('should handle empty string input', () => {
    const classes = '';
    const classNames = 'new-class';
    const shouldOverride = false;
    const result = generateClasses(classes, classNames, shouldOverride);
    expect(result).toBe(classNames);
  });
});

describe('debounce', () => {
  let func: jest.Mock;
  let debouncedFunc: (index: number) => void;

  beforeEach(() => {
    func = jest.fn();
    debouncedFunc = debounce(func);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should call the original function after a delay', () => {
    debouncedFunc(1);
    debouncedFunc(2);
    debouncedFunc(3);
    expect(func).not.toHaveBeenCalled();
    jest.advanceTimersByTime(250);
    expect(func).toHaveBeenCalledWith(3);
  });

  it('should clear the timeout if debounced function is called again before delay', () => {
    debouncedFunc(1);
    jest.advanceTimersByTime(100);
    debouncedFunc(2);
    jest.advanceTimersByTime(250);
    expect(func).toHaveBeenCalledWith(2);
  });
});
