import React, { useState } from 'react';

const Home = () => {
  const [myNumber, setMyNumber] = useState(0);
  return (
    <div>
      <section className="content">
        <section className="right">
          <img src="/image/luthfi.JPG" alt="" />
        </section>
        <section className="left">
          <h1 className="bigTitle">ABOUT ME</h1>
          <p>
            I have dream as a professional cybersecurity engineer, so I choose a
            job that was re- levant to my career poals. I am a fresh Graduate
            from Telkom University. I have pood expertise in network engineering
            too.
          </p>
          <p>
            I have some certifications of networking, such as MTCNA and MTCRE,
            and some professional courses, such as CCNA Cybersecurity Operations
            and Introductions to Network. I am sure, I can be a professional
            cybersecurity engineer for 5 years later.
          </p>
        </section>
      </section>
      <section className="content">
        <div>
          <section className="right">
            <h1
              className="bigTitle"
              style={{ paddingLeft: '20%', width: '1000px' }}
            >
              HITUNG JUMLAH KLIKMU!
            </h1>
            <p style={{ paddingLeft: '20%', width: '1000px' }}>
              Kamu bisa melihat jumlah klik kamu disini.
            </p>
          </section>
          <section className="left" style={{ textAlign: 'center' }}>
            <button
              type="button"
              onClick={() => {
                setMyNumber(myNumber + 1);
              }}
            >
              HITUNG
            </button>
            <h1
              className="bigTitle"
              style={{ textAlign: 'center', paddingTop: '-100px' }}
            >
              {myNumber}
            </h1>
          </section>
        </div>
      </section>
    </div>
  );
};

export default Home;
