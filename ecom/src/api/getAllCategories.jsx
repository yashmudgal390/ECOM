import axios from "axios";
const baseUrl ='https://api.escuelajs.co/api/v1';
export const getAllCategories=async ()=>{
const url =`${baseUrl}/categories`;
try{
    const {data}=await axios.get(url)
    
    return data
}catch(err){
    return err
}
 }