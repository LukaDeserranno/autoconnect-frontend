import { useFormContext } from 'react-hook-form';

export default function LabelInput({
  label, name, type, validationRules, ...rest
}) {
  const {
    register,
    formState: {
      errors,
      isSubmitting,
    },
  } = useFormContext();

  const hasError = name in errors;

  return (
    <div className="mb-4">
      <label htmlFor={name} className="block text-sm font-medium">
        {label}
      </label>
      <input
        {...register(name, validationRules)}
        id={name}
        type={type}
        disabled={isSubmitting}
        className={`mt-1 p-2 border rounded-md w-full text-black ${hasError ? 'border-red-500' : 'border-gray-300'}`}
        {...rest}
      />
      {hasError ? (
        <p className="mt-2 text-sm text-red-500" data-cy="label_input_error">
          {errors[name].message}
        </p>
      ) : null}
    </div>
  );
}
