import Lottie from 'lottie-react';
import { useContext, useState } from 'react';
import RegisterAnimation from '../assets/login.json';
import { useForm } from 'react-hook-form';
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai';
import { RegisterFormValues } from '../utils/Types/registerType';
import { AuthContext } from '../provider/AuthProvider';

const Register = () => { 
  const {createNewUser, setUser} = useContext(AuthContext);
    const [passOn, setPassON] = useState<boolean>(false);
    const {register, handleSubmit, formState: {errors}, reset} = useForm<RegisterFormValues>();
    const onSubmit = (data: RegisterFormValues) => {
      const {email, password} = data;
      reset();
      createNewUser({email, password}).then((userCredential) => {
        // Signed up 
        const user = userCredential;
        console.log(user);
        setUser(data);
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
      });;
    };
  return (
    <div className='bg-base-200'>
      <h1>This is Register page</h1>
     
      <div>
      
      <h1 className="text-5xl font-bold text-center">Register now!</h1>
     
      </div>
      <div >
        <div className="hero min-h-screen">
          <div className="hero-content flex-col lg:flex-row-reverse">
            <div className="text-center gap-6 lg:text-left">
              
              <p className="py-6">
              <Lottie
        animationData={RegisterAnimation}
        className="w-[300px] h-[300px] object-contain mx-auto"
      />
              </p>
            </div>
            <div className="card  w-full max-w-sm shrink-0  shadow-2xl">
              <div className="card-body">
               <form onSubmit={handleSubmit(onSubmit)}>
               <fieldset className="fieldset">

                {/* this is name fields */}

                <label className="fieldset-label">First Name</label>
                  <input {...register('firstName', {
                    required: 'First Name is required',
                   
                  })} type="text" className={`input input-bordered ${errors.firstName ? 'input-error' : ''}`} placeholder="First Name" />
                  {errors.firstName && <span className='text-red-500 text-sm mt-1'>{errors.firstName.message}</span>}

                  {/* last Name is  */}
                  <label className="fieldset-label">Last Name</label>
                  <input {...register('lastName', {
                    required: 'First Name is required',
                   
                  })} type="text" className={`input input-bordered ${errors.lastName ? 'input-error' : ''}`} placeholder="First Name" />
                  {errors.lastName && <span className='text-red-500 text-sm mt-1'>{errors.lastName.message}</span>}

                  

                {/* this is name fields */}
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
                    type={passOn ? 'password' : 'text'}
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
                  {passOn ? <AiFillEyeInvisible className='cursor-pointer text-xl' onClick={()=> setPassON(!passOn)}  />: <AiFillEye className='cursor-pointer text-xl' onClick={()=> setPassON(!passOn)} />}

                  


                  {errors.password && <span className='text-red-500 text-sm mt-1'>{errors.password.message}</span>}
                  <div>
                    <a className="link link-hover">Forgot password?</a>
                  </div>
                  <button type='submit' className="btn bg-blue-500 mt-4">Register</button>
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

export default Register;
