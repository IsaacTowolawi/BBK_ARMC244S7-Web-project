import {useState, useEffect} from "react"

const useForms = (callback,confirm) => {
    const [values, setValues] = useState({
        name:'',
        email:'',
        password:'',
        password2:''
    })

    const [errors, setErrors] = useState({});
    const [mainSubmit, setMainSubmit] = useState(false)

    const handleChange = e => {
        const {name, value} = e.target
        setValues({
            ...values,
            [name]: value
        })
    }

    const handleSubmit = e => {
        e.preventDefault()

        setErrors(confirm(values))
        setMainSubmit(true)
    }

    useEffect(() => {
        if(Object.keys(errors).length === 0 && mainSubmit){
            callback()
        }
    },
    [errors]
    )

    return {handleChange, values, handleSubmit, errors};
};

export default useForms;