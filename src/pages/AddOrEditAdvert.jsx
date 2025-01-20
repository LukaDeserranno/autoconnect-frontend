import { useParams } from 'react-router-dom';
import CarForm from './verkopen/CarForm';

export default function AddOrEditAdvert() {
    const { id } = useParams();
    return (
        <div>
            <CarForm id={id}/>
        </div>
    )
}