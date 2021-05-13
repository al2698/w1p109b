let arr = { 1: 0, 5: 0, 10: 0, 50: 0 }
let money = 418
for (let check of [50, 10, 5, 1]) {
    for (let name in arr) {
        if (name = check) {
            for (; money / name >= 1; money -= name)
                arr[name]++;
            console.log(name, arr[name]); 
            break;
        }
    }
}