module.exports = function toReadable(number) {
    let firstPos = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
    let firstDozenPos = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    let dozenPos = ['', 'ten', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
    let prefix = ['hundred'];
    let newArray = number.toString().split('');
    let firstItemOfMassive = firstPos[newArray[0]];
    let firstPart = `${firstItemOfMassive} ${prefix[0]}`;
    let secondPart = +(`${newArray[1]}${newArray[2]}`);
    let firstItem = newArray[0];
    let secondItem = newArray[1];
    let newNumber = +(`${firstItem}${secondItem}`);

    if (newArray.length === 1) {
        return firstPos[number];
    } else if (newArray.length === 2) {
        if (secondItem === '0') {
            return dozenPos[newArray[0]];
        } else if (newNumber < 20) {
            return firstDozenPos[newNumber - 10] 
        } else {
           let dozen = dozenPos[newArray[0]];
           let units = firstPos[newArray[1]];
           return `${dozen} ${units}`
        }
    } else {
        if (secondPart === 0) {
            return firstPart;
        } else if (secondPart < 10) {
            let partTwo = firstPos[secondPart];
            return `${firstPart} ${partTwo}`;
        } else if (secondPart < 20) {
            let partTwo = firstDozenPos[secondPart - 10];
            return `${firstPart} ${partTwo}`;
        } else {
            if (newArray[2] === '0') {
                let partTwo = dozenPos[newArray[1]];
                return `${firstPart} ${partTwo}`;
            } else {
                let partTwo = dozenPos[newArray[1]];
                let thirdPart = firstPos[newArray[2]];
                return `${firstPart} ${partTwo} ${thirdPart}`;
            }
        }
    }
}

