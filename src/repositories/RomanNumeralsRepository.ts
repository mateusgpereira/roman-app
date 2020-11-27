class RomanNumeralsRepository {
  private romanNumerals: Array<string> = [
    'M',
    'CM',
    'D',
    'CD',
    'C',
    'XC',
    'L',
    'XL',
    'X',
    'IX',
    'V',
    'IV',
    'I',
  ]

  public getAllNumerals(): Array<string> {
    return this.romanNumerals
  }
}

export default RomanNumeralsRepository
