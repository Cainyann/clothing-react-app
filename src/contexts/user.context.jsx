import {createContext , useState, useEffect} from 'react'

import {onAuthStateChangedListener,createUserDocumentFromAuth} from '../utils/firebase/firebase.utils'

export const UserContext = createContext({
    //初始值空对象是null，写{}也会被判断成true
    currentUser:null,
    setCurrentUser : ()=>null
})

export const UserProvider = ({children}) => {
    const [currentUser,setCurrentUser] = useState(null)
    const value = {currentUser,setCurrentUser};

    useEffect(() => {
        const subscribe = onAuthStateChangedListener((user) => {
            console.log(user); //监听身份验证状态 输出null/user
            // setCurrentUser(user)
            if(user) {
                createUserDocumentFromAuth(user)
                setCurrentUser(user)
            }else{
                setCurrentUser(user)
            }
        })
        return subscribe
    },[])


    return (<UserContext.Provider value={value}>{children}</UserContext.Provider>
    )
    
}