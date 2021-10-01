import { Router, Response, Request } from 'express';
import { container } from 'tsyringe';
import { CreateCandidate } from '../services/candidate/createCandidate';
import { findCandidate } from '../services/candidate/findCandidate';

const candidateRouter = Router();

candidateRouter.post('/', (request: Request, response: Response) => {
  const newCandidate = container.resolve(CreateCandidate);
  return newCandidate.execute(request, response);
});

candidateRouter.get('/', (request: Request, response: Response) => {
  const candidate = container.resolve(findCandidate);
  return candidate.execute(request, response);
});

export { candidateRouter };
