export const debounceFn = <T>(callback: (...args: T[]) => void, duration = 10000) => {
    let timer: NodeJS.Timeout;
    return (...args: T[]) => {
        clearTimeout(timer);
        timer = setTimeout(() => { callback.apply(this, args); }, duration);
    }
}