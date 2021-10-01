import { Router, Response, Request } from 'express';
import { container } from '../dependency';
import { CreateManyQuestion } from '../services/question/createManyQuestion';
import { CreateQuestion } from '../services/question/createQuestion';
import { DeleteQuestion } from '../services/question/deleteQuestion';
import { FindAllQuestions } from '../services/question/findQuestion';
import { UpdateQuestion } from '../services/question/updateQuestion';
const questionRouter = Router();

questionRouter.get('/', (request: Request, response: Response) => {
  const findQuestion = container.resolve(FindAllQuestions);
  return findQuestion.execute(request, response);
});

questionRouter.post('/', (request: Request, response: Response) => {
  const createQuestion = container.resolve(CreateManyQuestion);
  return createQuestion.execute(request, response);
});

questionRouter.put('/:id', (request: Request, response: Response) => {
  const updateQuestion = container.resolve(UpdateQuestion);
  return updateQuestion.execute(request, response);
});

questionRouter.delete('/:id', (request: Request, response: Response) => {
  const deleteQuestion = container.resolve(DeleteQuestion);
  return deleteQuestion.execute(request, response);
});

export { questionRouter };
