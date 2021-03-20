import dotenv from 'dotenv';
import app from './server';
dotenv.config();
const PORT = Number(process.env.PORT || 3000);
app.listen(PORT, async (err, res) => {
  if (err) {
    console.log(err);
    throw new Error(err);
  }
  console.log(`app started on port ${PORT}`);
});
