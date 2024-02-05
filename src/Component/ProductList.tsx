import { Suspense } from "react"
import { ErrorBoundary } from "react-error-boundary";
import Error from "./Error";
import Loding from "./Loding";
import ProductContents from "./ProductContents";

export default function ProductList() {
    
    return(<div>
        <div>
            <h3>MallMall</h3>
        </div>

        <ErrorBoundary fallback={<Error />}>
            <Suspense fallback={<Loding />}>
                <ProductContents />
            </Suspense>
        </ErrorBoundary>
    </div>)
}