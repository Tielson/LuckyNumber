const buttonAcertar = document.querySelector(".dd")
const divResults = document.querySelector('.resultss')
let results = [];
let memory = []
let numberRandom


function rotateNumber() {
  numberRandom = Math.floor(Math.random() * 1000)
  memory.push(numberRandom)
}


function Memory() {
  let sorted_arr = memory.slice().sort(); // Ordenando o array. 
  results
  for (let i = 0; i < sorted_arr.length - 1; i++) {
    if (sorted_arr[i + 1] == sorted_arr[i]) {
      results.push(sorted_arr[i]);
    }
  }
  return results
}


function mm() {
  memory = []
  rotateNumber()
  rotateNumber()
  rotateNumber()
  rotateNumber()
  rotateNumber()
  rotateNumber()
  rotateNumber()
  rotateNumber()
  rotateNumber()
  rotateNumber()
  rotateNumber()
  rotateNumber()
  rotateNumber()
  rotateNumber()
  rotateNumber()
  rotateNumber()
  rotateNumber()
  rotateNumber()
  rotateNumber()
  rotateNumber()
  rotateNumber()
  rotateNumber()
  rotateNumber()
  rotateNumber()
  Memory(results)
}


function rotate() {
  results = []
  while (results.length == 0) {
    mm()
  }

  divResults.textContent = `${results}`

}



