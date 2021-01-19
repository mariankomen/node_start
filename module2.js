const fs1 = require('fs');

const photo1 = '/ang';
const photo2 = '/Js1';
const photo3 = '/nd';

fs1.mkdir('photos', (err) => {

    if(err){ return false}
    console.log('success');

});

module.exports = {
    f1: photo1,
    f2: photo2,
    f3: photo3,
    f4: photo2
};
