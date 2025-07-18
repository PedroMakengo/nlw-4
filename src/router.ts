import { Router } from 'express'
import { UserController } from './controllers/UserController'
import { SurveysController } from './controllers/SurveysController'
import { SendMailController } from './controllers/SendMailController'
import { AnswerController } from './controllers/AnswerController'
import { NpsController } from './controllers/NpsController'

const router = Router()

const userController = new UserController()
const surveyControler = new SurveysController()
const sendMailController = new SendMailController()
const answerController = new AnswerController()
const npsController = new NpsController()

router.post('/users', userController.create)
router.post('/surveys', surveyControler.create)
router.get('/surveys', surveyControler.show)
router.post('/sendMail', sendMailController.execute)
router.get('/answers/:value', answerController.execute)
router.get('/nps/:survey_id', npsController.execute)

export { router }
