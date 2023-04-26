import { useState, useEffect } from 'react';
import axios from 'axios';

const baseURL = 'http://localhost:3000/';

export const usePost = (url, title, body) => {
    const [success, setSuccess] = useState(false);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
   
    const postData = async () => {
        setError(undefined);
        setLoading(true);

        try {
            const dbData = await axios.get(`${baseURL}${url}`);
            const id = dbData.data.length + 1;

            const response = await axios.post(`${baseURL}${url}`, {
                userId: 1,
                id: id,
                title: title,
                body: body
            });

            setSuccess(true);
        } catch (error) {
            setError(error.response.data)
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        setSuccess(false);
        setLoading(false);
        setError('');
    }, [url, title, body]);

    return { success, loading, error, postData };
}