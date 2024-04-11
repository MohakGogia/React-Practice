import { useEffect, useState } from 'react';
import Places from './Places.jsx';
import Error from './Error.jsx';
import { fetchAvailablePlaces } from '../http.js';
import { sortPlacesByDistance } from '../loc.js';

export default function AvailablePlaces({ onSelectPlace }) {
	const [isFetching, setIsFetching] = useState(false);
	const [availablePlaces, setAvailablePlaces] = useState([]);
	const [error, setError] = useState(null);

	useEffect(() => {
		async function fetchPlaces() {
			setIsFetching(true);

			try {
				const placesData = await fetchAvailablePlaces();

				navigator.geolocation.getCurrentPosition((position) => {
					const sortedPlaces = sortPlacesByDistance(
						placesData,
						position.coords.latitude,
						position.coords.longitude
					);
					setAvailablePlaces(sortedPlaces);
					setIsFetching(false);
				});
			} catch (error) {
				setError({
					message:
						error.message ||
						'An error occurred while fetching the data, please try again after sometime.',
				});
				setIsFetching(false);
			}
		}

		fetchPlaces();
	}, []);

	if (error) {
		return <Error title='Error occured' message={error.message} />;
	}

	return (
		<Places
			title='Available Places'
			places={availablePlaces}
			isLoading={isFetching}
			loadingText='Fetching places...'
			fallbackText='No places available.'
			onSelectPlace={onSelectPlace}
		/>
	);
}
