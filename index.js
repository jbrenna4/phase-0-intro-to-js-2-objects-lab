const employee = {name: "Jim", address: "425 7th Avenue"}


function updateEmployeeWithKeyAndValue(obj, key, value) {
    const newObj = { ...obj };

    newObj[key] = value;

    return newObj;
  }

  const newEmployee = updateEmployeeWithKeyAndValue(
    employee,
    "Sam",
    "425 7th Avenue"
  );

function destructivelyUpdateEmployeeWithKeyAndValue(obj, key, value) {
    obj[key] = value;

    return obj ;};

    const anotherNewEmployee = destructivelyUpdateObject(newEmployee, "Sam", "11 Broadway");

function deleteFromEmployeeByKey(obj, key, value) {
    const newObj = { ...obj };
    delete newObj.name;

    return newObj;
  }

function destructivelyDeleteFromEmployeeByKey(obj, key, value){
    delete obj.name;
    return obj;
}
