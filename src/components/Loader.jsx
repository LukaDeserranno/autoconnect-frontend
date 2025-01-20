export default function Loader() {
  return (
    <div className="flex flex-col items-center" data-cy="loader">
      <div className="animate-spin rounded-full border-t-4 border-blue-500 border-opacity-25 h-12 w-12"></div>
      <span className="sr-only">Loading...</span>
    </div>
  );
}
