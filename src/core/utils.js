// 4 char key is fine for ephemeral data like notifications
export const s4 = () => {
    return Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1);
}

// still pretty quick compared to using some crypto lib i guess
export const guid = () => {
    return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4();
}

export const base64Encode = (str) => {
    if(btoa) return btoa(str);
    return new Buffer(str).toString('base64')
}

export const base64Decode = (str) => {
    if(atob) return atob(str);
    return new Buffer(str, 'base64').toString('ascii')
}

export const timestamp = () => {
    return Math.floor(+new Date() / 1000)
}

export const utils = {
    s4,
    guid,
    base64Encode,
    base64Decode,
    timestamp
}