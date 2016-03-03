import React from 'react';

const Preview = ({src, name, onClick, size}) => {
  return (
    <div>
      <img onClick={onClick}
        src={src}
        height={size} width={size} className="preview-img-thumbnail"
        alt={ name } />
    </div>
  );
};

Preview.propType={
    onClick: React.PropTypes.func,
    src: React.PropTypes.string,
    name:React.PropTypes.string,
    size: React.PropTypes.string
}

Preview.defaultProps={
    src: '/img/no-file.png',
    name: 'Preview',
    size: '90'

}
console.log(Preview);
export default Preview;
