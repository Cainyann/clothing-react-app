import { Route, Routes} from 'react-router-dom'

import ShopCategpriesPreview from '../shop-categories-preview/shop-categories-previewcomponent'
import ShopCategory from '../shop-category/shop-category.component'


const Shop = () => {
    
    return (
        <div className="shop-container">
            <Routes>
                <Route index={true} element={<ShopCategpriesPreview/>} />
                <Route path=":productCategory" element={<ShopCategory/>} />
            </Routes>
        </div>
    )
}

export default Shop

