import app from './app.js';
const PORT = process.env.PORT || 3005;

app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`🚀  -- Server is running on: http://localhost:${PORT}`);
});
