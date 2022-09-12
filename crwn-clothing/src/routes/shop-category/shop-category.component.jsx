import { useContext, useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { CategoriesContext } from '../../contexts/categories.context'

import ProductCard from '../../components/product-card/product-card.component'

import './shop-category.style.scss'
import { Fragment } from 'react'

const ShopCategory = () => {
    const { productCategory } = useParams()
    const { categoriesMap } = useContext(CategoriesContext)

    const [products, setProducts] = useState(categoriesMap[productCategory]) //safeguard

    useEffect(() => {
        setProducts(categoriesMap[productCategory]);

    }, [productCategory, categoriesMap])

    return (
        <Fragment>
            <div className="shop-category-title">{productCategory.toUpperCase()}</div>
            <div className="shop-category-container">
                {/* safeguard：短路语句 */}
                {products && products.map((product) => {
                    return <ProductCard key={product.id} product={product} />
                })}

            </div>
        </Fragment>
    )
}

export default ShopCategory