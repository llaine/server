import { Router } from 'express';
import FaceRepository from 'repositories/FaceRepository';

const FaceRouter = Router();

FaceRouter.get('/', (req, res) => {
  const repo = FaceRepository.get();
  res.send(repo)
})

export default FaceRouter;
