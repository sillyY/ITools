export function capitalizeFirstLetter(str: string) {
  return str.charAt(0).toUpperCase() + str.slice(1)
}

export function splitCamelCase(str: string) {
  return str.split(/(?=[A-Z])/).join(' ')
}

export function insertToArray(arr: any[], index: number, newItem: any) {
  return [...arr.slice(0, index), newItem, ...arr.slice(index)]
}
