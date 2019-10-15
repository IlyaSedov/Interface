const interF = () => {
  if (document.getElementById('rna-button').checked) {
    const inputFormRna = document.getElementById('block-left').value,
      outputFormRna = document.getElementById('block-right-answer').innerText = rna(inputFormRna);
  }
  if (document.getElementById('dna-button').checked) {
    const inputForm = document.getElementById('block-left').value,
      outputForm = document.getElementById('block-right-answer').innerText = dna(inputForm);
  }

}

const helperString = () => {
  if (document.getElementById('rna-button').checked) {
    const plHold = document.getElementById('block-left').placeholder = "Введите цепь РНК:CGAU"

  }
  if (document.getElementById('dna-button').checked) {
    const plHold = document.getElementById('block-left').placeholder = "Введите цепь ДНК:CGAT"
  }
}
