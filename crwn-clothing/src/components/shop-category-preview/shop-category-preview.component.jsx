import { Link } from 'react-router-dom'
import ProductCard from '../product-card/product-card.component'

import './shop-category-preview.style.scss'

const ShopCategoryPreview = ({ title, products }) => {
    return (
        <div className="shop-category-preview-container">
            <h2>
                <Link to={title}>
                    <span className="title">{title.toUpperCase()}</span>
                </Link>
            </h2>
            <div className="preview">
                {products
                    //filter过滤数组参数，通过限制index只保留四个product
                    .filter((_, index) => index < 4)
                    .map((product) => {
                        return <ProductCard product={product} key={product.id} />
                    })
                }
            </div>

        </div>
    )
}

export default ShopCategoryPreview