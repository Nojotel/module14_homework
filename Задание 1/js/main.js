const parse = new  DOMParser();

const xmlString = `
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
</list>
`;

const xmlDOM = parse.parseFromString(xmlString, "text/xml")
const listNode = xmlDOM.querySelector('list');
const studentNodes = [...listNode.querySelectorAll('student')]
const array = new Array()

studentNodes.forEach(student => {
  const nameNode = student.querySelector("name");
  const firstNode = student.querySelector('first')
  const secondNode = student.querySelector('second')
  const ageNode = student.querySelector('age')
  const profNode = student.querySelector('prof')
  const langAttr = nameNode.getAttribute('lang')
  let fullName = firstNode.textContent + ' ' + secondNode.textContent
  array.push({
    name: fullName, age:ageNode.textContent, prof: profNode.textContent, lang: langAttr
  })
})

const list = {
  list: array
}
console.log(list)


