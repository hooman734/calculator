export const operator = input => ({
    type: 'OP',
    payload: input
});

export const changeHistory = index => ({
    type: 'PREV',
    payload: index
});