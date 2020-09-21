import app from './server';

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log(`Listening to port ${PORT} in ${app.get('env') === 'development' ? 'development' : 'production'} mode`);
})
