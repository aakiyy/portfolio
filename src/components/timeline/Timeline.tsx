import React from 'react';
import { TimelineItem } from '../../models/timelineItem'

interface TimelineProps {
  data: TimelineItem[];
}

const Timeline: React.FC<TimelineProps> = ({ data }) => {
  return (
    <div className="timeline">
      {data.map((item, index) => (
        <div key={index} className="timeline-item">
          <div className={`timeline-item-content ${item.color}`}>
            <span className="timeline-item-year">{item.year}</span>
            <h3 className="timeline-item-title">{item.title}</h3>
            <p className="timeline-item-description">{item.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Timeline;