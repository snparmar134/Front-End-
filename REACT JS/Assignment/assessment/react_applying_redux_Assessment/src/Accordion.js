import React from 'react';
import { connect } from 'react-redux';
import { toggleAccordion } from './redux/actions';
import './Accordion.css'; // Ensure you have this CSS file for styling

const Accordion = ({ items, activeIndex, toggleAccordion }) => {
  return (
    <div className="accordion">
      {items.map((item, index) => (
        <div key={index} className="accordion-item">
          <div className="accordion-title" onClick={() => toggleAccordion(index)}>
            {item.title}
            <span className="accordion-arrow">{activeIndex === index ? '▲' : '▼'}</span>
          </div>
          <div className="accordion-body" style={{ display: activeIndex === index ? 'block' : 'none' }}>
            {item.content}
          </div>
        </div>
      ))}
    </div>
  );
};

const mapStateToProps = (state) => ({
  activeIndex: state.activeIndex
});

const mapDispatchToProps = {
  toggleAccordion
};

export default connect(mapStateToProps, mapDispatchToProps)(Accordion);
