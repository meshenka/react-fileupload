import React from 'react';

const FilePreview = ({src, name, onClick}) => {
  (
    <div>
      <img onClick={onClick}
        src={src}
        height="90" width="90" className="img-thumbnail"
        alt={ name } />
    </div>
  );
};

export default FilePreview;
