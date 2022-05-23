const fs = require('fs');
let sum=0;
let say=0;
fs.readFile('./arr.json', 'utf8', (err, data) => {
const dataObj=JSON.parse(data)
// console.log(dataObj[2].age)

for(let i=0;i<dataObj.length; i++){
    sum=sum+dataObj[i].age;
    say++;
}

let orta=sum/say
console.log(orta);
const ortaString=JSON.stringify(orta)
fs.writeFile('newfile.txt', ortaString, function (err) {
    if (err) throw err;
    console.log('File is created successfully.');
  });

})


// dataObj.age.forEach(element => {
//     sum=sum+element;
//     say++;
//    });

