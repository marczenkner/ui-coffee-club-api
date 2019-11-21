import mongoose from 'mongoose';

export default () => {
  mongoose.Promise = global.Promise;
  mongoose.set('useFindAndModify', false);
  mongoose.connect('mongodb://insights_api_one:Babydol1s@ds155616.mlab.com:55616/heroku_qmtx7qw7');
  mongoose.connection
    .once('open', () => console.log('Mongodb Running'))
    .on('error', err => console.error(err));
};

