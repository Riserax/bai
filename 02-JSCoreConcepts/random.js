var arr = []

var random = () => {
    for (let i = 0; i < 9; i++) {
        // arr.push((Math.random() * 100) + 5)
        let rand = Math.floor((Math.random() * 100))
        if (rand >= 5 && rand <= 20) {
            // console.log(rand)
            arr.push(rand)
        }
    }
    arr.sort();
    return arr
}

// console.log(random())
// console.log(Math.floor((Math.random() * 100)))
console.log(random())