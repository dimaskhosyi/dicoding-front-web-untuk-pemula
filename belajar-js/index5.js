function greeting(){
	console.log('Good Morning')
}

greeting()

function greet(name, language){
	if(language === 'English'){
		console.log(`Good Morning ${name}`)
	}else if(language == 'Indonesia'){
		console.log(`Selamat pagi ${name}`)
	}else{
		console.log(`Hi ${name}`)
	}
}

greet('Dimas', 'Jepang')

function multiply(a, b){
	return a * b
}

let result = multiply(10, 2);
console.log(result)