function evenOdd(text){
const length = text.length;
if(length % 2 !== 0){
return 'odd';
}
else if(length % 2 === 0){
return 'even';
}
else{
return 'write something before comparing!';
}
}
const evenOddResult = evenOdd('Batch7');

//-------------------------------------------------------------
console.log(evenOddResult)
//-------------------------------------------------------------

// Third problem: a function to compare a number if it is Less or Greater than seven with an additional feature..
function isLGSeven(num){
number = num - 7;
if(number < 7){
return number;
}
else if(number > 7){
number = num * 2;
return number;
}
else{
return 'put a number plz';
}
}
const testingStringIndex = isLGSeven('ew');
console.log(testingStringIndex)
// Fourth problem: a function for finding Bad data from an array..
function findingBadData(data){
const badData = [];
for(let i = 1; i <= data.length; i++){
const index = data[i];
if(index < 0){
badData.push(index)
}
}
return badData;
}
const myNums = [12, 23, -34, 45, 56, -67, -78, 89, 90];
const badData = findingBadData(myNums);
console.log(badData.length)
// Fifth problem: a function to Convert your gems into diamond..
function gemsToDiamond(friend1, friend2, friend3){
const firstFriendGems = friend1 * 21;
const secondFriendGems = friend2 * 32;
const thirdFriendGems = friend3 * 43;
let totalGems = firstFriendGems + secondFriendGems + thirdFriendGems;
if(totalGems >= 1000*2){
totalGems = totalGems - 2000;
return totalGems;
}
else if(totalGems < 1000*2){
return totalGems;
}
else{
return 'put numbers only';
}
}
const output = gemsToDiamond(20, 200, 50);
console.log(output);