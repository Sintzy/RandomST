const express = require('express');
const path = require('path')
const darkHumor = require('./frases/darkhumor.json');
const facts = require('./frases/facts.json');
const insults = require('./frases/insults.json');
const jokes = require('./frases/jokes.json');
const questions = require('./frases/questions.json');
const quotes = require('./frases/quotes.json');
const app = express();
app.use(express.static(path.join(__dirname, 'public')));

app.get('/api/darkhumor', (req, res) => {
    const randomJoke = darkHumor.jokes[Math.floor(Math.random() * darkHumor.jokes.length)];
    res.json(randomJoke);
});
app.get('/api/facts', (req, res) => {
    const randomJoke = facts.facts[Math.floor(Math.random() * facts.facts.length)];
    res.json(randomJoke);
});
app.get('/api/insults', (req, res) => {
    const randomJoke = insults.roasts[Math.floor(Math.random() * insults.roasts.length)];
    res.json(randomJoke);
});
app.get('/api/jokes', (req, res) => {
    const randomJoke = jokes.jokes[Math.floor(Math.random() * jokes.jokes.length)];
    res.json(randomJoke);
});
app.get('/api/questions', (req, res) => {
    const randomJoke = questions.questions[Math.floor(Math.random() * questions.questions.length)];
    res.json(randomJoke);
});
app.get('/api/quotes', (req, res) => {
    const randomJoke = quotes.quotes[Math.floor(Math.random() * quotes.quotes.length)];
    res.json(randomJoke);
});

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});
app.get('/about', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/more.html'));
});



const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
