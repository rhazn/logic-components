/**
 * from https://dev.to/daviddalbusco/debounce-with-vanilla-javascript-or-rxjs-280c
 */
export function debounce(func: Function, timeout?: number) {
    let timer: NodeJS.Timeout | undefined;
    return (...args: any[]) => {
        const next = () => func(...args);
        if (timer) {
            clearTimeout(timer);
        }
        timer = setTimeout(next, timeout > 0 ? timeout : 300);
    };
}
