import React, { useState } from 'react';
import './CoinInfo.css';

const CoinInfo = ({ desc, name }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleReadMore = () => {
    setIsExpanded(!isExpanded);
  };

  const shortDescription = desc.length > 300 ? `${desc.substring(0, 300)}...` : desc;

  return (
    <div className='coin-description'>
      <h2 className='coin-heading'>{name}</h2>
      <p className='coin-theory'>
        <span dangerouslySetInnerHTML={{ __html: isExpanded ? desc : shortDescription }} />
        {desc.length > 300 && (
          <span className='read-more' onClick={toggleReadMore}>
            {isExpanded ? ' Read Less' : ' Read More'}
          </span>
        )}
      </p>
    </div>
  );
};

export default CoinInfo;
