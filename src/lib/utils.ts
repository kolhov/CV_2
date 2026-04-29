export function debounce(func: Function, waitMS: number) {
  let timeout: number | undefined;

  return function (...args: any[]) {
    clearTimeout(timeout);
    timeout = window.setTimeout(() => {
      func(...args);
    }, waitMS);
  };
}

export function clamp(min: number, value: number, max: number) {
  return Math.min(max, Math.max(min, value));
}
