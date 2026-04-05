// Move all zeros to end

// Input:  [0, 1, 0, 3, 12]
// Output: [1, 3, 12, 0, 0]

function moveZeros(arr) {
    let count = 0, newArr = [];

    for (let i = 0; i < arr.length; i++) {


        if (arr[i] !== 0) {

            newArr.push(arr[i]);
        } else {
            count++;
        }

    }


    for (let i = 0; i < count; i++) {

        newArr.push(0);
    }

    return newArr;
}

console.log(moveZeros([0, 1, 0, 3, 12]));