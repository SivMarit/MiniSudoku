function validateSudokuboard(sudoboardString) {

    // Check length is 16
    if (sudoboardString.length !== 16) return 'ugyldig brett, feil lengde';

    // Check string contains no letters
    if (/[a-zA-Z]/.test(sudoboardString)) return 'ugyldig brett, ugyldig tegn';

    // Check if completely filled
    let isFilled = !sudoboardString.includes(" ")

    let rows = getRows(sudoboardString)
    let columns = getColumns(sudoboardString)
    let boxes = getBoxes(sudoboardString)

    let boxesValid = isArrayValid(boxes)
    let columnsValid = isArrayValid(columns)
    let rowsValid = isArrayValid(rows)
    let allValid = false;
    if (boxesValid && columnsValid && rowsValid) {
        console.log('All are valid.')
        allValid = true;
    }

    console.log(boxesValid + columnsValid + rowsValid)

    // Check if Partially filled and no errors
    if (!isFilled && allValid) return 'delvis utfylt, ingen feil';

    // Check if rows are valid & partially filled
    if (!isFilled && !rowsValid) return 'delvis utfylt, feil i rad';

    // Check if columns are valid & partially filled
    if (!isFilled && !columnsValid) return 'delvis utfylt, feil i kolonne';

    // Check if boxes are valid
    if (!isFilled && !boxesValid) return 'delvis utfylt, feil i firkant';

    // Check if completely filled and two numbers in row
    if (isFilled && !rowsValid) return 'helt utfylt, feil i rad';

    // Check if completely filled and two numbers in column
    if (isFilled && !columnsValid) return 'helt utfylt, feil i kolonne';

    // Completely filled and no errors
    return 'helt utfylt, ingen feil';
}

// A function for checking if a given string has repeated characters
function hasRepeats(str) {
    return /(.).*\1/.test(str.replaceAll(" ", ""));
}

function getRows(sudokuString) {
    // Assign each row to a new substring
    let one = sudokuString.charAt(0) + sudokuString.charAt(1) + sudokuString.charAt(2) + sudokuString.charAt(3);
    let two = sudokuString.charAt(4) + sudokuString.charAt(5) + sudokuString.charAt(6) + sudokuString.charAt(7);
    let three = sudokuString.charAt(8) + sudokuString.charAt(9) + sudokuString.charAt(10) + sudokuString.charAt(11);
    let four = sudokuString.charAt(12) + sudokuString.charAt(13) + sudokuString.charAt(14) + sudokuString.charAt(15);

    return [one, two, three, four]
}

function getColumns(sudokuString) {
    // Assign each column to a new substring
    let one = sudokuString.charAt(0) + sudokuString.charAt(4) + sudokuString.charAt(8) + sudokuString.charAt(12);
    let two = sudokuString.charAt(1) + sudokuString.charAt(5) + sudokuString.charAt(9) + sudokuString.charAt(13);
    let three = sudokuString.charAt(2) + sudokuString.charAt(6) + sudokuString.charAt(10) + sudokuString.charAt(14);
    let four = sudokuString.charAt(3) + sudokuString.charAt(7) + sudokuString.charAt(11) + sudokuString.charAt(15);

    return [one, two, three, four]
}

function getBoxes(sudokuString) {
    // Assign each box to new substrings
    let one = sudokuString.charAt(0) + sudokuString.charAt(1) + sudokuString.charAt(4) + sudokuString.charAt(5);
    let two = sudokuString.charAt(2) + sudokuString.charAt(3) + sudokuString.charAt(6) + sudokuString.charAt(7);
    let three = sudokuString.charAt(8) + sudokuString.charAt(9) + sudokuString.charAt(12) + sudokuString.charAt(13);
    let four = sudokuString.charAt(10) + sudokuString.charAt(11) + sudokuString.charAt(14) + sudokuString.charAt(15);
    
    return [one, two, three, four]
}

function isArrayValid(stringArray) {
    if (hasRepeats(stringArray[0]) || hasRepeats(stringArray[1]) || hasRepeats(stringArray[2]) || hasRepeats(stringArray[3])) return false
    else return true
}