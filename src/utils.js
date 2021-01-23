export const convertToLakhSeparator = (x) => {
  let value = x.toString();
  let afterPoint = '';
  if (value.indexOf('.') > 0) {
    afterPoint = value.substring(value.indexOf('.'), value.length);
  }
  value = Math.floor(value);
  value = value.toString();
  let lastThree = value.substring(value.length - 3);
  const otherNumbers = value.substring(0, value.length - 3);
  if (otherNumbers !== '') {
    lastThree = `,${lastThree}`;
  }
  const res = otherNumbers.replace(/\B(?=(\d{2})+(?!\d))/g, ',') + lastThree + afterPoint;

  return res;
};

export const abc = () => {

};
