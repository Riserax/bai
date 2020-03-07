class Person {
    constructor(name, surname) {
        this.name = name
        this.surname = surname
    }

    returnPerson = () => {
        let surnameToUppercase = (this.surname).toUpperCase()
        let nameFirstLetter = (this.name).substring(0, 1).toUpperCase()
        let surnameFirstLetter = (this.surname).substring(0, 1).toUpperCase()
        console.log(`${this.name} ${surnameToUppercase}, ${nameFirstLetter}.${surnameFirstLetter}.`)
    }
}

firstPerson = new Person('Jan', 'Kowalski')
secondPerson = new Person('Kamil', 'Cała')

firstPerson.returnPerson()
secondPerson.returnPerson()
