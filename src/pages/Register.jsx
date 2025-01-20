import { useCallback, useMemo } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FormProvider, useForm } from 'react-hook-form';
import LabelInput from '../components/LabelInput';
import { useAuth } from '../contexts/Auth.context';
import Error from '../components/Error';
import { useThemeColors } from '../contexts/Theme.context';

export default function Register() {
  const { theme, oppositeTheme } = useThemeColors();
  const { error, loading, register } = useAuth();
  const navigate = useNavigate();

  const methods = useForm();
  const { getValues, handleSubmit, reset } = methods;

  const handleCancel = useCallback(() => {
    reset();
  }, [reset]);

  const handleRegister = useCallback(
    async ({ email, password }) => {
      const loggedIn = await register({ email, password });

      if (loggedIn) {
        navigate({
          pathname: '/',
          replace: true,
        });
      }
    },
    [register, navigate],
  );

  const validationRules = useMemo(() => ({
    email: {
      required: 'Email is required',
    },
    password: {
      required: 'Password is required',
    },
    confirmPassword: {
      required: 'Password confirmation is required',
      validate: (value) => {
        const password = getValues('password');
        return password === value || 'Passwords do not match';
      },
    },
  }), [getValues]);

  return (
    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8 mt-20 bg">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight">
          Maak een account aan
        </h2>
      </div>
      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <FormProvider {...methods}>
            <div className={`container text-${oppositeTheme}`}>
                <form
                className='space-y-4'
                onSubmit={handleSubmit(handleRegister)}
                >

                <Error error={error} />

                <LabelInput
                    label='Email'
                    type='text'
                    name='email'
                    placeholder='your@email.com'
                    validationRules={validationRules.email}
                />

                <LabelInput
                    label='Wachtwoord'
                    type='password'
                    name='password'
                    validationRules={validationRules.password}
                />

                <LabelInput
                    label='Wachtwoord bevestigen'
                    type='password'
                    name='confirmPassword'
                    validationRules={validationRules.confirmPassword}
                />

                <div className='clearfix mt-4'>
                    <div className='btn-group flex justify-center gap-2'>
                    <button
                        type='submit'
                        className='flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
                        disabled={loading}
                    >
                        Registreer
                    </button>

                    <Link
                        to='/'
                        type='button'
                        className='flex w-full justify-center rounded-md bg-gray-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-gray-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-600" onClick={handleReset} data-cy="submit"'
                        onClick={handleCancel}
                    >
                        Annuleren
                    </Link>
                    </div>
                </div>
                </form>
            </div>
        </FormProvider>
      </div>
    </div>
  );
}