import React, { useState, useEffect } from 'react';
import Loading from './Loading';
import { usePost } from './usePost.js';

const PostingData = (props) => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  const { success, loading, error, postData } = usePost('posts', title, body);

  const clearForm = () => { 
     setTitle(''); 
     setBody(''); 
  };

  useEffect(() => {
    return () => {
      clearForm();
    };
  }, []);

  if(error != undefined && error.length > 0) { return <p style={{ textAlign:'center'}}>An error occurres {error}</p>; };

  if (loading) { return <Loading /> }

  return (
    <div className="form-container">
        <div className="form-content">
            <label className="form-label">Set Title</label>
            <input
                type="text"
                value={title}
                onChange={(event) => setTitle(event.target.value)}
            />
            
            <label className="form-label">Set Body</label>
            <input
                type="text"
                value={body}
                onChange={(event) => setBody(event.target.value)}
            />

            {success ?
                    <>
                        <div>Posted Successfully!</div>

                        <button onClick={ clearForm } className="button">
                            Go Back
                        </button>
                    </>
                 :
                    <>
                        <button onClick={ postData } className="button">
                            Submit
                        </button>

                        <button onClick={ clearForm } className="button">
                            Clear Form
                        </button>
                    </>
            }
        </div>
    </div>
  );
};

export default PostingData;