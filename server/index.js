import express from "express";
const app = express();
import mongoose from "mongoose";
import cors from "cors";

app.use(cors({ origin: "*" }));
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Gabriel");
});

const channelsShecma = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      minLength: 1,
      maxLength: 30,
    },
  },
  { timestamps: true }
);

const Channel = mongoose.model("channels", channelsShecma);

app.get("/channels", async (req, res) => {
  const channels = await Channel.find();
  res.send(channels);
});

const messageSchema = new mongoose.Schema(
  {
    text: {
      type: String,
      required: true,
      minLength: 1,
    },
    user: {
      name: {
        type: String,
        required: true,
      },
      image: {
        type: String,
        required: true,
      },
    },
    channelId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "channels",
    },
  },
  { timestamps: true }
);
const Message = mongoose.model("messages", messageSchema);

app.get("/channels/:id", async (req, res) => {
  const messages = await Message.find({ channelId: req.params.id });
  res.send(messages);
});

app.post("/channels/:id", async (req, res) => {
  console.log(req.body);
  res.send("oki");
});

app.listen(3000, async () => {
  await mongoose.connect(
    "mongodb+srv://user:admin@cluster0.sttbdxj.mongodb.net/?retryWrites=true&w=majority"
  );
});
