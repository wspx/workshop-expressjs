const http = require('http');
const { getRequestBody } = require('./utils');

const AlbumService = require('./services/albumService');
const albumServiceImpl = new AlbumService();

const CustomerService = require('./services/customerService');
const customerServiceImpl = new CustomerService();

const server = http.createServer(async (req, res) => {
  if (req.url === '/') {
    res.setHeader('Content-Type', 'text/plain');
    res.statusCode = 200;
    res.end('Hello World');
    return;
  }

  if (req.url.startsWith('/customers/')) {
    if (req.method === 'GET') {
      const param = req.url.split('/customers/')[1] || null;
      const resultado = param ? await customerServiceImpl.getCustomerById(param) : await customerServiceImpl.getAllCustomer();
      
      res.setHeader('Content-Type', 'application/json');
      res.statusCode = 200;
      res.end(JSON.stringify(resultado));
      return;
    }

    if (req.method === 'POST') {
      const body = await getRequestBody(req);

      const resultado = await customerServiceImpl.createNewCustomer(body);

      res.setHeader('Content-Type', 'application/json');
      res.statusCode = 201;
      res.end(JSON.stringify(resultado));
      return;
    }

    if (req.method === 'PUT') {
      const param = req.url.split('/customers/')[1] || null;
      const body = await getRequestBody(req);

      const resultado = await customerServiceImpl.updateCustomerById(param, body);

      res.setHeader('Content-Type', 'application/json');
      res.statusCode = 200;
      res.end(JSON.stringify(resultado));
      return;
    }

    if (req.method === 'DELETE') {
      const param = req.url.split('/customers/')[1] || null;
      
      await customerServiceImpl.deleteCustomerById(param);

      res.statusCode = 204;
      res.end();
      return;
    }
  }

  if (req.url.startsWith('/albums/')) {
    if (req.method === 'GET') {
      
      if (req.url.includes('tracks/')) {
        const param = req.url.split('/')[2] || null;
        const resultado = await albumServiceImpl.getAllMusicFromAlbumId(param);
        res.setHeader('Content-Type', 'application/json');
        res.statusCode = 201;
        res.end(JSON.stringify(resultado));
        return;
      }

      const param = req.url.split('/albums/')[1] || null;
      const resultado = param ? await albumServiceImpl.getAlbumById(param) : await albumServiceImpl.getAllAlbums();
      res.setHeader('Content-Type', 'application/json');
      res.statusCode = 200;
      res.end(JSON.stringify(resultado));
      return;
    }
  }

  res.statusCode = 404;
  res.end('Nenhum endpoint acionado!!!');
});

server.listen(3000, () => {
  console.log("Workshop Express.js - 03. CRUD Database - Servidor HTTP com Node.js está online: http://localhost:3000/");
});