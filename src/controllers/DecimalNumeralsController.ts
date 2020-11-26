import { Request, Response } from 'express'
import ConvertRomanToDecimalService from '../services/ConvertRomanToDecimalService'
import DecimalNumeralsRepository from '../repositories/DecimalNumeralsRepository'
import RomanNumeralsRepository from '../repositories/RomanNumeralsRepository'

class DecimalNumeralsController {
  public create(req: Request, res: Response): Response {
    const decimalsRepository = new DecimalNumeralsRepository()
    const romansRepository = new RomanNumeralsRepository()
    const service = new ConvertRomanToDecimalService(
      decimalsRepository,
      romansRepository,
    )
    const { romanInput } = req.body

    try {
      if (!(typeof romanInput === 'string')) {
        throw new Error(
          'Invalid input. You should inform a valid roman numeral',
        )
      }
      const decimalResult = service.execute(romanInput)
      return res.json(decimalResult)
    } catch (err) {
      return res.status(400).json(err.message)
    }
  }
}

export default DecimalNumeralsController
