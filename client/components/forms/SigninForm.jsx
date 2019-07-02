import React from "react";
import{Field, reduxForm} from 'redux-form';
// need to add redux form validation
// add styled div compenet
function SigninForm (props){
    const { handleSubmit,userSignin,closeModal,setActiveModal} = props;

    return(
        <div >
            <form className="signinForm" onSubmit={handleSubmit(values =>{
                userSignin(values);
                setActiveModal('confirm');
                closeModal();
            })}>
                <label htmlFor="phone"> Phone #</label>
                <Field className="formInput" name="phone" component="input" type="text"/>
                <br/>
                <input type="submit" value="SUBMIT" className="formSubmit" />

            </form>

        </div>
    )
}

export default reduxForm({form: 'userSignin'})(SigninForm)
