export const addition = input => ({
    type: 'ADD',
    payload: input
});

export const reduction = input => ({
    type: 'RED',
    payload: input
});

export const multiplication = input => ({
    type: 'MUL',
    payload: input
});

export const division = input => ({
    type: 'DIV',
    payload: input
});

export const modulo = input => ({
    type: 'MOD',
    payload: input
});

export const negatePlus = input => ({
    type: 'NEG_PLUS',
    payload: input
});

export const clear = input => ({
    type: 'CLR',
    payload: input
});

export const calculate = input => ({
    type: 'CAL'
});
