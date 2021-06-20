const shorten = (url) => {

    const filteredURL = url.replace(/\?|\=|\&|\:|\+|\-|\.|http|https|\%|\//g ,"")
    const length = 5
    var shortURL = ""

    for (var i = 0; i < length; i++) {
        shortURL += filteredURL.charAt(Math.floor(Math.random() * filteredURL.length))
    }
    
    return shortURL

}

module.exports = shorten