const arr = [
  { name: 'John', age: 92 },
  { name: 'Dave', age: 42 },
  { name: 'Justin', age: 3 }
]

const propComparator = (propName) =>
  (a, b) => a[propName] == b[propName] ? 0 : a[propName] < b[propName] ? -1 : 1

arr.sort(propComparator('name'))
console.log("By name", arr)

arr.sort(propComparator('age'))
console.log("By age", arr)