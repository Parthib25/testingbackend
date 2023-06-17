import express from 'express'
import cors from 'cors';
import connectDB from './mongo.js';
import routes from './routes.js';
const app = express()
const uri=`mongodb+srv://biswaroopnath2001:kSHnSIXhlaInb4bv@cluster0.ty4qa4o.mongodb.net/`
connectDB(uri)
app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.get('/', (req, res) => {
    res.send('Hello World!')
  })
app.use('/api',routes)
app.listen(3000, () => {
  console.log('Server is running on port 3000')
})
