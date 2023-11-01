import axios from "axios";

const BASEURL = "http://localhost:4000/v1"
export const getProducts = async(cat) => {
  try{
    const res = await axios.get(cat ? `${BASEURL}/products?category=${cat}`: `${BASEURL}/products`)
    return res.data 
  } catch(err){
    console.log(err)
  }
}

