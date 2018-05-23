 function isObject (item) {
    return Object.prototype.toString.call(item) === '[object Object]'
}

 function getPercentage (count, total) {
    return total === 0 ? 0 : parseInt(count / total * 100, 10)
}

export { isObject, getPercentage }

