import React from "react";
import { useState } from "react";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { useHistory } from "react-router-dom";

const Signup = () =>{
    const [email,setemail] = useState('');
    const [password,setpassword] = useState('');
    const [ loading, setLoading ] = useState(false);
    const history = useHistory();
    function signin(){
        setLoading(true)
        const auth = getAuth();
        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            console.log(user);
            history.push("/Login");
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            alert("Invalid email or password")
            console.log(errorCode , errorMessage)
        }).finally(() => setLoading(false));;
    }
    function alreadyhaveaccounnt(){
        history.push("/Login")
    }

    return(
        <div >
            <div >
            <nav className="navbar navbar-dark bg-primary">
            <h3 className="ms-3">Feedback-portal</h3>
                </nav>
            </div>
            <div className="d-flex justify-content-center mt-4">
            <div className="card shadow border-light rounded" Style="width: 22rem;">
            <h2 className="card-title m-3">Create Account</h2>
            <div className="card-body">
            <div className="mb-3">
                <label className="form-label">Email address</label>
                <input type="email" className="form-control" Value={email} onInput={e => setemail(e.target.value)} placeholder="Enter email"  />
            </div>
            <div className="mb-3">
                <label className="form-label">Password</label>
                <input type="password" className="form-control" Value={password} onInput={e => setpassword(e.target.value)} placeholder="Password" />
            </div>
            <div className="mb-3">
                <label className="form-label">Confirm Password</label>
                <input type="password" className="form-control" placeholder="Confirm Password" />
            </div>
            <div className="d-grid gap-2 mt-4">
            <button className="btn btn-primary" type="button" onClick={signin}>{loading ? 'Loading..' : 'Signup'}</button>
            <button className="btn btn-outline-primary"  onClick={alreadyhaveaccounnt}>Already Have an Account</button>
            </div>
            </div>
            </div>
            </div> 
        </div>
    )
}

export default Signup;
