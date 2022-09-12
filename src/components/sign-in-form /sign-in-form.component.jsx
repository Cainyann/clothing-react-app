import { useState } from 'react'
import {
    signInWithGooglePopup,
    signInAuthUserWithEmailAndPassword
} from '../../utils/firebase/firebase.utils'
import FormInput from '../form-input/form-input.component'
import Button from '../button/button.component'
import './sign-in-form.style.scss'


//默认值作为对象放在组件外部！！！否则报错：used before initialization
const defaultFormFields = {
    email: '',
    password: '',
}


const SignInForm = () => {


    //把整个表单的data作为一个整体写在一个state里面，就不需要写好几个useState，setState
    const [formFields, setFormFields] = useState(defaultFormFields)
    const { email, password } = formFields

    //这是一个受控表单：state和value的值实时绑定
    //value的值取决与state
    //onChange用实时value的值来更改state
    const handleChange = (event) => {
        const { name, value } = event.target
        setFormFields({ ...formFields, [name]: value }) //展开数组formFields,并且更改里面某个key的值
    }

    const resetFromFields = () => {
        setFormFields(defaultFormFields)
    }


    //处理提交表单：api：signInAuthUserWithEmailAndPassword 
    const handleSubmit = async (event) => {
        event.preventDefault()

        try {
            const {user} = await signInAuthUserWithEmailAndPassword(email, password)
        }
        catch (error) {
            console.log(error.code);
            switch (error.code) {
                case "auth/wrong-password":
                    alert('wrong password!')
                    break;
                case "auth/user-not-found":
                    alert('account do not exist')
                    break;
                default:
                    console.log(error);
            }
        }
        resetFromFields()
    }


    /* useEffect(()=>{
        async function fetchData() {
            const response = getRedirectResult(auth);
            //    console.log(response);
            if (response) {
                const userDocRef = await createUserDocumentFromAuth(response.user)
            }}
            fetchData()
        }, []) */

    //google in  sign in
    const signInWithGoogle = async () =>{
        /* const {user} = await signInWithGooglePopup();
        createUserDocumentFromAuth(user) */
        await signInWithGooglePopup()
    }
    return (
        <div className="sign-up-container">
            <h2>Already have an account</h2>
            <span>Sign in with your email and password</span>

            <form onSubmit={handleSubmit}>

                <FormInput
                    label="email"
                    inputOptions={{
                        type: "email",
                        required: true,
                        name: "email",
                        onChange: handleChange,
                        value: email
                    }} />

                <FormInput
                    label="password"
                    inputOptions={{
                        type: "password",
                        required: true,
                        name: "password",
                        onChange: handleChange,
                        value: password
                    }} />

                <div className="buttons-container">
                    <Button type="submit">sign in</Button>
                    <Button type="button" onClick={signInWithGoogle} buttonType="google" >Google sign in</Button>
                </div>


            </form>

        </div>
    )
}

export default SignInForm