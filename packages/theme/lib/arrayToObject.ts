export function arrayToObject(array: Array<any>, key?: string) {
  let object: any = {};
  if (key) {
    array.forEach((item, index) => {
      object[`${key}${index === 0 ? 50 : index * 100}`] = item;
    });
  } else {
    array.forEach((item, index: number) => {
      object[index === 0 ? "50" : `${index * 100}`] = item;
    });
  }
  return object;
}
