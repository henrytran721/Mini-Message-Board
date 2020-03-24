var express = require('express');
var router = express.Router();
const messages = [
  {
    text: 'Hi there!',
    user: 'Henry',
    added: new Date('2020-03-24'),
  },
  {
    text: 'Hello, world',
    user: 'Peter',
    added: new Date('2020-03-24'),
  }
];

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Mini Message Board', messages: messages });
});

router.get('/new', function(req, res, next) {
  res.render('form', {title: 'New Message'});
})

router.post('/new', function(req, res, next) {
  req.body.added = new Date('2020-03-24');
  messages.push(req.body);
  console.log(messages);
  res.redirect('/');
})

module.exports = router;
