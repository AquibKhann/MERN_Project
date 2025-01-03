import CommonForm from '@/components/common/form'
import { registerFormControls } from '@/config'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'



const initialState = {
  username: '',
  email: '',
  password: '',  
}

const AuthRegister = () => {

  const [formData, setFormData] = useState(initialState)
  const onSubmit = (e) => {}

  return (
    <div className='mx-auto w-full max-w-md space-y-6 '>
      <div className="text-center">
        <h1 className='text-3xl font-bold tracking-tight text-foreground'>Create new Account</h1>
        <p mt-2 >Already have an account</p>
        <Link className="font-medium text-primary hover:underline" to="/auth/login">Login</Link>
      </div>
      <CommonForm formControls= {registerFormControls} buttonText={"Sign Up"}
      formData={formData}
      setFormData={setFormData} 
      onSubmit={onSubmit}/>
    </div>
  )
}

export default AuthRegister