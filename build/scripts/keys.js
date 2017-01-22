const s4 = () => {
    return Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1);
}

const shortKey = () => {
    return s4() + s4();
}

for(var i = 0; i < 20; i++) {
    console.log(`${shortKey()}`);
}