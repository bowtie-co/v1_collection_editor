/********************************************************
 * Directory.js
 *
 * The directory component is responsible for rendering
 * the contents of a subdirectory in a project. This
 * component could even get renamed to "Subdirectory"
 * in the future.
 *
 * It will render a FileManager component that is used
 * on the project homepage.
 * 
 *
 * @flow
 ********************************************************/

import React, { PropTypes, Component } from 'react'

export default class Directory extends Component {
  constructor(props) {
    super(props)
    this.state = {
      // set initialState
      // local Class state only
    }
  }
  static propTypes = {
    // Document all properties
  }
  render () {
    return (
      <div className="">
          Directory
      </div>
    )
  }
}
