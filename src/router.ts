import { Router } from 'express'
import { UserController } from './controllers/UserController'
import { SurveysController } from './controllers/SurveysController'

const router = Router()

const userController = new UserController()
const surveyControler = new SurveysController()

router.post('/users', userController.create)
router.post('/surveys', surveyControler.create)
router.get('/surveys', surveyControler.show)

export { router }
