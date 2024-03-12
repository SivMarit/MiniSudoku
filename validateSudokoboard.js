function validateSudokuboard(sudoboardString) {


    //ugyldig brett, feil lengde DONE
    if (sudoboardString.length !== 16) return 'ugyldig brett, feil lengde';

    //ugyldig brett, ugyldig tegn
    if (!'12 34') return 'ugyldig brett, ugyldig tegn';

    //delvis utfylt, ingen feil DONE
    if (!sudoboardString.includes('123434122143321')) return 'delvis utfylt, ingen feil';

    //delvis utfylt, samme tall to ganger på en rad DONE
    if (!sudoboardString.includes(1 - 4 * 2)) return 'delvis utfylt, feil i rad';

    //delvis utfylt, samme tall to ganger på en kolonne
    'delvis utfylt, feil i kolonne';

    //delvis utfylt, samme tall to ganger i en firkant
    'delvis utfylt, feil i firkant';

    //helt utfylt, ingen feil
    if (!sudoboardString.includes(' ')||('123434122143321')) return 'helt utfylt, ingen feil';

    //helt utfylt, samme tall to ganger på en rad'
    for (let i = 0; i < 4; i++) {
        if (!validateSudokuboard(sudoboardString)) return 'helt utfylt, feil i rad';
    }
    //helt utfylt, samme tall to ganger på en kolonne
    if (sudoboardString(column[1, 2, 3, 4])) return 'delvis utfylt, feil i kolonne';
}

// hvis ingen feil
// return 'helt utfylt, ingen feil';
