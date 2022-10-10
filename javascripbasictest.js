/*
Task----> 1
 Radian to degree start
*/
function radianToDegree(radian) {
    const degree = 57.2957795;
    if (isNaN(radian)) {
        return 'please enter a valid number'
    }
    const total = radian * degree;
    return total;
}
const radians = radianToDegree(10);
console.log(radians);

/*
1) Radian to degree end 
*/



/*
 Task ----> 2
  isJavaScriptFile start
*/

function isJavaSriptFile(filename) {


    const extension = filename.split('.').pop();
    if (extension === 'js') {
        return true;
    } else { return false }
}



const result1 = isJavaSriptFile('module.js');
console.log(result1);

/*
 Task ----> 2
  isJavaScriptFile end
*/

/*
 Task ----> 3
  oilPrice satrt 
*/


// oilPrice

function oilPrice(dieselQty, petrolQty, octaneQty) {
    const dieselPrice = 114;
    const petrolPrice = 130;
    const octanePrice = 135;

    return dieselQty * dieselPrice + petrolQty * petrolPrice + octaneQty * octanePrice
}
console.log(oilPrice(1, 1, 1));

/*
 Task ----> 3
  oilPrice end
*/

/*
 Task ----> 4
  publicBusFare start 
*/

function publicBusFare(totalPassenger) {
    const reservedBus = 50;
    const microBus = 11;
    const publicBusFare = 250;

    const remainingReservedBus = totalPassenger % reservedBus;
    const remainingMicroBus = remainingReservedBus % microBus;
    return remainingMicroBus * publicBusFare;
}

console.log(publicBusFare(213));

/*
 Task ----> 4
  publicBusFare end
*/


/*
 Task ----> 5
  isBestFriend start
*/

function isBestFriend(friend1, friend2) {
    if (friend1.name === friend2.friend && friend2.name === friend1.friend) {
        return true;
    }
    else {
        return false;
    }
}
console.log(isBestFriend(
    { name: 'Tom', friend: 'Rock' },
    { name: 'Rock', friend: 'Tom' },

))

/*
 Task ----> 5
  isBestFriend end
*/