const BASE_URL = 'http://localhost:3000';

export async function fetchAvailablePlaces() {
    const response = await fetch(`${BASE_URL}/places`);
    const data = await response.json();

    if (!response.ok) {
        throw new Error('Failed to load data!');
    }

    return data.places;
}

export async function fetchSavedPlaces() {
    const response = await fetch(`${BASE_URL}/user-places`);
    const data = await response.json();

    if (!response.ok) {
        throw new Error('Failed to fetch user palces!');
    }

    return data.places;
}

export async function updateUserSavedPlaces(places) {
    const response = await fetch(`${BASE_URL}/user-places`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ places }),
    });

    const data = await response.json();

    if (!response.ok) {
        throw new Error('Failed to update data!');
    }

    return data.message;
}