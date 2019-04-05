var Pusher = require('pusher');

var pusher = new Pusher({
  appId: '752637',
  key: '763af4b5fae8f0b1d8be',
  secret: '9cc40e010b561dcefc77',
  cluster: 'ap3',
  encrypted: true
});

pusher.trigger('my-channel', 'my-event', {
  "message": "hello world"
});
