import ProductItem from '../ProductItem';
import Style from '../Products.module.scss'
function SkeletonProducts({ numberOfItems }) {
    return <div className={Style.container}>
        {[...Array(numberOfItems).keys()].map(prod => <ProductItem key={prod} product={prod} skeletonLoad={true} />)}
    </div>;
}

export default SkeletonProducts;
