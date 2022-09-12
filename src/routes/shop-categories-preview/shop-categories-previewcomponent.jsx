import { useContext} from 'react'

import { CategoriesContext } from '../../contexts/categories.context'

import ShopCategoryPreview from '../../components/shop-category-preview/shop-category-preview.component'


const ShopCategoriesPreview = () => {
    const { categoriesMap} = useContext(CategoriesContext)
    return (
        //categoriesMap的数据结构是一个对象，key：不同product的title，value：同一类product组成的数组
        //首先通过Object.keys取到title
        //再通过categoriesMap[title].map来渲染每个title下的product
        <div >
            {Object.keys(categoriesMap).map((title) => {
                const products = categoriesMap[title] 
                return (
                <ShopCategoryPreview products={products} title={title} key={title}/>
                )
            })}
        </div>

    )


}

export default ShopCategoriesPreview

