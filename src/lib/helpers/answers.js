const HTMLCodes = {
  '&#225;': 'á',
  '&#233;': 'é',
  '&#237;': 'í',
  '&#243;': 'ó',
  '&#250;': 'ú',
  '&#191;': '¿',
  '&#209;': 'Ñ',
  '&#241;': 'ñ'
}

export const fixVowels = answers => {
  return answers.map(answer => {
    for (const key in HTMLCodes) {
      answer = {answer: answer.answer.replace(new RegExp(key, 'g'), HTMLCodes[key])}
    }
    return answer
  })
}
