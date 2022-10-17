export function getToken(key) {
    return window.localStorage.getItem(key)
}

export function setToken(key, value) {
    window.localStorage.setItem(key, value)
}

export function clearToken() {
    window.localStorage.clear()
}