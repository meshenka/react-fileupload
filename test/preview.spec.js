/* eslint no-console: "off" */

import { expect } from 'chai'
import Preview from '../src/Component/Preview'
import { describe, it } from 'mocha'

describe('Preview', () => {
  it('produce node tree', () => {
    const view = Preview({
      src: 'img.jpg',
      name: 'test img',
      onClick: () => console.log('click'),
      size: 10
    })

    expect(view.type).to.equal('div')
    expect(view.props.children.type).to.equal('img')
    expect(view.props.children.props.src).to.equal('img.jpg')
    expect(view.props.children.props.height).to.equal(10)
    expect(view.props.children.props.width).to.equal(10)
    expect(view.props.children.props.alt).to.equal('test img')
    expect(view.props.children.props.onClick).to.be.a('function')
  })

  it('crash when a prop is missing', () => {
    expect(Preview).to.throw(TypeError)
  })
})
