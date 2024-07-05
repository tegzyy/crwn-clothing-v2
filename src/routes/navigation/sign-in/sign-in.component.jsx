import {
     signInWithGooglePopup, auth,
      createUserDocumentFromAuth,
    } from "../../../utils/firebase/firebase.utils"

    import SignUpForm from "../../../components/sign-up-form/sign-up"

function SignIn(){

    const logGoogleUser = async ()=>{
        const {user} = await signInWithGooglePopup()
        createUserDocumentFromAuth(user)
    }

    return(
        <div> 
        <h1>Sign In Page </h1>
        <button onClick={logGoogleUser}>
        Sign in with Google Popup
        </button> 
        <SignUpForm/>
        </div>
    )
}

export default SignIn