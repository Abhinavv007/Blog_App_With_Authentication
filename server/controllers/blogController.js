import blogModel from "../models/blogModel.js"

class blogController {
    static getAllBlogs = async (req, resp) => {
        try {
            const fetchAllBlogs = await blogModel.find(req.user._id)
            resp.json(fetchAllBlogs)
        } catch (error) {
            resp.json({ msg: error.message })
        }
    }
    static addBlog = async (req, res) => {
        const { title, category, description } = req.body;

        try {
          if (title && category && description) {
            const newBlog = new blogModel({
              title,
              category,
              description,
              thumbnail: req.file.filename,
              user: req.user._id, 
            });
      
            const blog = await newBlog.save();
            
            if (blog) {
              return res.status(200).json({ msg: 'Blog Added Successfully' });
            } else {
              return res.status(500).json({ msg: 'Failed to add blog' });
            }
          } else {
            return res.status(400).json({ msg: 'All fields are required' });
          }
        } catch (error) {
          console.error(error);
          return res.status(500).json({ msg: 'Some error occurred' });
        }
      }
    
    
    static getSingleBlog = async (req, resp) => {
        const{id} = req.params

        try {
            const getById = await blogModel.findById(id)
            resp.json(getById)
            
        } catch (error) {
            resp.json({message:error.message})
        }
    }
}

export default blogController