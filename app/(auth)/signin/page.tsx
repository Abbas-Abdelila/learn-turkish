
import { Metadata } from 'next';
import LogIn from './Signin'

export const metadata: Metadata = {
    title: "Login to Pick Turkish",
    description: "Login to your account to access your dashboard", 
}

const Login = () => {
    return (
        <LogIn />
    )
}

export default Login;

