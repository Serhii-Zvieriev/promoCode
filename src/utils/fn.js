function parseInputValueToNumber(value) {
  const arrNumbers = [];

  let convertedValue = Number(value);

  if (!Number.isInteger(convertedValue)) {
    alert(`${value} is not a number`);

    return;
  } else {
    while (convertedValue) {
      let fraction = Math.trunc(convertedValue % 10);
      arrNumbers.unshift(fraction);
      convertedValue = Math.floor(convertedValue / 10);
    }
  }

  if (arrNumbers.length !== 8) {
    // alert("Promocode must be 8 characters long");
    return;
  }

  return arrNumbers;
}

function is1K(arr) {
  const arrHelper = [];
  for (let i = 0; i < 8; i += 1) {
    if (arr[i] % 2 !== 0 && arr[i + 1] % 2 !== 0 && !isNaN(arr[i + 1])) {
      if (arr[i + 2] % 2 === 0 || !arr[i + 2]) {
        arrHelper.push(true);
      }
    }
  }
  if (arrHelper.length > 1) {
    return 1000;
  }
}

function is2K(arr) {
  const arrHelper = [];
  for (let i = 0; i < 8; i += 1) {
    if (
      arr[i] % 2 !== 0 &&
      arr[i + 1] % 2 !== 0 &&
      !isNaN(arr[i + 1]) &&
      arr[i] < arr[i + 1]
    ) {
      if (arr[i + 2] % 2 === 0 || !arr[i + 2]) {
        arrHelper.push(true);
      }
    }
  }
  if (arrHelper.length > 1) {
    console.log("bonus 2000");
    return 2000;
  }
}

function is100(arr) {
  let sum = 0;

  arr.forEach((el) => {
    el % 2 === 0 ? (sum += el) : (sum -= el);
  });
  return sum > 0 ? "Bonus 100" : "Promo code is not correct ";
}

export function calculateBonus(value) {
  const res = parseInputValueToNumber(value);
  if (!res) {
    return "Promocode is not true";
  }

  if (is2K(res)) {
    return "Bonus 2000";
  }
  if (is1K(res)) {
    return "Bonus 1000";
  } else {
    return is100(res);
  }
}
