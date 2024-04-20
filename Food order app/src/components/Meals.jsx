import MealItem from './MealItem';
import useHttp from '../hooks/useHttp';
import Error from './Error';

const URL = 'http://localhost:3000/meals';
const requestConfig = {
	method: 'GET',
};

export default function Meals() {
	const {
		data: loadedMeals,
		isLoading,
		error,
	} = useHttp(URL, requestConfig, []);

	if (isLoading) {
		return <p className='center'>Fetching meals...</p>;
	}

	if (error) {
		return <Error title='Failed to fetch data' message={error} />;
	}

	return (
		<ul id='meals'>
			{loadedMeals.map((meal) => (
				<MealItem id={meal.id} meal={meal}></MealItem>
			))}
		</ul>
	);
}
