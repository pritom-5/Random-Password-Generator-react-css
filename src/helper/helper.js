const createArray = (from, to) => {
  const returnArr = [];
  for (let i = from; i <= to; ++i) {
    returnArr.push(String.fromCharCode(i));
  }
  return returnArr;
};

const uppercase = createArray(65, 90);
const lowercase = createArray(97, 122);
const numbers = createArray(48, 57);
const symbols = createArray(33, 47)
  .concat(createArray(58, 64))
  .concat(createArray(91, 96))
  .concat(createArray(123, 126));

const charactersArray = (objArr, length) => {
  const finalArrTest = [];
  const pickedArr = [];

  for (let obj of objArr) {
    if (obj.checked && obj.name === "uppercase") {
      finalArrTest.push(...uppercase);
    } else if (obj.checked && obj.name === "lowercase") {
      finalArrTest.push(...lowercase);
    } else if (obj.checked && obj.name === "numbers") {
      finalArrTest.push(...numbers);
    } else if (obj.checked && obj.name === "symbols") {
      finalArrTest.push(...symbols);
    }
  }
  for (let i = 0; i < length; ++i) {
    const randomIndex = Math.floor(Math.random() * finalArrTest.length);
    pickedArr.push(finalArrTest[randomIndex]);
  }

  return pickedArr;
};

////strength meter
const strengthCalcFn = (objArr, length) => {
  let strengthString;
  const lengthStrengthValue = length * 0.6;
  let checkedStrengthValue = 0;
  for (let item of objArr) {
    if (item.checked) checkedStrengthValue += 1.6;
  }
  const strengthValue = lengthStrengthValue + checkedStrengthValue;
  switch (Math.floor((strengthValue / 13.8) * 4)) {
    case 1:
      strengthString = "Very Weak";
      break;
    case 2:
      strengthString = "Weak";
      break;
    case 3:
      strengthString = "Medium";
      break;
    case 4:
      strengthString = "Strong";
      break;
  }
  return strengthString;
};

/////
//async function to copy item to clipboard
async function copyToClipboardFn(str) {
  try {
    await navigator.clipboard.writeText(str);
    return { message: "Copied to the clipboard" };
  } catch (err) {
    return { message: "Something went wrong" };
  }
}

export { charactersArray, strengthCalcFn, copyToClipboardFn };
