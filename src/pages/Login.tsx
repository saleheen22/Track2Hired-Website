import Lottie from 'lottie-react';
import React from 'react';
import loginAnimation from '../assets/login.json';
import { useForm } from 'react-hook-form';
type LoginFormValues = {
    email: string;
    password: string;
}
const Login = () => {
    const {register, handleSubmit, formState: {errors}} = useForm<LoginFormValues>();
    const onSubmit = (data: LoginFormValues) => {
        console.log(data);
    };
  return (
    <div>
      <h1>This is login page</h1>
     
      <div>
      
      <h1 className="text-5xl font-bold text-center">Login now!</h1>
     
      </div>
      <div >
        <div className="hero min-h-screen">
          <div className="hero-content flex-col lg:flex-row-reverse">
            <div className="text-center gap-6 lg:text-left">
              
              <p className="py-6">
              <Lottie
        animationData={loginAnimation}
        className="w-[300px] h-[300px] object-contain mx-auto"
      />
              </p>
            </div>
            <div className="card  w-full max-w-sm shrink-0 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1),0_2px_4px_-1px_rgba(0,0,0,0.06)] shadow-2xl">
              <div className="card-body">
               <form onSubmit={handleSubmit(onSubmit)}>
               <fieldset className="fieldset">
                  <label className="fieldset-label">Email</label>
                  <input {...register('email', {
                    required: 'Email is required',
                    pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: 'Invalid email address',
                      },
                  })} type="email" className={`input input-bordered ${errors.email ? 'input-error' : ''}`} placeholder="Email" />
                  {errors.email && <span className='text-red-500 text-sm mt-1'>{errors.email.message}</span>}
                  <label className="fieldset-label">Password</label>
                  <input
                    type="password"
                    className="input"
                    placeholder="Password"
                    {...register('password', {
                        required: 'Password is required',
                        minLength: {
                            value: 6,
                            message: 'Password must be at least 6 characters',
                        }
                    })}
                  />
                  {errors.email && <span className='text-red-500 text-sm mt-1'>{errors.email.message}</span>}
                  <div>
                    <a className="link link-hover">Forgot password?</a>
                  </div>
                  <button type='submit' className="btn bg-blue-500 mt-4">Login</button>
                </fieldset>
               </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
