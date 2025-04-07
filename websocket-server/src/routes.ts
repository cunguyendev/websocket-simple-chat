import { Router } from 'express';

const router = Router();

router.get('/', (_, res) => {
  res.status(200).send('WebSocket - Simple chat');
});

router.get('/health', (_, res) => {
  res.status(200).send('OK');
});

export default router;
