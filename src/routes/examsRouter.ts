import { Router, Response, Request } from 'express';
import { container } from '../dependency';
import { CreateExam } from '../services/exams/createExam';
import { FindExamCandidate } from '../services/exams/findExamCandidate';
import { FindExams } from '../services/exams/findExams';

const examsRouter = Router();

examsRouter.get('/', (request: Request, response: Response) => {
  const findExams = container.resolve(FindExams);
  return findExams.execute(request, response);
});

examsRouter.get('/:id', (request: Request, response: Response) => {
  const findExams = container.resolve(FindExamCandidate);
  return findExams.execute(request, response);
});

examsRouter.post('/', (request: Request, response: Response) => {
  const newExam = container.resolve(CreateExam);
  return newExam.execute(request, response);
});

export { examsRouter };
