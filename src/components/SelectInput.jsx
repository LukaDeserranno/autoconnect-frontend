import React from 'react';
import { useForm, Controller } from 'react-hook-form';

export default function SelectInput({ label, options, name, control, disabled = false, rules, error }) {
  return (
    <div className='container mb-3'>
      <label htmlFor="" className='pb-1'>
        {label}
      </label>
      <Controller
        name={name}
        control={control}
        defaultValue=""
        disabled={disabled}
        render={({ field }) => (
          <div>
            <select
              {...field}
              className="block w-full rounded-md border-0 py-1.5 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              aria-label=".form-select-sm example"
              data-cy={name}
            >
              <option key='all' value="">
                Alle
              </option>
              {options.map((option) => (
                <option key={option.id} value={option.name}>
                  {option.name}
                </option>
              ))}
            </select>
            {error && <p className='form-text text-danger'>{error.message}</p>}
          </div>
        )}
        rules={rules}
      />
    </div>
  );
}
