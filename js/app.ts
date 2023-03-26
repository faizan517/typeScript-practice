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


//Find Biggest value in Arrays
// function largestOfFour(arr: any[]) {
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
  // let newArr: number[] = [];
  // arr.map(v => {
  //   newArr.push(
  //     v.reduce((pre: number, curr: number) => (curr > pre ? curr : pre))
  //   );
  // });
  // console.log(newArr);
// }

// largestOfFour([
//   [4, 5, 1, 3],
//   [13, 27, 18, 26],
//   [32, 35, 37, 39],
//   [1000, 1001, 857, 1],
// ]);
