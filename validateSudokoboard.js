function validateSudokuboard(sudoboardString) {


    //ugyldig brett, feil lengde DONE!!!
    if (sudoboardString.length !== 16) return 'ugyldig brett, feil lengde';

    //ugyldig brett, ugyldig tegn
    'ugyldig brett, ugyldig tegn';

    //delvis utfylt, ingen feil DONE!!!
    if (!sudoboardString.includes('123434122143321')) return 'delvis utfylt, ingen feil';

    //delvis utfylt, samme tall to ganger på en rad DONE
    if (!sudoboardString.includes(1 - 4 * 2)) return 'delvis utfylt, feil i rad';

    //delvis utfylt, samme tall to ganger på en kolonne
    'delvis utfylt, feil i kolonne';

    //delvis utfylt, samme tall to ganger i en firkant
    'delvis utfylt, feil i firkant';

    //helt utfylt, ingen feil DONE??
    if (sudoboardString.includes('123434122143321')) return 'helt utfylt, ingen feil';

    //helt utfylt, samme tall to ganger på en rad'
    for (let numberInRow = 1; numberInRow <= 4; numberInRow++) {
        if (sudoboardString.includes(numberInRow.repeat(2))) {
            return 'delvis utfylt, feil i rad';
        }
    }
    return 'helt utfylt, feil i rad';

    //helt utfylt, samme tall to ganger på en kolonne
    for (let numberInCol = 1; numberInCol <= 4; numberInCol++) {
        if (sudoboardString.includes(numberInCol.repeat(2)))
            ;
    }
    return 'delvis utfylt, feil i kolonne';
}

// hvis ingen feil
// return 'helt utfylt, ingen feil';
