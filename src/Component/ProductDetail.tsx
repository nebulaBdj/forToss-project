/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useParams } from "react-router-dom"
import { useMutation, useQuery } from "react-query";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { callProductDetail } from "../utills/custom_function/callProductDetail";
import DetailImg from "./Detail/DetailImg";
import DetailOption from "./Detail/DetailOption";
import { postMallData } from "../utills/custom_function/postMallData";
import DetailDelete from "./Detail/DetailDelete";


export default function ProductDetail(){
    const [wantCount, setWantCount] = useState<number>(1);
    const [optionView, setOptionView] = useState<boolean>(true);
    const [optionName, setOptionName] = useState<string>("");
    const productId = useParams<string>();
    const navigate = useNavigate();
    
    const {data ,isError, isLoading, error} = useQuery(
        ['prductDetail', productId],
        ()=>callProductDetail(productId)
    );

    const {mutate, isSuccess} = useMutation((id:number)=>postMallData(id),{
        onSuccess: () => {
            console.log()
        }
    })
    


    // 에러 캐스팅
    const castedError = error as Error;    

    if(isLoading) return<div>로딩 중...</div>
    if(isError) return<div>{castedError?.message}</div> 
    
    const discountPrice = data?.price &&  parseInt(((data.price)*((100-data.discountRate)/100)).toFixed(0));
    
    return(<div>
        <div onClick={() => { navigate(-1); }}>x</div>
        <div>
            <DetailImg thumbnailImg={data?.thumbnailImg || ''} />
            <div>
                <p>{data?.productName}</p>
                <p><span>{discountPrice}</span>원</p>
                <p>택배배송/ 무료배송</p>
                {(data?.option && data.option.length > 0) ? 
                    (<>
                    {optionView ? 
                    <DetailOption option={data.option} setOptionName={setOptionName} setOptionView={setOptionView}/> 
                    : 
                    <div>
                        <div>
                            <p>{optionName}</p>
                            <button onClick={()=>{setOptionView(true)}}>x</button>
                        </div>
                        <div>
                            <table>
                                <tbody>
                                    <tr>
                                        <td>－</td>
                                        <td>{wantCount}</td>
                                        <td>＋</td>
                                    </tr>
                                </tbody>
                            </table>
                            <p>{discountPrice}</p><span>원</span>
                        </div>
                    </div>}
                    </>)  
                    : 
                    (<table>
                        <tbody>
                            <tr>
                                <td>－</td>
                                <td>{wantCount}</td>
                                <td>＋</td>
                            </tr>
                        </tbody>
                    </table>)}
                
                <div>
                    <p css={{fontSize:"12px"}}>총 상품 금액</p>
                    <p>
                        <span css={{fontSize:"12px"}}>총 수량 {wantCount}개</span>
                        <span>{discountPrice && discountPrice*wantCount}<span css={{fontSize:"12px"}}>원</span></span>
                    </p>
                </div>
                <div>
                    {data?.id && <DetailDelete propsid={data.id} />} 
                    <button>
                        <img 
                        src="https://cdn-icons-png.flaticon.com/512/4357/4357328.png"
                        alt="장바구니"
                        width={10}
                        />
                    </button>
                    <button>
                        <img
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Heart_coraz%C3%B3n.svg/2048px-Heart_coraz%C3%B3n.svg.png"
                        alt="좋아요"
                        width={10}
                        />
                    </button>
                </div>
            </div>
        </div>
        <div>
            <p>상품 정보</p>
            <table>
            <tbody>
                <tr>
                    <td>상품 번호</td>
                    <td>{data?.pubDate}</td>
                    <td>재고 수량</td>
                    <td>{data?.stockCount}</td>
                </tr>
            </tbody>
            </table>
        </div>
    </div>)
}