
/*************************************************************
* Scope for defaults
* ***********************************************************/
const {log} = console
function areaOfRectangle(width, height = width) {
    return width * height
}
log(areaOfRectangle(5))
log(areaOfRectangle(5, 4))

function params(a, b) {
    let width = a;
    let height = (b === undefined) ? a : b;
    return width * height
}
log(params(4, 5))
