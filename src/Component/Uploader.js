/* eslint no-console: "off" */

import React, { useState } from 'react'
import Preview from './Preview'

const Uploader = ({ id }) => {
  const [preview, setPreview] = useState({
    src: '/img/no-file.png',
    alt: 'This is a test'
  })

  const handleFile = e => {
    var file = e.target.files[0]
    var reader = new FileReader()

    //we have a file and it is an image
    if (file.type.indexOf('image') === 0) {
      reader.readAsDataURL(file)
    } else {
      setPreview({
        src: '/img/binary-file.png',
        alt: file.name
      })
    }

    reader.onloadend = function() {
      setPreview({
        src: reader.result,
        alt: file.name
      })
    }
  }

  const remove = () => {
    setPreview({
      src: '/img/no-file.png',
      alt: 'This is a test'
    })
  }

  const upload = e => {
    console.log(e.target)
  }

  return (
    <div>
      <div id={'documents_' + id}>
        <div className='form-group hidden'>
          <label
            className='control-label'
            htmlFor={'documents_' + id + '_file'}>
            File
          </label>
          <input
            type='file'
            onChange={handleFile}
            id={'_documents_' + id + '_file'}
            name={'documents[' + id + '][file]'}
          />
        </div>
      </div>
      <Preview 
        src={preview.src}
        name={preview.alt}
        onClick={upload}
      />
      <a
        href='#'
        onClick={remove}
        className='remove-document'
        title='Remove File'>
        <img src='/img/remove-doc.png' alt='Remove File' />
      </a>
    </div>
  )
}

export default Uploader
