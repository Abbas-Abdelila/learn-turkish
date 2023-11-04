import {Metadata} from 'next';
import SignUp from './signup';

export const metadata: Metadata = {
  title: "Sign Up to Pick Turkish",
  description: "Sign up to create an account and access AI integrated Turkish learning experience",
}

const CreateAccount = () => {
    return (
        <SignUp />
    )
}

export default CreateAccount;