export const calculate = (operations) => {
  if (!operations || !operations.length) {
    return 0;
  }

  try {
    return eval(operations.join(''));
  } catch (err) {
    console.log(err.message);
    return 0;
  }
}
