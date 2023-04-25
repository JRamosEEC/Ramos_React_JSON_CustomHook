import { useState, useEffect } from 'react';
import axios from 'axios';
import Loading from './Loading';
import { useFetch } from './useFetch';


const FetchingData = () => {
    const {data: posts, loading, error} = useFetch('posts');

    //I noticed this works yet it doesn't when I do it with loading
    error ? () => { return <p style={{ textAlign:'center'}}>An error occurres {error}</p>; } : undefined;

    if (loading) { return <Loading /> }

    return (
        <>
            {posts.length ? (
                posts.map((post) => {
                    return (
                        <div key={post.id} style={{ textAlign:'center'}}>
                            <p>{post.title}</p>
                            <p>{post.body}</p>
                        </div>
                    );
                })
            ) : undefined}
        </>
    );
};
  
export default FetchingData;