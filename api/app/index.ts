import app from '../config/express'
import { PORT } from "../config/env/production";

app.listen(PORT, (err) => {
    if (err)
        return console.log(err)
    return console.log(`server is listening on ${PORT}`)
})