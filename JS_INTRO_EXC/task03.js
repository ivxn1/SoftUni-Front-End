function checkLeap(year) {
    // if (year % 4 == 0 && year % 100 != 0) {
    //     console.log('yes');
        
    // }
    // else if (year % 400 == 0){
    //     console.log('log');
        
    // }
    // else {
    //     console.log('no');
        
    // }
    const isLeap = (year % 4 == 0 && year % 100 != 0) || (year % 400 ==0)
    if (isLeap) {
    console.log('yes');
    
}
    else {
        console.log('no');
        
    }
}   

checkLeap(1984);
checkLeap(2003);
checkLeap(4);