title = "dr";
name = "Mateusz";
surname = 'Kubicki';
street = 'Długa 15';
city = 'Kraków';
zip = '30-781';
country = 'Poland';

countryUpperCase = country.toUpperCase();

/* 
dr Mateusz Kubicki
ul. Długa 15
30-781 Kraków
POLAND
*/

console.log(title + name + surname + street + zip + city + country)

console.log(`${title} ${name} ${surname} \nul. ${street}\n${zip} ${city}\n${countryUpperCase}`)
