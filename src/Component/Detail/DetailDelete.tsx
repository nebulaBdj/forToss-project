import { useMutation, useQuery } from "react-query";
import { postMallData } from "../../utills/custom_function/postMallData";
import { useNavigate } from "react-router-dom";
import Error from "../Error";

interface Props {
    propsid: number;
}

export default function DetailDelete({propsid}:Props) {
    const navigate = useNavigate();

    const {mutate, data} = useMutation((id:number)=>postMallData(id), {
        onSuccess: async() => {
            const datares = await data
            console.log("데이터", data);
        },
        onError: ()=>{
            return navigate(`/`);
        }
    })
    
    return(
        <button onClick={()=>mutate(propsid)}>바로 구매</button>
    )
}