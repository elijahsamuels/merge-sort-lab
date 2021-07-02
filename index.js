// return the smallest element of an array:
let a = [1, 3, 5, 7, 9];
let b = [2, 4, 6, 8, 10];

// const findMinAndRemoveSorted = (firstHalf, secondHalf) => {
// 	let minfirstHalf = firstHalf[0]
// 	let minsecondHalf = secondHalf[0]

// 	if(minfirstHalf < minsecondHalf){
// 		return firstHalf.shift()
// 	} else {
// 		return secondHalf.shift()
// 	}
// };

// const findMinAndRemoveSorted = (array) => {
//     let len = array.length;

//     for (let i = 0; i < len; i++) {
//         for (let j = 0; j < len; j++) {
// 			if ()
// 		}
//     }
// };

// const findMinAndRemoveSorted = (firstHalf, secondHalf) => {
// 	let minfirstHalf = firstHalf[0]
// 	let minsecondHalf = secondHalf[0]

// 	if(minfirstHalf < minsecondHalf){
// 		return firstHalf.shift()
// 	} else {
// 		return secondHalf.shift()
// 	}
// }

// findMinAndRemoveSorted(a,b)

const findMinAndRemoveSorted = (array) => {
	return array.shift()
}

const merge = (firstHalf, secondHalf) => {
	let sorted = []
	while(firstHalf.length != 0 && secondHalf.length != 0){
	  if(firstHalf[0] < secondHalf[0]){
		sorted.push(findMinAndRemoveSorted(firstHalf))
	  } else {
		sorted.push(findMinAndRemoveSorted(secondHalf))
	  }
	}
	return sorted.concat(firstHalf).concat(secondHalf)
  }
  
const mergeSort = (array) => {
	let midPoint = array.length/2
	let firstHalf = array.slice(0, midPoint)
	let secondHalf = array.slice(midPoint, array.length)
	let sorted;

	if (array.length < 2) {
		return array
	}
	else {
		sorted = merge(mergeSort(firstHalf), mergeSort(secondHalf))
	}
	return sorted
}
