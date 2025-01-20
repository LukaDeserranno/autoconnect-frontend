import { useEffect } from 'react';
import { useAuth } from '../contexts/Auth.context';
import { useThemeColors } from '../contexts/Theme.context';

export default function Logout() {
  const { theme, oppositeTheme } = useThemeColors();
  const { isAuthed, logout } = useAuth();

  useEffect(() => {
    logout();
  }, [logout]);

  if (isAuthed) {
    return (
      <div className={`container bg-${theme} text-${oppositeTheme}`}>
        <div className='row'>
          <div className='col-12'>
            <h1>Logging out...</h1>
          </div>
        </div>
      </div>
    );
  }

  return (
  <div className=" text-center py-4 lg:px-4 mt-20">
    <div className="p-2 bg-indigo-800 items-center text-indigo-100 leading-none lg:rounded-full flex lg:inline-flex" role="alert">
      <span className="flex rounded-full bg-indigo-500 uppercase px-2 py-1 text-xs font-bold mr-3">Uitgelogd</span>
      <span className="font-semibold mr-2 text-left flex-auto">Wij hopen u snel terug te zien op onze website!</span>
      <svg className="fill-current opacity-75 h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M12.95 10.707l.707-.707L8 4.343 6.586 5.757 10.828 10l-4.242 4.243L8 15.657l4.95-4.95z"/></svg>
    </div>
  </div>
  );
}
