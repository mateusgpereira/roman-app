import DecimalNumeralsRepository from '../repositories/DecimalNumeralsRepository'
import RomanNumeralsRepository from '../repositories/RomanNumeralsRepository'

class ConvertDecimalToRomanService {
  private romanRepository: RomanNumeralsRepository

  private decimalsRepository: DecimalNumeralsRepository

  constructor(
    romanRepository: RomanNumeralsRepository,
    decimalsRepository: DecimalNumeralsRepository,
  ) {
    this.romanRepository = romanRepository
    this.decimalsRepository = decimalsRepository
  }

  public execute(decimalNumeral: number): string {
    if (decimalNumeral <= 0 || decimalNumeral > 3000) {
      throw new Error(
        'Invalid number for convertion. You should enter a number between 1 and 3000',
      )
    }

    const romans = this.romanRepository.getAllNumerals()
    const decimals = this.decimalsRepository.getAllNumerals()
    let romanDigit = ''
    let decimalToIterate = decimalNumeral

    romans.forEach((roman, index) => {
      while (decimalToIterate >= decimals[index]) {
        decimalToIterate -= decimals[index]
        romanDigit += roman
      }
    })

    return romanDigit
  }
}

export default ConvertDecimalToRomanService
