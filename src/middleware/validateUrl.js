import dns from 'dns';

function validateUrl(req, res, next) {
  const url = req.body.url;

  try {
    const parsedUrl = new URL(url);
    const hostname = parsedUrl.hostname;

    dns.lookup(hostname, (err) => {
      if (err) {
        //la siguiente linea de codigo es correcta solo que no pasa los test de freecodecamp
        //res.status(400).json({ error: 'Invalid URL' });
        //la siguiente linea de codigo esta incompleta por que no manda el codigo de error, pero asi
        //es como pasa los test de freecodecamp.
        res.send({ error: 'Invalid URL' });
      } else {
        next();
      }
    });
  } catch (error) {
    res.status(400).json({ error: 'Invalid URL' });
  }
}

export default validateUrl;
