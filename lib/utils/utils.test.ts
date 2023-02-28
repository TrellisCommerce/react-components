import { firstItemInAnObject } from './index';
import { generateClasses } from './index';
import { debounce } from './index';

// jest.useFakeTimers() is a method provided by the Jest testing framework that allows you to control the
// behavior of JavaScript's built-in timer functions
jest.useFakeTimers();

describe('firstItemInAnObject', () => {
  // Test the firstItemInAnObject function
  it('returns the first item in an object', () => {
    // create an object with multiple properties
    const obj = { a: 1, b: 2, c: 3 };
    // call the firstItemInAnObject function with the object and expect the returned value to be the first property's value
    expect(firstItemInAnObject(obj)).toBe(1);
  });
});

describe('generateClasses', () => {
  // Test case to check if the function overrides the original class when shouldOverride is set to true
  it('should override classes if shouldOverride is true', () => {
    const classes = 'original-class';
    const classNames = 'new-class';
    const shouldOverride = true;

    const result = generateClasses(classes, classNames, shouldOverride);
    expect(result).toBe(classNames);
  });

  // Test case to check if the function concatenates class names when shouldOverride is set to false
  it('should concatenate class names if shouldOverride is false', () => {
    const classes = 'original-class';
    const classNames = 'new-class';
    const shouldOverride = false;

    const result = generateClasses(classes, classNames, shouldOverride);
    expect(result).toBe(`${classes} ${classNames}`);
  });

  // Test case to check if the function handles empty string input correctly
  it('should handle empty string input', () => {
    const classes = '';
    const classNames = 'new-class';
    const shouldOverride = false;

    const result = generateClasses(classes, classNames, shouldOverride);
    expect(result).toBe(classNames);
  });
});

describe('debounce', () => {
  // jest.Mock will create a mock function, which we can use to test that the debounced function is calling the original function correctly
  let func: jest.Mock;
  // create a debounced function
  let debouncedFunc: (index: number) => void;

  beforeEach(() => {
    // Initialize the mock function
    func = jest.fn();
    // pass the mock function to the debounced function
    debouncedFunc = debounce(func);
  });

  afterEach(() => {
    // clear the mocks after each test
    jest.clearAllMocks();
  });

  it('should call the original function after a delay', () => {
    // these calls should not invoke the original function immediately
    debouncedFunc(1); // call
    debouncedFunc(2); // call
    debouncedFunc(3); // call

    // expect the original function to not have been called yet
    expect(func).not.toHaveBeenCalled();

    // advance the timers by 250ms
    jest.advanceTimersByTime(250);

    // expect the original function to have been called with the last argument passed to the debounced function
    expect(func).toHaveBeenCalledWith(3);
  });

  it('should clear the timeout if debounced function is called again before delay', () => {
    // call the debounced function
    debouncedFunc(1);
    // advance the timers by 100ms
    jest.advanceTimersByTime(100);
    // call the debounced function again
    debouncedFunc(2);
    // advance the timers by 250ms
    jest.advanceTimersByTime(250);
    // expect the original function to have been called with the last argument passed to the debounced function
    expect(func).toHaveBeenCalledWith(2);
  });
});
