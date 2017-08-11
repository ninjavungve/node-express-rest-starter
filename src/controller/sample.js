import { Router } from 'express';

const router = Router();

router.get('/', (req, res) => {
  res.send('GET: Sample Route');
});

export default router;
