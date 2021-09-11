export const getToken = () => {
    let cookie = document.cookie.split(" ")
    let tokenIndex = cookie.findIndex(item => item.startsWith('x-auth-token'))
    if (tokenIndex !== -1) {
        let token = cookie[tokenIndex].split("=")[1]
        if (token.charAt(token.length - 1) === ';') {
            return token.slice(0, -1)
        }
        return token
    } else {
        return false
    }
}

export const createCookie = (name, value, expireDays) => {
    let date = new Date();
    let now = date.getTime()
    let expire = (parseFloat(expireDays) * 24 * 3600 * 1000) + now
    document.cookie = `${name}=${value}; expires=${new Date(expire).toUTCString()}; path=/`
}
