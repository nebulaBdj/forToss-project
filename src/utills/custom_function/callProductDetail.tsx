import { Params } from "react-router-dom";

export const callProductDetail = async(productId:Readonly<Params<string>>): Promise<Product | void> => {
    try {
        const data = await fetch(`http://35.76.53.28:8080/mall/${productId.id}`,{
            method: "GET" 
        });
        
        if(!data.ok){ throw new Error(`${data.status} 에러 발생`)};

        const toJson = await data.json();
        return toJson;
    } catch (error) {
        throw error;
    }
}