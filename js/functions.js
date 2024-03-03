const isCorrectLength = (string, length) => string.length <= length;

const isPalindrome = (string) => {
  const farmatedString = string.replaceAll(' ', '').toLowerCase();

  let invertedString = '';
  for (let i = farmatedString.length - 1; i >= 0; i--) {
    invertedString += farmatedString[i];
  }

  return (farmatedString === invertedString);
};

const getNumber = (data) => {
  const formatedData = typeof data === 'number' ? data.toString() : data;

  let result = '';
  for (let i = 0; i < formatedData.length; i++) {
    // eslint-disable-next-line no-unused-expressions
    Number.isNaN(parseInt(formatedData[i], 10))
      ? result += ''
      : result += parseInt(formatedData[i], 10);
  }
  return result.length ? parseInt(result, 10) : NaN;
};

