import dns from 'dns';

function validateUrl(req, res, next) {
  const url = req.body.url;

  try {
    const parsedUrl = new URL(url);
    const hostname = parsedUrl.hostname;

    dns.lookup(hostname, (err) => {
      if (err) {
        res.status(400).json({ error: 'Invalid URL' });
      } else {
        next();
      }
    });
  } catch (error) {
    res.status(400).json({ error: 'Invalid URL' });
  }
}

export default validateUrl;
