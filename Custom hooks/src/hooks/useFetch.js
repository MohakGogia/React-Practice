import { useEffect, useState } from "react";

export function useFetch(fetchFn, intialValue) {
    const [isFetching, setIsFetching] = useState();
    const [error, setError] = useState();
    const [data, setData] = useState(intialValue);

    useEffect(() => {
        async function fetchData() {
            setIsFetching(true);
            try {
                const data = await fetchFn();
                setData(data);
            } catch (error) {
                setError({ message: error.message || 'Failed to fetch data' });
            }

            setIsFetching(false);
        }

        fetchData();
    }, [fetchFn]);

    return {
        isFetching,
        data,
        setData,
        error,
    }
}