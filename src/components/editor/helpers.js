export const findWithRegex = (regex, contentBlock, callback, removeStrings = false) => {
    
    const text = contentBlock.getText();
    let str = !removeStrings ? text: text.replace(/'[^']+'|"[^"]+"/g, function(match) {
        let res = '';
        for(var i = 0; i < match.length; i++) {
            res += ' ';
        }
        //console.log('replacing string', match, res);
        return res
    });
    console.log('new string', str);
    let matchArr, start;
    while ((matchArr = regex.exec(str)) !== null) {
        start = matchArr.index;
        callback(start, start + matchArr[0].length);
    }
}
