import express from 'express'
import schema from './dbschema.js'
const router=express.Router()

router.post('/entry',async (req,res)=>{
   let s=req.body.distance;
try{
    const entry=new schema({distance:s})
    await entry.save()
    res.status(201).json({sucess:true,err:false})
}catch(error){
    res.status(422).json({success:false,err:error.message})

}
})
router.get('/latest', async (req, res) => {
    try {
      const count = await schema.countDocuments();

      const latestData = await schema.findOne().skip(count - 1);
  
      res.json({ distance: latestData });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Error retrieving data' });
    }
  });

  export default router