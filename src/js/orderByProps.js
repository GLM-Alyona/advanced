export default function orderByProps(obj, sortOrder) {
  // Сохранить список ключей исходного объекта (Object.keys)
  const allProperty = Object.keys(obj);

  // Отфильтровать ключи, которые не нужно сортировать (Array.prototype.filter)
  const arrNoSort = allProperty.filter((item) => sortOrder.includes(item));

  // Отсортировать ключи, которые нужно сортировать: (Array.prototype.sort)
  const alphaberSort = allProperty.filter((item) => !(sortOrder.includes(item)));
  alphaberSort.sort();

  // Объединить массив (sort, alphaberSort), пройтись по нему (Array.prototype.map) и дать ответ
  const arrPropertySortedList = arrNoSort.concat(alphaberSort);
  const result = arrPropertySortedList.map((item) => ({ key: item, value: obj[item] }));

  return result;
}
