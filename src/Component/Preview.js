import React from 'react';

const Preview = ({src, name, onClick}) => {
  return (
    <div>
      <img onClick={onClick}
        src={src}
        height="90" width="90" className="img-thumbnail"
        alt={ name } />
    </div>
  );
};

export default Preview;
