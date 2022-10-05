// =====Soal no.1=====

const name = 'Irfan Julian Ibrahim'
const email = 'irfanjulian23@gmail.com'
const address = {
    street: 'Cikutra',
    city: 'Bandung',
    zipCode: 40124
}
const isMarried = true
const hobbies = ['mendengar murrotal', 'bermain bola', 'mengoding']

// =====Soal no.2=====

const printGanjilGenap = 5
for(let i = 1; i <= printGanjilGenap; i++){
    if(i %2 === 0){
        console.log(`angka ${i} adalah angka genap`);
    }else{
        console.log(`angka ${i} adalah angka ganjil`);
    }
}

// =====Soal no.3=====

const printSegitiga = 5
let pattern = ''
for(let i = 0; i <= 5; i++){
    for(let j = 0; j < i; j++){
        pattern += i
    }
    pattern += '\n'
}
console.log(pattern);