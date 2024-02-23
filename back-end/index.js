import express from "express";
import cors from "cors";

const app = express();
app.use(cors());
const PORT = 3310;
cors;

app.listen(PORT, (error) => {
  if (!error)
    console.log(
      "Server is Successfully Running, and App is listening on port " + PORT
    );
  else console.log("Error occurred, server can't start", error);
});
