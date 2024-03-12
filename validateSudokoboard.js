function validateSudokuboard(sudoboardString) {

    // Check length is 16
    if (sudoboardString.length !== 16) return 'ugyldig brett, feil lengde';

    // Check string contains no letters
    if (/[a-zA-Z]/.test(sudoboardString)) return 'ugyldig brett, ugyldig tegn';

    // Check if completely filled
    let isFilled = !sudoboardString.includes(" ")

    // Assign each row to a new substring
    let row1 = sudoboardString.charAt(0) + sudoboardString.charAt(1) + sudoboardString.charAt(2) + sudoboardString.charAt(3);
    let row2 = sudoboardString.charAt(4) + sudoboardString.charAt(5) + sudoboardString.charAt(6) + sudoboardString.charAt(7);
    let row3 = sudoboardString.charAt(8) + sudoboardString.charAt(9) + sudoboardString.charAt(10) + sudoboardString.charAt(11);
    let row4 = sudoboardString.charAt(12) + sudoboardString.charAt(13) + sudoboardString.charAt(14) + sudoboardString.charAt(15);

    // Assign each column to a new substring
    let column1 = sudoboardString.charAt(0) + sudoboardString.charAt(4) + sudoboardString.charAt(8) + sudoboardString.charAt(12);
    let column2 = sudoboardString.charAt(1) + sudoboardString.charAt(5) + sudoboardString.charAt(9) + sudoboardString.charAt(13);
    let column3 = sudoboardString.charAt(2) + sudoboardString.charAt(6) + sudoboardString.charAt(10) + sudoboardString.charAt(14);
    let column4 = sudoboardString.charAt(3) + sudoboardString.charAt(7) + sudoboardString.charAt(11) + sudoboardString.charAt(15);

    // Assign each box to new substrings
    let box1 = sudoboardString.charAt(0) + sudoboardString.charAt(1) + sudoboardString.charAt(4) + sudoboardString.charAt(5);
    let box2 = sudoboardString.charAt(2) + sudoboardString.charAt(3) + sudoboardString.charAt(6) + sudoboardString.charAt(7);
    let box3 = sudoboardString.charAt(8) + sudoboardString.charAt(9) + sudoboardString.charAt(12) + sudoboardString.charAt(13);
    let box4 = sudoboardString.charAt(10) + sudoboardString.charAt(11) + sudoboardString.charAt(14) + sudoboardString.charAt(15);

    // Check if Partially filled and no errors
    if (!isFilled && isSubStringValid(row1) && isSubStringValid(row2) && isSubStringValid(row3) && isSubStringValid(row4) &&
        isSubStringValid(box1) && isSubStringValid(box2) && isSubStringValid(box3) && isSubStringValid(box4) &&
        isSubStringValid(column1) && isSubStringValid(column2) && isSubStringValid(column3) && isSubStringValid(column4)) return 'delvis utfylt, ingen feil';


    // Check if rows are valid & partially filled
    if ((!isFilled) && (!isSubStringValid(row1) || !isSubStringValid(row2) || !isSubStringValid(row3) || !isSubStringValid(row4))) return 'delvis utfylt, feil i rad';


    // Check if columns are valid & partially filled
    if ((!isFilled) && (!isSubStringValid(column1) || !isSubStringValid(column2) || !isSubStringValid(column3) || !isSubStringValid(column4))) return 'delvis utfylt, feil i kolonne';


    // Check if boxes are valid
    if ((!isFilled) && (!isSubStringValid(box1) || !isSubStringValid(box2) || !isSubStringValid(box3) || !isSubStringValid(box4))) return 'delvis utfylt, feil i firkant';


    // Check if completely filled and two numbers in row
    if ((isFilled) && (!isSubStringValid(row1) || !isSubStringValid(row2) || !isSubStringValid(row3) || !isSubStringValid(row4))) return 'helt utfylt, feil i rad'

    
    // Check if completely filled and two numbers in column
    if ((isFilled) && (!isSubStringValid(column1) || !isSubStringValid(column2) || !isSubStringValid(column3) || !isSubStringValid(column4))) return 'helt utfylt, feil i kolonne'


    return 'helt utfylt, ingen feil'
}


// A function for checking if two duplicate numbers exist in a row
function isSubStringValid(subString) {
    return !hasRepeats(subString)
}

// A function for checking if a given string has repeated characters
function hasRepeats(str) {
    return /(.).*\1/.test(str.replaceAll(" ",""));
}