import './form-input.style.scss'

const FormInput = ({ label, inputOptions }) => {
    return (
        <div className="group">
            <input className="form-input" {...inputOptions}>
            </input>
            {/* className 使用模板字符串包囊三元表达式 注意其中三元表达式要整个包含在{}中 */}
            {label &&
                <label className={
                    `${inputOptions.value.length ? `shrink` : ''}
                form-input-label`
                }
                >{label} </label>
            }



        </div>
    )
}

export default FormInput

