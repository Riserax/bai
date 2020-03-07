var random = () => {
    for (let i = 0; i <= 9; i++) {
        let rand = Math.floor(Math.random() * 16) + 5
        console.log(rand)
    }
}

random()