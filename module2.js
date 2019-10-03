let fs1 = require('fs');

let photo1 = '/ang';
let photo2 = '/Js1';
let photo3 = '/nd';

fs1.mkdir('photos', (err) => {

    if(err){ return false}
    console.log('success');

});

module.exports = {
    f1: photo1,
    f2: photo2,
    f3: photo3
};
