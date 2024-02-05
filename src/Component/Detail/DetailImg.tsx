interface Props {
    thumbnailImg: string;
}

export default function DetailImg({thumbnailImg}: Props) {
    return (
    <div>
        <img
            src={` https://test.api.weniv.co.kr/${thumbnailImg}`}
            alt="상품 이미지"
            width={250}
        />
    </div>
    )
}