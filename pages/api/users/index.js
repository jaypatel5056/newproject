import {data} from "../../../data/singleblog.js"

export default function handler(req,res)
{
res.status(200).json(data)   

}