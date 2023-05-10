import express from 'express';
import { saveUrl,getUrl } from '../controllers/controller.url';
import validateUrl from '../middleware/validateUrl'

const router = express.Router();

router.use(express.json());
router.use(express.urlencoded({ extended: true}));

// Your first API endpoint
router.get('/hello', function(req, res) {
  res.json({ greeting: 'hello API' });
});

router.post('/shorturl', validateUrl, saveUrl);

router.get('/shorturl/:shortUrl', getUrl);

export default router;