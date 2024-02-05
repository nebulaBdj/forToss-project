import { useEffect, useState } from "react";
import { InfiniteQueryObserverResult } from "react-query"

interface Infinity {
    threshold?: number;
    hasNextPage: boolean | undefined;
    fetchNextPage: () => Promise<InfiniteQueryObserverResult>; 
}

export default function InfinityScroll({threshold = 0.1, hasNextPage, fetchNextPage}:Infinity) {

    const [target, seTarget] = useState<HTMLDivElement | null | undefined>(null);

    const observerCallback: IntersectionObserverCallback = (entries) => {
        entries.forEach((entry) => {

            // 타겟의 10%(0.1)이 화면에 관찰되고 다음페이지가 있을때
            if(entry.isIntersecting && hasNextPage) {
                fetchNextPage();
            }
        });
    };

    useEffect(()=>{
        if(!target) return;

        //ointersection observer 인스턴스 생성
        const observer = new IntersectionObserver(observerCallback, {
            threshold,
        });

        //관찰 시작
        observer.observe(target);

        //관찰 멈춤
        return () => observer.unobserve(target);

    },[observerCallback, target, threshold]);

    return {seTarget}
}