import express from "express";
import cors from "cors";
const app = express();

const port = process.env.PORT || 3000;

app.use(express.json());
