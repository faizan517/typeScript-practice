//Find longest string;
// function findLongestWordLength(str) {
//   let cur = 0;
//   let len = 0;
//   for (let i = 0; i < str.length; i++) {
//     if (str[i] == " ") {
//       if (cur > len) {
//         len = cur;
//       }
//       cur = 0;
//     } else {
//       cur++;
//     }
//     if (cur > len) {
//       len = cur;
//     }
//   }
//   return len;
// }
// console.log(
//   findLongestWordLength(
//     "What if we try a super-long word such as otorhinolaryngology"
//   )
// );
// function largestOfFour(arr) {
    // let newArr = [];
    // for (let i = 0; i < arr.length; i++) {
    //   let largestNumber = arr[i][0]
    //   for (let j = 1; j < arr.length; j++) {
    //     if( arr[i][j]> largestNumber){
    //       largestNumber = arr[i][j]
    //     };
    //   }
    //   newArr[i] = largestNumber
    // }
    // console.log( newArr)
//     var newArr = [];
//     arr.map(function (v) {
//         newArr.push(v.reduce(function (pre, curr) { return (curr > pre ? curr : pre); }));
//     });
//     console.log(newArr);
// }
// largestOfFour([
//     [4, 5, 1, 3],
//     [13, 27, 18, 26],
//     [32, 35, 37, 39],
//     [1000, 1001, 857, 1],
// ]);


function confirmEnding(str, target) {
//     const arr = str.split('')
//   let arrRev =  arr.reverse()
//   console.log( arrRev[0] == target)
  }
  
//   confirmEnding("Bastian", "n");

//   let nam = "If you want to save our world, you must hurry. We dont know how much longer we can withstand the nothing mountain";
//   let target = 'in';

// let a = nam.slice(-target.length) == target
// //   const arr = nam.split('')
// //   let newName =  arr.reverse()
// //   let str = newName.toString()
//   console.log(a)


// function repeatStringNumTimes(str, num) {
  
//   console.log(  num < 1? "":str+ repeatStringNumTimes(str,num -1))
//   // debugger
// }

// repeatStringNumTimes("*", 6);


// let nums = [4,1,2,1,2];
// let a = nums.filter((v,i)=>{
//   return( nums.indexOf(v) != v)
// })
// console.log( a)


// var singleNumber = function(nums) {
//   let a= nums.filter((v,i)=>{
//   return nums.indexOf(v) == = v  
// })
// return a
// };
// console.log( singleNumber([4,1,2,1,2,4,3,3,0]))


// let n = 00000000000000000000000000001011
// let num = n.toString(2);
// let one= 0 ;
// for (let i = 0; i < num.length; i++) {
//   num[i] == 1?one++: false;
// }
// // console.log("🚀 ~ file: app.js:95 ~ n:", n )
//   console.log("🚀 ~ file: app.js:97 ~ one:",  one)

// function a(nums){
  
//  return [...nums].sort((a,b) =>{
//  console.log(a,b)
//  nums.filter(v => v===a).length
//          - nums.filter(v => v===b).length
//      }).pop();
// }
// console.log("🚀 ~ file: app.js:104 ~ nums:", a([2,2,1,1,1,2,2]))

var mergeTwoLists = function(list1, list2) {
  let sortedList = [];
  for(let i in list1)
  sortedList += ( list1[i])
  // console.log("🚀 ~ file: app.js:117 ~ mergeTwoLists ~ l1:", list1)
  // for(let j in list2)
  // sortedList.push( list2[j])
  // console.log("🚀 ~ file: app.js:117 ~ mergeTwoLists ~ l2:", l2)
  console.log( sortedList)
    
};

mergeTwoLists( [1,2,4] , [1,3,4])