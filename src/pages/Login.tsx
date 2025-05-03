import { useContext, useState } from 'react';

import { useForm } from 'react-hook-form';
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai';
import { LoginFormValues } from '../utils/Types/loginType';
import { AuthContext } from '../provider/AuthProvider';
import { useNavigate } from 'react-router';
import { FcGoogle } from 'react-icons/fc';

import Loader from './Common/Loader';
const Login = () => {
  const navigate = useNavigate();
  const [passOn, setPassON] = useState<boolean>(false);
  const { signInNewUser, signInWithGoogle } = useContext(AuthContext);
  const [loading, setLoading] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormValues>();
  const handleGoogleSignIn = async () => {
    setLoading(true);
    await signInWithGoogle();
    setLoading(false);
    navigate('/dashboard');
  };
  const onSubmit = (data: LoginFormValues) => {
    setLoading(true);
    signInNewUser(data)
      .then(userCredential => {
        // Signed in
        if (userCredential) {
          setLoading(false);
          navigate('/dashboard');
        }
      })
      .catch(error => {
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const errorCode = error.code;
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const errorMessage = error.message;
      });
  };
  if (loading) {
    return <Loader message="Logging you in..." />;
  }
  return (
    <div className="bg-base-200 min-h-screen flex items-center justify-center">
    <div className="w-3/4 md:w-1/2 flex justify-center">
      <div className="card w-full max-w-md shadow-2xl">
              <div className="card-body">
                <form onSubmit={handleSubmit(onSubmit)}>
                  <fieldset className="fieldset">
                    <label className="fieldset-label">Email</label>
                    <input
                      {...register('email', {
                        required: 'Email is required',
                        pattern: {
                          value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                          message: 'Invalid email address',
                        },
                      })}
                      type="email"
                      className={`input input-bordered pr-10 ${errors.email ? 'input-error' : ''}`}
                      placeholder="Email"
                    />
                    {errors.email && (
                      <span className="text-red-500 text-sm mt-1">
                        {errors.email.message}
                      </span>
                    )}
                    <label className="fieldset-label">Password</label>
                    <div className="relative">
                      <input
                        type={passOn ? 'password' : 'text'}
                        className={`input input-bordered pr-12 ${errors.password ? 'input-error' : ''}`}
                        placeholder="Password"
                        {...register('password', {
                          required: 'Password is required',
                          minLength: {
                            value: 6,
                            message: 'Password must be at least 6 characters',
                          },
                        })}
                      />
                      <span
                        className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer text-xl text-gray-500"
                        onClick={() => setPassON(!passOn)}
                        tabIndex={0}
                        role="button"
                        aria-label={passOn ? 'Show password' : 'Hide password'}
                      >
                        {passOn ? <AiFillEyeInvisible /> : <AiFillEye />}
                      </span>
                    </div>
                    {errors.password && (
                      <span className="text-red-500 text-sm mt-1">
                        {errors.password.message}
                      </span>
                    )}
                    <div>
                      <a className="link link-hover">Forgot password?</a>
                    </div>
                    <button
                      type="submit"
                      className="btn bg-blue-500 mt-4 text-white"
                    >
                      Login
                    </button>
                  </fieldset>
                </form>
                {/* Separator */}
                <div className="flex items-center my-4">
                  <div className="flex-grow border-t border-gray-300"></div>
                  <span className="mx-2 text-gray-500">Or</span>
                  <div className="flex-grow border-t border-gray-300"></div>
                </div>
                {/* Google Sign-In Button */}
                <button
                  onClick={handleGoogleSignIn}
                  className="btn btn-outline flex items-center justify-center w-full"
                  type="button"
                >
                  <FcGoogle className="text-2xl mr-2" />
                  Sign in with Google
                </button>
              </div>
              </div>
    </div>
  </div>
  );
};

export default Login;
