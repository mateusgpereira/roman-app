import ConvertDecimalToRomanService from '../src/services/ConvertDecimalToRomanService'
import DecimalNumeralsRepository from '../src/repositories/DecimalNumeralsRepository'
import RomanNumeralsRepository from '../src/repositories/RomanNumeralsRepository'

describe('ConvertDecimalToRoman', () => {
  const decimalRepository = new DecimalNumeralsRepository()
  const romanRepository = new RomanNumeralsRepository()
  const service = new ConvertDecimalToRomanService(
    romanRepository,
    decimalRepository,
  )

  test('should convert 2841 decimal to MMDCCCXLI in roman', () => {
    const roman = service.execute(2841)
    expect(roman).toEqual('MMDCCCXLI')
  })

  test('should not convert a number less than 0', async () => {
    expect(() => {
      service.execute(-2)
    }).toThrow(Error)
  })

  test('should not convert a number greater than 3000', async () => {
    expect(() => {
      service.execute(3001)
    }).toThrow(Error)
  })
})
