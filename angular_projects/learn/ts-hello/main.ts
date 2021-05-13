// code to show TS compiling to JS

/* function log(message) {
 console.log(message);   
}

var message = 'Hi User';
log(message); */


// variables

function doThis() {
    for(let i=0; i<5; i++) {        //try with var and let..check 'i' in finally..execute with error and check main.js
        console.log(i);
    }
    console.log('Finally check this: ', +i);
}

doThis();