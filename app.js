let fs = require('fs');

let std = require('./module1');
let photo = require('./module2');

let student1 = std.student1;
let student2 = std.student2;
let student3 = std.student3;
let student4 = std.student4;
let student5 = std.student5;
let student6 = std.student6;
//Поміщаємо студентів в масив
let arr = [student1,student2,student3];
let arr2 = [student4,student5,student6];
//додаємо до 28 групи
fs.mkdir('js18' , () => {
    fs.writeFileSync('./js18/studFile', arr, () => {
        console.log('Enter to 18 group.');
    });
});
//додаємо до 20 групи
fs.mkdir('js20' , () => {
    fs.writeFileSync('./js20/studFile2', arr2 , () => {
        console.log('Enter to 20 group.');
    });
});

let myRead = fs.createReadStream(__dirname + '/js18/studFile', 'utf8');
let myWrite = fs.createWriteStream(__dirname + '/js20/studFile2');

myRead.pipe(myWrite);

let myRead1 = fs.createReadStream(__dirname + '/js20/studFile2', 'utf8');
let myWrite1 = fs.createWriteStream(__dirname + '/js18/studFile');

myRead1.pipe(myWrite1);

let p1 = photo.photo1;
let p2 = photo.photo2;
let p3 = photo.photo3;
