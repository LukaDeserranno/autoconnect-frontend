import { useCallback } from 'react';
import { useNavigate, useLocation, Link } from 'react-router-dom';
import { FormProvider, useForm } from 'react-hook-form';
import LabelInput from '../components/LabelInput';
import { useAuth } from '../contexts/Auth.context';
import Error from '../components/Error';

const validationRules = {
  email: {
    required: 'Email is required',
  },
  password: {
    required: 'Password is required',
  },
};

export default function Login() {
  const { error, loading, login } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const methods = useForm({});
  const { handleSubmit, reset } = methods;

  const handleCancel = useCallback(() => {
    reset();
  }, [reset]);

  const handleLogin = useCallback(
    async ({ email, password }) => {
      const loggedIn = await login(email, password);

      if (loggedIn) {
        const redirectUrl = new URLSearchParams(location.search).get('redirect') || '/';
        navigate({
          pathname: "/",
          replace: true,
        });
      }
    },
    [login, navigate, location.search],
  );

  return (
    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8 mt-20 bg">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight">
          Log in op je account
        </h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <FormProvider {...methods}>
          <form className="space-y-6" onSubmit={handleSubmit(handleLogin)}>
            <Error error={error} />

            <LabelInput
              label="Email"
              type="text"
              name="email"
              placeholder="your@email.com"
              data-cy="email_input"
              validationRules={validationRules.email}
            />

            <LabelInput
              label="Wachtwoord"
              type="password"
              name="password"
              data-cy="password_input"
              validationRules={validationRules.password}
            />

            <div>
              <button
                type="submit"
                data-cy="submit_btn"
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                disabled={loading}
              >
                Log in
              </button>
            </div>
          </form>
        </FormProvider>

        <p className="mt-10 text-center text-sm">
          Nog geen account?{' '}
          <Link to="/register" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
            registreer
          </Link>
        </p>
      </div>
    </div>
  );
}
