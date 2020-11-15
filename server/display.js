
/**
 * Console
 * 
 * Lines    - 10
 * Columns  - 30
 * 
 */


//Create line objects to add
//to screen
//
// Max line length is 30

//0//
//1//
//2//HEADER
//3//
//4//NAME - ACCOUNT BAL
//5//NAME - ACCOUNT BAL
//6//NAME - ACCOUNT BAL
//7//NAME - ACCOUNT BAL
//8//NAME - ACCOUNT BAL
//9//
exports.showBalances = function() {
    console.clear()
    var screen = []

    console.log("test")
}

/**
 * Ascii art to show game begining
 * 
 * 30x10
 */
exports.showStart = function() {
    console.clear()
    const intro = "_____________________________|                           ||      $$ MONOPOLY $$       |   |                           || Sign up now               ||                           ||                           ||                           ||                           ||___________________________|"
    console.log(intro)
}

//Message / wait screen update on event
