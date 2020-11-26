import DecimalNumeralsRepository from '../src/repositories/DecimalNumeralsRepository'
import RomanNumeralsRepository from '../src/repositories/RomanNumeralsRepository'
import ConvertRomanToDecimalService from '../src/services/ConvertRomanToDecimalService'

let decimalsRepository: DecimalNumeralsRepository
let romansRepository: RomanNumeralsRepository
let service: ConvertRomanToDecimalService

describe('ConvertRomanToDecimal', () => {
  decimalsRepository = new DecimalNumeralsRepository()
  romansRepository = new RomanNumeralsRepository()
  service = new ConvertRomanToDecimalService(
    decimalsRepository,
    romansRepository,
  )

  test('should convert the roman MDXCI to 1591 decimal', () => {
    const decimalNumber = service.execute('MDXCI')
    expect(decimalNumber).toEqual(1591)
  })

  test('should not convert a non roman numeral', () => {
    expect(() => {
      service.execute('y')
    }).toThrow(Error)
  })

  test('should not convert a invalid combination of roman characters', () => {
    expect(() => {
      service.execute('DDD')
    }).toThrow(Error)
  })
})
