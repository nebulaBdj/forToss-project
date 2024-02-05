interface User {
    user_id: number;
    email: string;
    nickName: string;
    pw: string;
}

interface Like {
    like_id: number;
    board_id: number;
    user_list: number[];
}


interface Option {
    id: number;
    optionName: string;
    additionalFee: number;
}

interface Product {
    id : number;
    productName : string;
    price : number;
    stockCount : number;
    thumbnailImg : string;
    option : Option[] ;
    discountRate: number;
    shippingFee: number;
    detailInfoImage : string[];
    viewCount : number;
    pubDate : string;
    modDate : string;
}


export interface PaginationResponse<T> {
    contents: T[];
    pageNumber: number;
    pageSize: number;
    totalPages: number;
    totalCount: number;
    isLastPage: boolean;
    isFirstPage: boolean;
   }