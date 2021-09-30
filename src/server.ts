import "reflect-metadata";
import express from "express";
import { initDB } from "./db/mongo";
import { questionRouter } from "./routes/questionRouter";
import { examsRouter } from "./routes/examsRouter";
import { candidateRouter } from "./routes/candidateRouter";

initDB();

const app = express();

app.use(express.json());
app.use("/question", questionRouter);
app.use("/exams", examsRouter);
app.use("/candidate", candidateRouter)

export { app };
