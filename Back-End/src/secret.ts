import { config } from "dotenv";
config()

const SECRET_PORT = process.env.PORT || 3000
const SECRET_MONGODB = process.env.MONGODB_URL!

export { SECRET_PORT, SECRET_MONGODB }