const getRequestBody = (req) => {
  return new Promise((resolve, reject) => {
    let body = '';

    req.on('data', chunk => {
      body += chunk.toString();
    });

    req.on('end', () => {
      try {
        const parsedBody = JSON.parse(body);
        resolve(parsedBody);
      } catch (error) {
        reject(error);
      }
    });

    req.on('error', (error) => {
      reject(error);
    });
  });
};

module.exports = { getRequestBody };