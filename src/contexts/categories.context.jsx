import { createContext, useState,useEffect} from 'react'

import {getCategoriesAndDocuments } from '../utils/firebase/firebase.utils'


export const CategoriesContext = createContext({
   categoriesMap: {},
   setCategoriesMap:()=>{}
})

export const CategoriesProvider = ({ children }) => {
    const [categoriesMap, setCategoriesMap] = useState({})

    //向firebase加入categories数据集
   /*  useEffect(() => {
        addCollectionAndDocuments("categories", SHOP_DATA)
    }, []) */

    useEffect(() => {
        const getCategoriesMap = async () => {
            const categoryMap= await getCategoriesAndDocuments();
            setCategoriesMap(categoryMap)
        }
        getCategoriesMap()
    },[])
    const value = { categoriesMap, setCategoriesMap }

    return (
        <CategoriesContext.Provider value={value}>{children}</CategoriesContext.Provider>

    )
}
