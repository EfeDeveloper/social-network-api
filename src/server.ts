import app from './app.js';
const PORT = process.env.PORT || 3005;

app.listen(PORT, () => {
  /* eslint-disable no-console */
  console.log(`🚀  -- Server is running on: http://localhost:${PORT}`);
  console.log(`🚀  -- Swagger documentation available at http://localhost:${PORT}/api/docs`);
  /* eslint-enable no-console */
});
