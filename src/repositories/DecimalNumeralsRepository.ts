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
}

export default DecimalNumeralsRepository
