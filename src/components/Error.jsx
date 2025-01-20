import { isAxiosError } from 'axios';

export default function Error({ error }) {
  if (isAxiosError(error)) {
    return (
      <div className="bg-red-500 text-white p-4 mb-4" data-cy="axios_error_message">
        <h4 className="font-bold">Oops, something went wrong</h4>
        <p>
          {error.response.data?.message || error.message}
          {error.response.data?.details && (
            <>
              :
              <br />
              {JSON.stringify(error.response.data.details)}
            </>
          )}
        </p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-red-500 text-white p-4 mb-4" data-cy="error_message">
        <h4 className="font-bold">An unexpected error occurred</h4>
        {error.message || JSON.stringify(error)}
      </div>
    );
  }

  return null;
}
