
function dna(DNA) {
  let RNA = "";
  if (typeof DNA !== 'string') throw new TypeError("Данные некорректны");
  if (DNA.length === 0) return 'Введите последовательность ДНК';
  for (i = 0; i < DNA.length; i++) {
    switch (DNA[i]) {
      case "g":
      case "G": RNA += "C"
        break;
      case "c":
      case "C": RNA += "G"
        break;
      case "t":
      case "T": RNA += "A"
        break;
      case "a":
      case "A": RNA += "U"
        break;
      case "": return 'Введите знак'
        break;
      default:
        return `Некорректный нуклиатид ${DNA[i]}`;
    }
  }
  return RNA;
}

function rna(RNA) {
  let DNA = "";
  if (typeof RNA !== 'string') throw new TypeError("Данные некорректны");
  if (RNA.length === 0) return 'Введите последовательность РНК';
  for (i = 0; i < RNA.length; i++) {
    switch (RNA[i]) {
      case "c":
      case "C": DNA += "G"
        break;
      case "g":
      case "G": DNA += "C"
        break;
      case "a":
      case "A": DNA += "T"
        break;
      case "u":
      case "U": DNA += "A"
        break;
      case "": return 'Введите знак'
        break;
      default:
        return `Некорректный нуклиатид ${RNA[i]}`;
    }
  }
  return DNA;
}

