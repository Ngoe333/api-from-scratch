import { createuser } from "@";


export default async function handeler(req, res) {

    try {
        
        switch (req.method) {
            case 'GET': {
                res.status(200).json({message:'Greate'});
            
            }
                
                break;
        
            default:
                break;
        }

    } catch (error) {

    }
        


        
    
    
}