import mongoose from 'mongoose';

export default () => {
  mongoose.Promise = global.Promise;
  mongoose.connect('mongodb://heroku_czqz7rps:ff81c6jlj0tbbj9uvpngpooset@ds247178.mlab.com:47178/heroku_czqz7rps');
  mongoose.connection
    .once('open', () => console.log('Mongodb Running'))
    .on('error', err => console.error(err));
};

