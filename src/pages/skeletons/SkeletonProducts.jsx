import ProductItem from '../components/products/ProductItem';
import Style from '../Products/Products.module.scss'
function SkeletonProducts({ numberOfItems }) {
    return <div className={Style.productContainer}>
        {[...Array(numberOfItems).keys()].map(prod => <ProductItem key={prod} product={prod} skeletonLoad={true} />)}
    </div>;
}

export default SkeletonProducts;
