const student1 = {
    name: 'Marian',
    surname: ' Lyzhychka ',
    university: 'Lviv Polyrechnic',
    knowledge: '   JavaScript \n'
};

const student2 = {
    name: 'Stepan',
    surname: 'Giga',
    university: 'LNMU',
    knowledge: ' C++\n'
};

const student3 = {
    name: ' Myhailo',
    surname: ' Zmusnyi',
    university: ' Lviv Polytechnic ',
    knowledge: ' Fortrun  '
};


const student4 = {
    name: ' Oleksandt ',
    surname: ' Dulianutskiy ',
    university: ' Lviv Lisotechnic ',
    knowledge: ' C# \n'
};

const student5 = {
    name: ' Ivan ',
    surname: ' Kandiak ',
    university: ' Bursa #34 ',
    knowledge: ' Undefined\n'
};

const student6 = {
    name: ' Volodya ',
    surname: ' Zelenskiy',
    university: ' KPI ',
    knowledge: ' Node JS '
};


module.exports = {
    student1: Object.values(student1),
    student2: Object.values(student2),
    student3: Object.values(student3),
    student4: Object.values(student4),
    student5: Object.values(student5),
    student6: Object.values(student6)
};
