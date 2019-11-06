window.jQuery = function (selectorOrArray) {
    let elements
    if (typeof selectorOrArray === 'string') {
        elements = document.querySelectorAll(selectorOrArray)
    }
    else if (selectorOrArray instanceof Array) {
        elements = selectorOrArray
    }
    return {
        addClass(className) {
            for (i = 0; i < elements.length; i++) {
                elements[i].classList.add(className)
            }
            return this
        },
        find(selectorOrArray) {
            let array = []
            for (i = 0; i < elements.length; i++) {
                let x = Array.from(
                    elements[i].querySelectorAll(selectorOrArray)
                )
                array = array.concat(x)
            }
            array.oldApi = this
            return jQuery(array)
        }
    }
}

