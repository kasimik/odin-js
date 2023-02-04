let user = {
  name = "John",
  surname = "Smith",
};

user.name = "Pete";
delete user.name;

function isEmpty(obj) {
  for (let key in obj) {
    return false;
  }
  return true;
}

function sumSalaries(salaries) {
  let total = 0;
  for (let key in salaries) {
    total += salaries[key];
  }
  return total;
}

function multiplyNumeric(obj) {
  for (let key in obj) {
    
  }
}