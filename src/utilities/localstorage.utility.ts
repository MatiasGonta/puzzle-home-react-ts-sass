export const setLocalStorage = (key: string, value: any):void => {
    localStorage.setItem(key, JSON.stringify(value));
}

export const getLocalStorage = (key: string): string | null => {
    return localStorage.getItem(key);
}