import { useState } from 'react'
import {
    createAuthUserWithEmailAndPassword,
    createUserDocumentFromAuth
} from '../../utils/firebase/firebase.utils'
import FormInput from '../form-input/form-input.component'
import Button from '../button/button.component'


import './sign-up-form.style.scss'

//默认值作为对象放在组件外部！！！否则报错：used before initialization
const defaultFormFields = {
    displayName: '',
    email: '',
    password: '',
    confirmPassword: '',
}


const SignUpForm = () => {
    //把整个表单的data作为一个整体写在一个state里面，就不需要写好几个useState，setState
    const [formFields, setFormFields] = useState(defaultFormFields)
    const { displayName, email, password, confirmPassword } = formFields


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

    const handleSubmit = async (event) => {
        event.preventDefault()
        if (password !== confirmPassword) { alert('tow password do not match!'); return }

        //请求firebase创建账户可能会失败，所以要用tyr catch
        try {
            // const response = await createAuthUserWithEmailAndPassword(email,password)
            const { user } = await createAuthUserWithEmailAndPassword(email, password)
            //发现response.user中没有displayname 
            await createUserDocumentFromAuth(user, { displayName })
            resetFromFields(defaultFormFields)
        }

        catch (error) {
            if (error.code === "auth/email-already-in-use") {
                alert('can not create user.email already')
            }
            console.log('error creating the user', error);
        }
    }

    return (
        <div className="sign-up-container">
            <h2>Don't have an account</h2>
            <span>Sign up with your email and password</span>

            <form onSubmit={handleSubmit}>
                <FormInput
                    label="displayName"
                    inputOptions={{
                        type: "text",
                        required: true,
                        name: "displayName",
                        onChange: handleChange,
                        value: displayName,
                    }} />

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

                <FormInput
                    label="confirm password"
                    inputOptions={{
                        type: "password",
                        required: true,
                        name: "confirmPassword",
                        onChange: handleChange,
                        value: confirmPassword
                    }} />

                <Button type="submit">SIGN UP</Button>
            </form>
        </div>
    )
}

export default SignUpForm