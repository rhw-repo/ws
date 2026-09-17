import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import session from "express-session";
import MongoStore from "connect-mongo";
import "dotenv/config";
import bookRouter from "./routes/books.js";
import authRouter from "./routes/auth.js";
import helmet from "helmet";
/*import passport from "passport";
import GoogleOidcStrategy from "passport-google-oidc";*/

try {
  await mongoose.connect(process.env.MONGO_URI);
  console.log("Connected to MongoDB");
} catch (err) {
  console.error("MongoDB connection error:");
  console.dir(err, { depth: null });
}

const app = express();
const port = process.env.PORT;

// Uncomment for prod
// app.set("trust proxy", -1);

const corsOptions = {
  origin: process.env.CLIENT_URL,
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true,
};

app.use(helmet());
app.use(cors(corsOptions));

app.use(express.json());

app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    store: MongoStore.create({ mongoUrl: process.env.MONGO_URI }),
    cookie: {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: process.env.NODE_ENV === "production" ? "none" : "lax",
      maxAge: 1000 * 60 * 60 * 24,
      // Partitioned (CHIPS) is only valid alongside Secure; Chrome silently
      // drops the cookie otherwise, so keep it off over plain http in dev.
      partitioned: process.env.NODE_ENV === "production",
    },
  }),
);

/*passport.use(
  new GoogleOidcStrategy({
    clientID: process.env['GOOGLE_CLIENT_ID'],
    clientSecret: process.env['GOOGLE_CLIENT_SECRET'],
    callbackURL: `https:
  })
)*/

app.use("/auth", authRouter);
app.use("/books", bookRouter);

app.listen(port, () => {
  console.log(`Test app listening on http://localhost:${port}`);
});
