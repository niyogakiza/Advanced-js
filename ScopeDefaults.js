
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

// ========== default arguments ==========
function add (x, y, z = 10) {
  return (x + y) * z
}

const total = add(1, 2, 0) // 0
console.log(total)

