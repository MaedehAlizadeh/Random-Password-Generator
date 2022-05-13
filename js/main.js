//Template Name : Random Password Generator
//Author Name : Maedeh Alizadeh

const randomPass = document.querySelector('.form-control');
const passGenBtn = document.querySelector('.generate-btn');
const copyBtn = document.querySelector('.copy-btn')

passGenBtn.addEventListener('click' , generatePass);


function generatePass(event) {
    event.preventDefault();
    const char = '1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let pass = '';
    const passLength = 16;

    for( let i = 0 ; i <= passLength ; i++) {
        let randomChar = char.charAt(Math.floor(Math.random() * char.length));
        pass += randomChar;
    }

    randomPass.value = pass;
    
}

