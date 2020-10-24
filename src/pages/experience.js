import React from 'react';

const Experience = () => {
  return (
    <div>
      <section className="content">
        <section className="right">
          <img className="logo" src="/image/adwitech.png" alt="lab" />
        </section>
        <section className="left">
          <h1>Advanced Wireless Technology (AdWiTech)</h1>
          <p>Laboratory member on 2019 - 2020.</p>
          <p>
            PATRIOT-Net is a technology for recovery telecommunication network
            in disaster area. My jobdesk is routing implementation and
            experiment with USRP.
          </p>
        </section>
      </section>
      <section className="content">
        <section className="right">
          <img className="logo" src="/image/adyawinsa.jpg" alt="ATE" />
        </section>
        <section className="left">
          <h1>PT Adyawinsa Telecommunication and Electrical</h1>
          <p>Internship student: May - August 2017.</p>
          <p>
            Internship student with job desk is implement telecommunication
            devices, such as antenna, radio equipment, BTS, etc, to cellular
            base station.
          </p>
        </section>
      </section>
    </div>
  );
};

export default Experience;
