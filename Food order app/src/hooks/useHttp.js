import { useCallback, useEffect, useState } from "react";

async function sendHttpRequest(url, config) {
    const response = await fetch(url, config);

    const resData = await response.json();

    if (!response.ok) {
        throw new Error(resData.message || 'Something went wrong!');
    }

    return resData;
}

export default function useHttp(url, config, initalValue) {
    const [error, setError] = useState();
    const [isLoading, setIsLoading] = useState(false);
    const [data, setData] = useState(initalValue);

    function clearData () {
        setData(initalValue);
    }

    const sendRequest = useCallback(async function sendRequest(data) {
        setIsLoading(true);
        try {
            const resData = await sendHttpRequest(url, { ...config, body: data });
            setData(resData);
        } catch (error) {
            setError(error.message || 'Something went wrong!');
        }
        setIsLoading(false);
    }, [url, config]);

    useEffect(() => {
        if (config?.method === 'GET') {
            sendRequest();
        }
    }, [sendRequest]);

    return {
        data,
        isLoading,
        error,
        sendRequest,
        clearData,
    }
}