/** @jsxImportSource @emotion/react */
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { css } from "@emotion/react";
import { callProductData } from "../utills/custom_function/callProductData";
import { LikeList } from "../RecoilAtom/Likelist";
import { Userlist } from "../RecoilAtom/User";
import { useRecoilState } from "recoil";
import { useInfiniteQuery } from "react-query";
import { Product } from "../../@types/mainpage";


export default function ProductContents() {
    const [productList, setProductList] =  useState<Product[]>([]);
    const [isLike, setIsLike] = useState<boolean>(false);
    const navigate = useNavigate();


    const [user, setUser] = useRecoilState(Userlist);
    
    const priceBox = css`
        font-size: 10px;
        width: 270px;
        margin: auto;
    `
    useEffect(()=>{
        const setProductData = async() => {
            try {
                const productlist = await callProductData();
                setProductList(productlist);
            } catch (error) {
                console.error(error ,"에러 발생");
            }
        }

        setProductData();
        
    },[]);
    
    return<div>
        {productList.map((productList)=>{
            return(<div 
            key={productList.id} 
            css={{margin: "15px 0"}} 
            >
                <div css={css`width:270px; margin: auto;`}>
                    <img 
                        src={` https://test.api.weniv.co.kr/${productList.thumbnailImg}`}
                        alt="상품 이미지"
                        width={250}
                        css={{borderRadius: "10px"}}
                        onClick={()=>{navigate(`/product/${productList.id}`)}}
                    />
                    <div 
                        css={{display: "flex"}}
                    >
                        <p css={{fontSize: "8px"}}>
                            {productList.productName}
                        </p>
                        <img 
                            src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Heart_coraz%C3%B3n.svg/2048px-Heart_coraz%C3%B3n.svg.png"
                            alt="좋아요"
                            width={10}
                            height={10}
                            css={{
                                margin: "auto",
                            }}
                            
                        />
                    </div>
                </div>
                <div onClick={()=>{navigate(`/product/${productList.id}`)}}>
                        { productList.discountRate > 0 ? 
                            (<div css={priceBox}>
                                <span css={{fontWeight: "bold"}}>{(productList.price*((100-productList.discountRate)/100)).toFixed(0)}</span>원
                                <span css={{textDecoration: "line-through", margin: "0 6px"}}>{productList.price}</span>
                                <span css={{color:"blue"}}>{productList.discountRate}%</span>
                            </div>)
                            :
                            (<div css={priceBox}>
                                <span css={{fontWeight: "bold"}}>{productList.price}</span>원
                            </div>)
                        }
                        
                </div>
                
            </div>)
        })}
    </div>
}