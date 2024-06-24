import React from 'react';
import './About.css'

const About: React.FC = () => {
  return (
    <section className='container'>
      <div className='left'>
        <h2>About</h2>
        <p className='subheading'>Subheading for description or instructions</p>
        <p>With a strong foundation in web development and a passion for data analytics, I have successfully transitioned from a Web Engineer to an Analytics Engineer.</p>
        <p>I love creating things and exploring new technologies. My journey in tech started with web development, and my curiosity led me to delve into the world of data analytics.</p>
      </div>
      {/* <div>
        <img src='https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.psy.ritsumei.ac.jp%2Fakitaoka%2Fsample_images.html&psig=AOvVaw0VCNBaAvAv1peXSz8NVunn&ust=1719153784827000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCMD6242574YDFQAAAAAdAAAAABAE'></img>
      </div> */}
    </section>
  );
}

export default About;