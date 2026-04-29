export function debounce(func: Function, waitMS: number) {
  let timeout: number | undefined;

  return function (...args: any[]) {
    clearTimeout(timeout);
    timeout = window.setTimeout(() => {
      func(...args);
    }, waitMS);
  };
}