//Operator

//Assignment
let x = 10;
let y = 5;

x += y;

console.log(x)
console.log('---------------')
//Comparison Operator
let a = 10;
let b = 12;

console.log(a < b)
console.log(a < b)

//Logical Operator
let c = 10;
let d = 12;
console.log('---------------')
//AND
console.log(c < 15 && d > 10)
console.log(c > 15 && d > 10)

//OR
console.log(c < 15 || d > 10)
console.log(c > 15 || d > 10)

//NOT
console.log(!(c<15))
console.log('---------------')

//If/Else Statement
const isRaining = false;

console.log('Persiapan sebelum berangkat kegiatann')
if(isRaining){
	console.log('Hari ini hujan. Bawa payung')
}

console.log('Berangkat kegiatan')
console.log('---------------')

let e = 80;
if(e > 70){
	console.log(e)
}else{
	console.log('Nilai kurang dari 70')
}

console.log('---------------')

let language = 'French'
let greet = 'Selamat pagi'

if(language === 'English'){
	greet = 'Good Morning'
}else if(language === 'French'){
	greet = 'Bonjour'
}else{
	greet = greet
}

console.log(greet)
console.log('---------------')

//Ternary Operator
const isMember = false;
const discount = isMember ? 0.1 : 0;
console.log(`Anda mendapatkan diskon sebesar ${discount * 100}%`)
console.log('---------------')

//Switch Case Statement
let bahasa = 'Japan'
let salam = 'Selamat Pagi'

switch(bahasa){
	case 'English':
		salam = 'Good Morning'
		break;
	case 'Japan':
		salam = 'Ohayou'
		break;
	case 'France':
		salam = 'Bonjour'
		break;
	default:
		salam
}

console.log(salam)