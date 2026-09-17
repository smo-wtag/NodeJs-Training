function debounce(func, delay) {
  let timerId;
  return function (...args) {
    clearTimeout(timerId);

    timerId = setTimeout(() => {
      func.apply(this, args);
    }, delay);
  };
}

function throttle(func, limit) {
  let isThrottle = false;

  return function (...args) {
    if (isThrottle) return;

    func.apply(this, args);
    isThrottle = true;

    setTimeout(() => {
      isThrottle = false;
    }, limit);
  };
}

function memoize(func) {
  const cache = {};

  return function (...args) {
    const key = JSON.stringify(args);

    if (key in cache) {
      return cache[key];
    }

    const result = func.apply(this, args);
    cache[key] = result;
    return result;
  };
}
