const jsonString = `{
    "list": [
     {
      "name": "Petr",
      "age": "20",
      "prof": "mechanic"
     },
     {
      "name": "Vova",
      "age": "60",
      "prof": "pilot"
     }
    ]
   }`


const data = JSON.parse(jsonString);
console.log(data);
// const persons = data.list;
// const person = {list: [persons]}
// console.log(person);