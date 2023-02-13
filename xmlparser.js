const xmlFile = `
<list>
  <student>
    <name lang="en">
      <first>Ivan</first>
      <second>Ivanov</second>
    </name>
    <age>35</age>
    <prof>teacher</prof>
  </student>
  <student>
    <name lang="ru">
      <first>Петр</first>
      <second>Петров</second>
    </name>
    <age>58</age>
    <prof>driver</prof>
  </student>
</list>`;

const parser = new DOMParser();
const xmlDOM = parser.parseFromString(xmlFile, 'text/xml');
const bookNode = xmlDOM.querySelector('list');
const student = bookNode.querySelectorAll('student');
let someArray = [];
student.forEach(element => {
    const studentName = element.querySelector('name');
    const firstName = studentName.querySelector('first');
    const secondName = studentName.querySelector('second');
    const age = element.querySelector('age')
    const prof = element.querySelector('prof')
    const langAtr = studentName.getAttribute('lang')
    const person = {
        name: firstName.textContent + ' ' + secondName.textContent,
        age: age.textContent,
        prof: prof.textContent,
        lang: langAtr}
    someArray.push(person)
});

const objectPersons = {list: someArray}
console.log(objectPersons);