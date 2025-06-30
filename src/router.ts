import { Router } from 'express'
import { UserController } from './controllers/UserController'
import { SurveysController } from './controllers/SurveysController'
import { SendMailController } from './controllers/SendMailController'
import { AnswerController } from './controllers/AnswerController'

const router = Router()

const userController = new UserController()
const surveyControler = new SurveysController()
const sendMailController = new SendMailController()
const answerController = new AnswerController()

router.post('/users', userController.create)
router.post('/surveys', surveyControler.create)
router.get('/surveys', surveyControler.show)
router.post('/sendMail', sendMailController.execute)
router.post('/answer', answerController.execute)

export { router }
