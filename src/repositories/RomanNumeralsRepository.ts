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

  public findByIndex(index: number): string {
    if (index >= this.romanNumerals.length) {
      throw new Error('Invalid index')
    }
    return this.romanNumerals[index]
  }
}

export default RomanNumeralsRepository
