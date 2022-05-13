//Template Name : Random Password Generator
//Author Name : Maedeh Alizadeh

const randomPass = document.querySelector('.form-control');
const passGenBtn = document.querySelector('.generate-btn');
const copyBtn = document.querySelector('.copy-btn')
const copyMsg = document.querySelector('.copy-msg');

passGenBtn.addEventListener('click' , generatePass);
copyBtn.addEventListener('click' , copyPass);

function generatePass(event) {
    event.preventDefault();
    copyMsg.style.setProperty("display", "none");
    const char = '1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let pass = '';
    const passLength = 16;

    for( let i = 0 ; i <= passLength ; i++) {
        let randomChar = char.charAt(Math.floor(Math.random() * char.length));
        pass += randomChar;
    }

    randomPass.value = pass;
    
    if( !(!randomPass.value) ) {
        copyBtn.style.setProperty("display", "block", "important");
    }
}


function copyPass(event) {
    event.preventDefault();
    randomPass.select();
    document.execCommand('copy');
    copyMsg.style.setProperty("display", "block", "important");
}

