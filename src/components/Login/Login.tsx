import React from "react";
import {Field, InjectedFormProps, reduxForm} from 'redux-form';
import {Input} from "../common/FormControl/FormControls";
import {maxLength50, required} from "../../utils/validators/validators";

type FormDataType = {
    login: string,
    password: string,
    rememberMe: boolean
}

export const LoginForm: React.FC<InjectedFormProps<FormDataType>> = (props) => {

    return ( //когда форма засабмитится, выполнится спец метод handleSubmit из контейнерной
        // компоненты которая получается после оборачивания хоком
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field
                    placeholder={'Login'}
                    name={'login'}
                    component={Input}
                    validate={[required]}
                />
            </div>
            <div>
                <Field
                    placeholder={'Password'}
                    name={'password'}
                    component={Input}
                    validate={[required]}
                />
            </div>
            <div>
                <Field
                    component={Input}
                    name={'rememberMe'}
                    type={'checkbox'}/>
                remember me
            </div>
            <div>
                <button type='submit'>Login</button>
            </div>
        </form>
    )
}

const LoginReduxForm = reduxForm<FormDataType>(
    { //a unique name for the form
        form: 'login'
    })
(LoginForm) //передаем ту форму вокруг которой нужно создать эту reduxForm

export const Login = () => {
    const onSubmit = (formData: FormDataType) => {
        console.log(formData)
    }
    return <div>
        <h1>Login</h1>
        <LoginReduxForm onSubmit={onSubmit}/>
    </div>
}