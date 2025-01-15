import  dotenv  from "dotenv";

dotenv.config();

export const PORT = process.env.PORT || 3000;

export const MONGO_URL = process.env.MONGO_URL;

export const AWS_BUCKET_NAME = process.env.AWS_BUCKET_NAME;

export const AWS_ACCESS_KEY_ID = process.env.AWS_ACCESS_KEY_ID;

export const AWS_SECRET_ACCESS_KEY = process.env.AWS_SECRET_ACCESS_KEY;

export const AWS_REGION = process.env.AWS_REGION;