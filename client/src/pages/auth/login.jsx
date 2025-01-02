import CommonForm from '@/components/common/form'
import { LoginFormControls } from '@/config'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'



const initialState = {

  email: '',
  password: '',  
}

const AuthLogin = () => {

  const [formData, setFormData] = useState(initialState)
  const onSubmit = (e) => {}

  return (
    <div className='mx-auto w-full max-w-md space-y-6 '>
      <div className="text-center">
        <h1 className='text-3xl font-bold tracking-tight text-foreground'>Sign in to your account</h1>
        <p mt-2 >Don't have an account</p>
        <Link className="font-medium text-primary hover:underline" to="/auth/register">Register</Link>
      </div>
      <CommonForm formControls= {LoginFormControls} buttonText={"Sign In"}
      formData={formData}
      setFormData={setFormData} 
      onSubmit={onSubmit}/>
    </div>
  )
}

export default AuthLogin 