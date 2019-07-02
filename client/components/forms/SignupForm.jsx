import React from "react";
import{Field, reduxForm} from 'redux-form';
// need to add redux form validation
// add styled div compenet
function SignupForm (props){
    const { handleSubmit,closeModal,userSignup,setActiveModal} = props;

    return(
        <div >
            <form className="SignupForm" onSubmit={handleSubmit(values =>{
                userSignup(values);
                setActiveModal('confirm');
                closeModal();
            })}>
                <label htmlFor="name">  Name </label>
                <Field className="formInput" name="name" component="input" type="text"/>
                <br/>
                <label htmlFor="phone"> Phone #</label>
                <Field className="formInput" name="phone" component="input" type="text"/>
                <br/>
                <label htmlFor="householdName"> Household name</label>
                <Field className="formInput" name="householdName" component="input" type="text"/>

                <input type="submit" value="SUBMIT" className="formSubmit" />

            </form>

        </div>
    )
}

export default reduxForm({form: 'userSignup'})(SignupForm)