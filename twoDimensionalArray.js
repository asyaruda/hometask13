function fill2DArray() {

  let rows = prompt('Enter the number of rows: ')
  let columns = prompt('Enter the number of columns: ')

 
  let array = [];

  for (let i = 0; i < rows; i++) {
    let row = []
    for (let j = 0; j < columns; j++) {
      let value = prompt('Enter a value for the item [' + i + ', ' + j + ']: ')
      row.push(value)
    }
    array.push(row)
  }

  return array
}

let data = fill2DArray()
console.log(data)