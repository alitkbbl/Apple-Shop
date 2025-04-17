import express, { Request, Response } from 'express';

const app = express();
const port = 5000;

app.get('/', (req: Request, res: Response) => {
  res.send("start proge");
});

app.listen(port, () => {
  console.log(`server is run in port : http://localhost:${port}`);
});
