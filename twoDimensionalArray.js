
function fill2DArray() {
  const rows = parseInt(prompt('Enter the number of rows: '))
  const columns = parseInt(prompt('Enter the number of columns: '))

  if (isNaN(rows) || isNaN(columns) || !Number.isInteger(rows) || !Number.isInteger(columns) || rows <= 0 || columns <= 0) {
    return 'Error: Invalid input'
  }
  
  const array = []
 
  for (let i = 0; i < rows; i++) {
    const row = []
    for (let j = 0; j < columns; j++) {
      const value = prompt('Enter a value for the item [' + i + ', ' + j + ']: ')
      row.push(value)
    }
    array.push(row)
  }
  
  return array
}
  
const data = fill2DArray()
console.log(data)