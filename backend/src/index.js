import express, { request } from 'express';
import clusterize from 'express-clusterize';
import axios from 'axios';

const app = express();
const port = Number(process.env.PORT) || 3001;

app.use(express.json());

app.enable('trust proxy');

// diablo2.io routes
app.get('/api/d2io/ladder/softcore', async (req, res) => {
  const { data } = await axios.get("https://diablo2.io/dclone_api.php?hc=2&ladder=1");
  if (data.length > 0) {
    res.json({ data });
  }
});

app.get('/api/d2io/ladder/hardcore', async (req, res) => {
  const { data } = await axios.get("https://diablo2.io/dclone_api.php?hc=1&ladder=1");
  if (data.length > 0) {
    res.json({ data });
  }
});

app.get('/api/d2io/nonladder/softcore', async (req, res) => {
  const { data } = await axios.get("https://diablo2.io/dclone_api.php?hc=2&ladder=2");
  if (data.length > 0) {
    res.json({ data });
  }
});

app.get('/api/d2io/nonladder/hardcore', async (req, res) => {
  const { data } = await axios.get("https://diablo2.io/dclone_api.php?hc=1&ladder=2");
  if (data.length > 0) {
    res.json({ data });
  }
});

// d2runewizard.com routes
app.get('/api/d2rw/ladder/softcore', async (req, res) => {
  const data = await axios.get("https://d2runewizard.com/api/diablo-clone-progress/ladder/softcore");
  if (data.status < 400) {
    return res.json({ data: data.data.servers });
  }
  return res.json({ data: null, message: "Failed to fetch DClone Data" });
});

app.get('/api/d2rw/ladder/hardcore', async (req, res) => {
  const data = await axios.get("https://d2runewizard.com/api/diablo-clone-progress/ladder/hardcore");
  if (data.status < 400) {
    return res.json({ data: data.data.servers });
  }
  return res.json({ data: null, message: "Failed to fetch DClone Data" });
});

app.get('/api/d2rw/nonladder/softcore', async (req, res) => {
  const data = await axios.get("https://d2runewizard.com/api/diablo-clone-progress/nonLadder/softcore");
  if (data.status < 400) {
    return res.json({ data: data.data.servers });
  }
  return res.json({ data: null, message: "Failed to fetch DClone Data" });
});

app.get('/api/d2rw/nonladder/hardcore', async (req, res) => {
  const data = await axios.get("https://d2runewizard.com/api/diablo-clone-progress/nonLadder/hardcore");
  if (data.status < 400) {
    return res.json({ data: data.data.servers });
  }
  return res.json({ data: null, message: "Failed to fetch DClone Data" });
});

clusterize(
  () => {
    app.listen(port, async () => {
      console.log(`Ret-2-Go! on localhost:${port}`);
    });
  },
  { prodOnly: false },
);

export default app;
