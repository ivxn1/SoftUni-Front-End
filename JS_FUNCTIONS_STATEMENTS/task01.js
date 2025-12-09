/**
 * 
 * @param {Number} grade 
 */

function formatGrade(grade) {

    grade = grade.toFixed(2);

    if (grade < 3.00) {
        console.log(`Fail (2)`);
    }

    else if (grade < 3.50) {
        console.log(`Poor (${grade})`);
    }

    else if (grade < 4.50) {
        console.log(`Good (${grade})`);
    }

    else if (grade < 5.50) {
        console.log(`Very good (${grade})`);
    }

    else {
        console.log(`Excellent (${grade})`);
    }

}

formatGrade(3.33);
formatGrade(4.50);
formatGrade(2.99);