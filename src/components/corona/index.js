import React, { useEffect } from 'react';
import app from '../../services/firebase';
import 'firebase/database';

const CoronaNews = () => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    const db = app.database().ref('news');
    db.on('value', (snapshot) => {
      const firebaseNews = snapshot.val();
      setNews(firebaseNews.data);
    });
  }, []);

  return (
    <div>
      <h2>Data corona</h2>
    </div>
  );
};

export default CoronaNews;
