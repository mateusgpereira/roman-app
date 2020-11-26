import DecimalNumeralsRepository from '../repositories/DecimalNumeralsRepository'
import RomanNumeralsRepository from '../repositories/RomanNumeralsRepository'

class ConvertRomanToDecimalService {
  private decimalsRepository: DecimalNumeralsRepository

  private romansRepository: RomanNumeralsRepository

  constructor(
    decimalsRepository: DecimalNumeralsRepository,
    romansRepository: RomanNumeralsRepository,
  ) {
    this.decimalsRepository = decimalsRepository
    this.romansRepository = romansRepository
  }

  public execute(romanNumeral: string): number {
    const decimals = this.decimalsRepository.getAllNumerals()
    const romans = this.romansRepository.getAllNumerals()
    let decimalResult = 0

    const romansInputArray = romanNumeral.split('')
    let prevRoman = ''
    romansInputArray.forEach((roman, index) => {
      const curIndex = romans.findIndex(item => prevRoman + roman === item)

      if (curIndex < 0) {
        throw new Error(
          'Invalid input. You should inform a valid roman numeral',
        )
      }

      const nextIndex = romans.findIndex(
        item => romansInputArray[index + 1] === item,
      )

      if (decimals[curIndex] + decimals[nextIndex] === decimals[curIndex - 2]) {
        throw new Error('Invalid combination of roman numerals')
      }

      if (curIndex <= nextIndex || nextIndex === -1) {
        decimalResult += decimals[curIndex]
        prevRoman = ''
      } else {
        prevRoman = roman
      }
    })

    return decimalResult
  }
}
export default ConvertRomanToDecimalService
