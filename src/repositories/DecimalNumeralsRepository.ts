class DecimalNumeralsRepository {
  private decimalNumerals: Array<number> = [
    1000,
    900,
    500,
    400,
    100,
    90,
    50,
    40,
    10,
    9,
    5,
    4,
    1,
  ]

  public getAllNumerals(): Array<number> {
    return this.decimalNumerals
  }

  public findByIndex(index: number): number {
    if (index >= this.decimalNumerals.length) {
      throw new Error('Invalid index')
    }
    return this.decimalNumerals[index]
  }
}

export default DecimalNumeralsRepository
