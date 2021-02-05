const students = [
    {id: 21, name: 'Omar Sunny'},
    {id: 31, name: 'Maannaaaaaa'},
    {id: 41, name: 'Moy uri'},
    {id: 71, name: 'Dipjol'}
];

const names = students.map( s => s.name);
const ids = students.map( s => s.id);
const bigger = students.filter( s => s.id > 40);
const biggerOne = students.find( s => s.id > 40);
console.log(names, ids, bigger, biggerOne);