let a = 81
let b = Math.floor(a / 10)
let c
switch (b) {
    case 10:
    case 9:
        c = 'A'
        break;
    case 8:
        c = 'B'
        break;
    default:
        c = 'C'
}
console.log(a, c)