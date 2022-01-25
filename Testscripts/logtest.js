const cron = require('node-cron');

const task = cron.schedule('0 0 */1 * * *', () => {
  console.log('running a task everyd two hours between 8 a.m. and 5:58 p.m.');
});
task.start();
