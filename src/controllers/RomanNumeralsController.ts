import { Request, Response } from 'express'
import ConvertDecimalToRomanService from '../services/ConvertDecimalToRomanService'
import DecimalNumeralsRepository from '../repositories/DecimalNumeralsRepository'
import RomanNumeralsRepository from '../repositories/RomanNumeralsRepository'

class RomanNumeralsController {
  public create(req: Request, res: Response): Response {
    const decimalsRepository = new DecimalNumeralsRepository()
    const romansRepository = new RomanNumeralsRepository()
    const service = new ConvertDecimalToRomanService(
      romansRepository,
      decimalsRepository,
    )
    const { decimalInput } = req.body

    try {
      if (isNaN(decimalInput)) {
        throw new Error('Invalid input. Only decimal numbers are accepted.')
      }

      const romanResult = service.execute(decimalInput)
      return res.json(romanResult)
    } catch (err) {
      return res.status(400).json(err.message)
    }
  }
}

export default RomanNumeralsController
