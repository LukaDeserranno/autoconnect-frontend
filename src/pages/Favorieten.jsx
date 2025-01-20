import useSWR from 'swr';
import { getAll } from '../api';
import AsyncData from '../components/AsyncData';
import CarCards from '../components/advert/CarCards';

export default function Favorieten() {
  const userId = localStorage.getItem('userId');
  const { data: adverts, error, isLoading, mutate: mutateAdverts } = useSWR(`adverts/favorites/${userId}`, getAll);

  return (
    <div className="container mt-10 w-3/4 flex flex-col items-center">
      <h1 className='text-2xl font-semibold m-5'>Mijn Favorieten</h1>
      <AsyncData loading={isLoading} error={error}>
        <CarCards carlist={adverts} mutate={mutateAdverts} />
      </AsyncData>
    </div>
  );
}
