import { Router } from 'express';
import FaceRepository from 'repositories/faceRepository';

const FaceRouter = Router();

FaceRouter.get('/', (req, res) => {
  const repo = FaceRepository.get();
  res.send(repo)
})

export default FaceRouter;
