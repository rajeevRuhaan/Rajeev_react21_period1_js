const yourArray = [1, 1, 2, 2, 3, 4, 5, 5];
const yourArrayWithoutDuplicates = [...new Set(yourArray)];
console.log("yourArrayWithoutDuplicate",yourArrayWithoutDuplicates);

let duplicates = [...yourArray];
console.log("this is duplicat" , duplicates);

yourArrayWithoutDuplicates.forEach((el) => {
    const i = duplicates.indexOf(el)
    console.log("i", i); 
    duplicates = duplicates.slice(0 , i).concat(duplicates.slice(i + 1, duplicates.length));
    console.log(duplicates);

})
//console.log(duplicates);