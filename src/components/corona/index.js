import React, { useEffect } from 'react';
import app from '../../services/firebase';
import 'firebase/database';

const Corona = () => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    const db = app.database().ref('news');
    db.on('value', (snapshot) => {
      const firebaseNews = snapshot.val();
      setNews(firebaseNews.data);
    });
  }, []);

<<<<<<< Updated upstream
  return (
    <div>
      <h2>Data corona</h2>
    </div>
  );
};

export default Corona;
=======
export default CoronaNews;
>>>>>>> Stashed changes
