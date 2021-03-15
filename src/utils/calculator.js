export const calculate = (operations) => {
  if (!operations || !operations.length) {
    return 0;
  }

  try {
    return Math.round(1000 * parseFloat(eval(operations.join('')))) / 1000;
  } catch (err) {
    console.log(err.message);
    return 0;
  }
}
