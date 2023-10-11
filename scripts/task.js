// function sumNumbers(num1, num2) {
//     let sum = 0
//     for (let i = num1; i <= num2; i++) {
//         if (i % 2 == 0) {
//             sum += i;
//         }
//     }
//     return sum;
// }

// let num1 = prompt('enter first number');
// let num2 = prompt('enter second number');
// const result = sumNumbers(num1, num2);
// console.log(result)

// function evenNumbers(nums) {
//     let ENumbers = [];

//     for (let i = 0; i < nums.length; i++) {
//         if (nums[i] % 2 === 0) {1
//             ENumbers.push(nums[i]);
//         }
//     }

//     return ENumbers;
// }

// const numbers = [12, 5, 67, 8, 90, 45];
// const ENumbers = evenNumbers(numbers);
// console.log(`The even numbers in the array are: ${ENumbers}`);


// function evenNumbers(numbers) {
//     let sum = 0;
//     for (let i = 0; i < numbers.length; i++) {
//         if (numbers[i] % 2 === 0) {
//             sum += numbers[i];
//         }
//     }
//     return sum;
// }

// const numbers = [12, 10, 23, 45, 67, 89, 0, 75, 3];
// const evensum = evenNumbers(numbers);
// console.log(evensum);



// function largest(numbers) {
//     let largests = numbers[0];
//     for (let i = 0; i < numbers.length; i++) {
//         if (largests < numbers[i]) {
//             largests = numbers[i];
//         }
//     }
//     return largests;
// }
// const numbers = [12, 10, 23, 45, 67, 89, 0, 75, 3];
// const largenum = largest(numbers);
// console.log(largenum);

function fibonacci(limit) {
    let num = [0, 1];
    while (num.length < limit) {
        const newa = num[num.length - 1] + num[num.length - 2];
        num.push(newa);
    }
    return num;

}

const fibonacciseq = fibonacci(100);
console.log(fibonacciseq);


