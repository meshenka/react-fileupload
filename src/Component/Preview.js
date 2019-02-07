import React from 'react'
import PropTypes from 'prop-types'

const Preview = ({ src, name, onClick, size }) => {
  return (
    <div>
      <img
        onClick={onClick}
        src={src}
        height={size}
        width={size}
        className='preview-img-thumbnail'
        alt={name}
      />
    </div>
  )
}

Preview.propTypes = {
  onClick: PropTypes.func.isRequired,
  src: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  size: PropTypes.string.isRequired
}

Preview.defaultProps = {
  src: '/img/no-file.png',
  name: 'Preview',
  size: '90'
}

export default Preview
