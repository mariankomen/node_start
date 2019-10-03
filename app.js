const fs = require('fs');

const std = require('./module1');
const photo = require('./module2');

const student1 = std.student1;
const student2 = std.student2;
const student3 = std.student3;
const student4 = std.student4;
const student5 = std.student5;
const student6 = std.student6;
//Поміщаємо студентів в масив
const arr = [student1,student2,student3];
const arr2 = [student4,student5,student6];
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

const myRead = fs.createReadStream(__dirname + '/js18/studFile', 'utf8');
const myWrite = fs.createWriteStream(__dirname + '/js20/studFile2');

myRead.pipe(myWrite);

const myRead1 = fs.createReadStream(__dirname + '/js20/studFile2', 'utf8');
const myWrite1 = fs.createWriteStream(__dirname + '/js18/studFile');

myRead1.pipe(myWrite1);

const p1 = photo.photo1;
const p2 = photo.photo2;
const p3 = photo.photo3;
