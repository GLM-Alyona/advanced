export default function orderByProps(obj, sortOrder) {
  // массив отсортированных свойств
  const arrPropertySortedList = [];
  // список свойств - массив из имен свойств переданного объекта
  const arrPropertyList = Object.keys(obj);

  sortOrder.forEach((item) => {
    for (const prop in obj) { // перебираем все свойства переданного объекта
      // если свойство объекта равно свойству  sortOrder
      if (prop === item) {
        // добавляем пару свойство:значение в массив отсортированных свойств
        arrPropertySortedList.push({ key: prop, value: obj[prop] });
        // удаляем свойство из массива имен свойств объекта
        arrPropertyList.splice(arrPropertyList.indexOf(item), 1);
      }
    }
  });
  arrPropertyList.sort();// сортируем по алфавиту оставшиеся свойства
  arrPropertyList.forEach((item) => {
    // добавляем пару свойство:значение в массив отсортированных свойств
    arrPropertySortedList.push({ key: item, value: obj[item] });
  });

  return arrPropertySortedList;
}
