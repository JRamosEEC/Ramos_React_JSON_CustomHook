import { useState } from 'react';
import './App.css';
import FetchingData from './FetchingData';
import PostingData from './PostingData';

function App() {
  //Fetch/Post
  const [showFetchData, setShowFetchData] = useState(true);
  const [showPostData, setPostData] = useState(false);

  const handleShowFetchDataDemo = () => {
    setShowFetchData(true);
    setPostData(false);
  };

  const handleShowPostDataDemo = () => {
    setShowFetchData(false);
    setPostData(true);
  };

  return (
    <div id="pageContainer" style={{ display:'flex', width:"100%", justifyContent:'center'}}>
      <div className="container">
        <button onClick={() => handleShowFetchDataDemo()} className="button">
          Fetching Data Demo
        </button>
        <button onClick={() => handleShowPostDataDemo()} className="button">
          Posting Data Demo
        </button>
        <hr />
        {showFetchData ? <FetchingData /> : <PostingData />}
      </div>
    </div>
  );
}

export default App;