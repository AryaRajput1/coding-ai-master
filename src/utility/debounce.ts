export const debounceFn = <T extends unknown[]>(callback: (...args: T) => void, duration = 10000):((...args: T) => void) => {
    let timer: ReturnType<typeof setTimeout>;
    return (...args: T) => {
        clearTimeout(timer);
        timer = setTimeout(() => { callback.apply(this, args); }, duration);
    }
}