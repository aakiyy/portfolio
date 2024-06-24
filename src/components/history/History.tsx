import React from 'react';
import './History.css'
import { TimelineItem } from '../../models/timelineItem';
import Timeline from '../timeline/Timeline';

const History: React.FC = () => {
    const timelineData: TimelineItem[] = [
      {
        year: "2008",
        title: "Lorem Ipsum",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        color: "yellow"
      },
      {
        year: "2009",
        title: "Dolor Sit Amet",
        description: "Excepteur sint occaecat cupidatat non proident.",
        color: "red"
      },
      {
        year: "2011",
        title: "Consectetur",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        color: "red"
      },
      {
        year: "2014",
        title: "Adipisicing Elit",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        color: "green"
      },
      {
        year: "2015",
        title: "Labore et Dolore",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        color: "blue"
      },
      {
        year: "2017",
        title: "Magna Aliqua",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        color: "blue"
      }
    ];

  return (
    <section className='container'>
      <div>
        <h2>History</h2>
        <p className='subheading'>Here is my history.</p>
        <div>
          <h3>Web Engineer</h3>
          <p>Started my career as a web engineer, working with technologies like JavaScript, React, and Node.js to build dynamic and responsive web applications.</p>
        </div>
        <div>
          <h3>Analytics Engineer</h3>
          <p>Transitioned to an analytics engineer role, focusing on data analysis and visualization using tools like Python, SQL, and Tableau. I work on deriving insights from data to drive business decisions.</p>
        </div>
        <Timeline data={timelineData} />
      </div>
    </section>
  );
}

export default History;