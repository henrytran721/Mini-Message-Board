var express = require('express');
var router = express.Router();
var moment = require('moment');
const messages = [
  {
    text: 'Hi there!',
    user: 'Henry',
    added: moment(new Date('2020-03-24')).format('MM/DD/YYYY'),
  },
  {
    text: 'Hello, world',
    user: 'Peter',
    added: moment(new Date('2020-03-24')).format('MM/DD/YYYY'),
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
  req.body.added = moment(new Date('2020-03-24')).format('MM/DD/YYYY');
  messages.push(req.body);
  console.log(messages);
  res.redirect('/');
})

module.exports = router;
