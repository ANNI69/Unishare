import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import dotenv from "dotenv";
import communityRoutes from "../backend/src/Routes/Community.route.js";
import postRoutes from "../backend/src/Routes/Post.route.js";
import commentRoutes from "../backend/src/Routes/Comment.route.js";
import userRoutes from "../backend/src/Routes/User.route.js";
import connectToDB from "../backend/src/Db/Db.js";

const app = express();
dotenv.config();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Use routes
app.use("/api/communities", communityRoutes);
app.use("/api/comments", commentRoutes);
app.use("/api/posts", postRoutes);
app.use("/api/user", userRoutes);

connectToDB()
  .then(() => {
    app.listen(5000, () => {
      console.log("Server is running on port 5000");
    });
  })
  .catch((error) => {
    console.log("Error: ", error.message);
  });
