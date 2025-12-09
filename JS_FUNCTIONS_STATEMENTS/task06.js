function signCheck(numOne, numTwo, numThree) {
    result = '';
    if (numOne < 0) {

        if (numTwo < 0 && numThree < 0) {
            result = 'Negative';
        }

        else if (numTwo < 0 && numThree > 0) {
            result = 'Positive';
        }

        else if (numTwo > 0 && numThree < 0) {
            result = 'Positive';
        }

        else if (numTwo > 0 && numThree > 0) {
            result = 'Negative';
        }
    }
    
    else if (numOne > 0) {

        if (numTwo < 0 && numThree < 0) {
            result = 'Positive';
        }

        else if (numTwo < 0 && numThree > 0) {
            result = 'Negative';
        }

        else if (numTwo > 0 && numThree < 0) {
            result = 'Negative';
        }

        else if (numTwo > 0 && numThree > 0) {
            result = 'Positive';
        }
    }

    console.log(result);
    
}

signCheck(5, 12, -15);
signCheck(-6, -12, 14);