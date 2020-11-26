import { Router } from 'express'

import DecimalNumeralsController from '../controllers/DecimalNumeralsController'
import RomanNumeralsController from '../controllers/RomanNumeralsController'

const routes = Router()
const decimalsController = new DecimalNumeralsController()
const romansController = new RomanNumeralsController()

routes.get('/', (req, res) => {
  res.json({ message: 'Hello TS' })
})

routes.post('/decimals', decimalsController.create)
routes.post('/romans', romansController.create)

export default routes
