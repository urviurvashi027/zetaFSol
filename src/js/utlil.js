const bro = greeting => {
    return `${greeting} bro`
} 

export const debounce = (inputFunction, time) => {
    let timeout;
    const caller = function(...args) {
      inputFunction(...args);
      timeout = null;
    };
    return function(...args) {
      if (timeout) {
        clearTimeout(timeout);
      }
      timeout = setTimeout(caller.bind(this, ...args), time);
    };
  };

export { bro }