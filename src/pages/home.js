import React, { useState } from 'react';
import useTitle from '../utility/customHook';

const Home = () => {
  const [count, setCount] = useTitle();
  const [myNumber, setMyNumber] = useState(0);
  return (
    <div className="content">
      <div>
        <h1>Luthfi Fauzi</h1>
        <p>
          Life is about learning. Learn to be someone who tries to get better.
          Knowing the uninitiated, justifying the incorrect, fixing the
          incomplete and benefiting others. From learning we can give benefit to
          others. The best person is someone who benefits others. However,
          science and religion must be balanced. The man who is not based on
          faith will be dark.
        </p>
        <p>
          Likewise, people who believe without knowledge will not mean anything.
          But learning is fun and exciting. Learning is about hijra and
          traveling. Science in the world is very broad, can not only be learned
          if the dwell place in an area. Arabic proverb says that seek science
          though to the land of China.
        </p>
        <div>
          <h1>Welcome Home!</h1>
          <button
            type="button"
            onClick={() => {
              setCount(count + 1);
            }}
          >
            Click me
          </button>
          <button
            type="button"
            onClick={() => {
              setMyNumber(myNumber + 1);
            }}
          >
            Click myNumber
          </button>
          <h2>{myNumber}</h2>
        </div>
      </div>
    </div>
  );
};

export default Home;
