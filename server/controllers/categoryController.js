import categoryModel from "../models/category.js"

class categoryController{
    static getAllCategories = async(req,resp)=>{
       try {
        const fetchAllCategories = await categoryModel.find({})
        resp.json(fetchAllCategories)
       } catch (error) {
        resp.json({msg:error.message})
       }
       
    }
    static addNewCategory = async(req,resp)=>{
        const {title} = req.body
        try {
            if(title){
                const newCategory = new categoryModel({title})
                const result = await newCategory.save()
                if(result){
                    resp.json({msg:"Category Added Successfully"})
                } else{
                    resp.json({msg:error.message})
                }
            }else{
                resp.json({msg:"Please fill the required fields"})
            }
            
        } catch (error) {
            resp.json({msg:error.message})
        }
    }
}
export default categoryController