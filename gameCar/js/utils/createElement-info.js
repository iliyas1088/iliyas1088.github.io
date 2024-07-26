function createElementInfo(element) {
    return {
        coords: getCoords(element),
        height: element.clientHeight,
        width: element.clientWidth / 2,
        visible: true,
        ignoreAppearance: false,
    }
}