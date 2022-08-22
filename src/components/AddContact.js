import React, {useState} from 'react'

function AddContact(props){
    const [name,setName] = useState("")
    const [email,setEmail] = useState("")
    const ChangeName = (e) =>{
        setName(e.target.value);
    }; 
    const ChangeEmail = (e) => {
        setEmail(e.target.value);
    };
    const HandleSubmit = (e) => {
        e.preventDefault();
        const Object = {
            "name" : name,
            "email" : email
        }
        props.Fun(Object)
        setName("");
        setEmail("");
    };
    return (
        <form onSubmit={HandleSubmit}>
            <label> Name:
                <input type = "text" 
                name="name" 
                placeholder="Name" 
                value = {name} 
                onChange = {ChangeName}
                />
            </label>
            <label>Email :
                <input type = "email" 
                name="email" 
                placeholder="Email" 
                value = {email} 
                onChange = {ChangeEmail}
                />
            </label>
            <input type="submit" />
        </form>
    );
}

export default AddContact;