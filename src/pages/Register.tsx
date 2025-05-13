import { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai';
import { RegisterFormValues } from '../utils/Types/registerType';
import { AuthContext } from '../provider/AuthProvider';
import { useNavigate } from 'react-router';
import Loader from './Common/Loader';
import {JobsContext} from '../provider/JobsProvider';

const Register = () => {
  const { refetchJobs } = useContext(JobsContext);

  const navigate = useNavigate();
  const { createNewUser } = useContext(AuthContext);
  const [passOn, setPassON] = useState<boolean>(false);
  const [loading, setLoading] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<RegisterFormValues>();

  const onSubmit = (data: RegisterFormValues) => {
    const { email, password, firstName, lastName } = data;
    setLoading(true);

    createNewUser({ email, password, firstName, lastName })
      .then(userCredential => {
        setLoading(false);
        if (userCredential.success) {
          reset();
          refetchJobs();
          navigate('/dashboard');
        }
      })
      .catch(error => {
        setLoading(false);
        console.log(error.code, error.message);
      });
  };

  if (loading) {
    return <Loader message="Creating your account..." />;
  }

  return (
    <div className="bg-base-200 min-h-screen flex items-center justify-center">
      <div className="w-full md:w-1/2 flex justify-center">
        <div className="card w-full max-w-md shadow-2xl">
          <div className="card-body">
            <h1 className="text-2xl md:text-3xl font-bold text-center mb-6">
              Create Account
            </h1>
            <form onSubmit={handleSubmit(onSubmit)}>
              <fieldset className="fieldset">
                <label className="fieldset-label">First Name</label>
                <input
                  {...register('firstName', {
                    required: 'First Name is required',
                  })}
                  type="text"
                  className={`input input-bordered w-full ${errors.firstName ? 'input-error' : ''}`}
                  placeholder="First Name"
                />
                {errors.firstName && (
                  <span className="text-red-500 text-sm mt-1">
                    {errors.firstName.message}
                  </span>
                )}

                <label className="fieldset-label mt-4">Last Name</label>
                <input
                  {...register('lastName', {
                    required: 'Last Name is required',
                  })}
                  type="text"
                  className={`input input-bordered w-full ${errors.lastName ? 'input-error' : ''}`}
                  placeholder="Last Name"
                />
                {errors.lastName && (
                  <span className="text-red-500 text-sm mt-1">
                    {errors.lastName.message}
                  </span>
                )}

                <label className="fieldset-label mt-4">Email</label>
                <input
                  {...register('email', {
                    required: 'Email is required',
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: 'Invalid email address',
                    },
                  })}
                  type="email"
                  className={`input input-bordered w-full ${errors.email ? 'input-error' : ''}`}
                  placeholder="Email"
                />
                {errors.email && (
                  <span className="text-red-500 text-sm mt-1">
                    {errors.email.message}
                  </span>
                )}

                <label className="fieldset-label mt-4">Password</label>
                <div className="relative">
                  <input
                    type={passOn ? 'password' : 'text'}
                    className={`input input-bordered w-full pr-12 ${errors.password ? 'input-error' : ''}`}
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

                <button
                  type="submit"
                  className="btn bg-blue-500 text-white w-full mt-6"
                >
                  Register
                </button>

                <div className="text-center mt-4">
                  Already have an account?{' '}
                  <a href="/login" className="text-blue-600 hover:underline">
                    Login
                  </a>
                </div>
              </fieldset>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
