const express = require('express');
const app = express();


app.use(express.json());
app.use(express.static('files'));

app.get('/v1/mock', (req, res) => {
  const mock = `{"glossary":{"title":"example glossary","GlossDiv":{"title":"S","GlossList":{"GlossEntry":{"ID":"SGML","SortAs":"SGML","GlossTerm":"Standard Generalized Markup Language","Acronym":"SGML","Abbrev":"ISO 8879:1986","GlossDef":{"para":"A meta-markup language, used to create markup languages such as DocBook.","GlossSeeAlso":["GML","XML"]},"GlossSee":"markup"}}}}}`;
  res.setHeader("Content-Type", "application/json");
  res.send(mock);
});

app.post('/v2/mock', (req, res) => {
  const mock = `<!DOCTYPE glossary PUBLIC "-//OASIS//DTD DocBook V3.1//EN"><glossary><title>example glossary</title><GlossDiv><title>S</title><GlossList><GlossEntry ID="SGML" SortAs="SGML"><GlossTerm>Standard Generalized Markup Language</GlossTerm><Acronym>SGML</Acronym><Abbrev>ISO 8879:1986</Abbrev><GlossDef><para>A meta-markup language, used to create markup
            languages such as DocBook.</para><GlossSeeAlso OtherTerm="GML"><GlossSeeAlso OtherTerm="XML"></GlossDef><GlossSee OtherTerm="markup"></GlossEntry></GlossList></GlossDiv></glossary>`;
  res.setHeader('Content-Type', "application/xml");
  res.send(mock);
});





app.listen(3000, () => {
  console.log("Workshop Express.js - 05. Outras utilidades - Servidor HTTP com Express.js está online: http://localhost:3000/");
})
