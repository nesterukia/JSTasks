const string = "Добрейшего вечера, мой друг!";
function getVowels(text) {
    let result = '';
    for (let i = 0; i < text.length; i++) {
        if ("уеёыаоэяию".includes(text[i].toLowerCase())) {
            result += text[i];
        }
    }
    return result;
}

console.log(getVowels(string));