export default function Confrim (values){
    let errors = {}

    if (!values.name.trim()) {
        errors.name = "Name Required"
    }

    if (!values.email.trim()) {
        errors.email = "Email Required"
    }


    if (!values.password.trim()) {
        errors.password = "Password Required"
    } else if (values.password.length < 6){
        errors.password = "Password needs to be 6 characters or more."
    }

    if(!values.password2){
        errors.password2 = "Re-enter Your Password"
    }   else if(values.password2 !== values.password){
        errors.password2 = "Passwords do not match"
    }

    return errors;

}