import { Request, Response } from 'express'
import { getCustomRepository, Not, IsNull } from 'typeorm'
import { SurveysUsersRepository } from '../repositories/SurveysUsersRepository'

class NpsController {
  /**
   * 1 2 3 4 5 6 7 8 9 10
   * Detratores => 0 - 6
   * Passivos => 7 - 8
   * Promotores => 9 - 10
   * (Número de promotores- número de detratores) / (número de respondentes) * 100
   *
   */
  async execute(request: Request, response: Response) {
    const { survey_id } = request.params

    const survesUsersRepository = getCustomRepository(SurveysUsersRepository)

    const surveysUsers = await survesUsersRepository.find({
      survey_id,
      value: Not(IsNull()),
    })

    const detractor = surveysUsers.filter(
      (survey) => survey.value >= 0 && survey.value <= 6
    ).length

    const promoters = surveysUsers.filter(
      (survey) => survey.value >= 10 && survey.value <= 10
    ).length

    const passive = surveysUsers.filter(
      (survey) => survey.value >= 7 && survey.value <= 8
    ).length

    const totalAnswers = surveysUsers.length

    const calculate = ((promoters - detractor) / totalAnswers) * 100

    return response.json({
      detractor,
      promoters,
      passive,
      totalAnswers,
      nps: calculate,
    })
  }
}

export { NpsController }
