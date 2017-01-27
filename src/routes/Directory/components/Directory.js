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
import { FileBrowser } from '~/components'
import { sanitizeFileRoute, sanitizeDirRoute, sanitizeLastDir } from '~/utils/sanitize'

export default class Directory extends Component {
  constructor(props) {
    super(props)
    this.state = {
      // set initialState
      // local Class state only
      currentDir: ""
    }
  }
  static propTypes = {
    // Document all properties
  }
  componentDidMount() {
      this.props.fetchDirectory(sanitizeDirRoute(this.props.location.pathname))
  }
  render () {
    return (
      <div className="">
      {sanitizeLastDir(this.props.location.pathname)} Directory
      <br />
      <hr />
        {this.props.directory.isFetching === true
          ? <div>Loading...</div>
          : <FileBrowser 
                files={this.props.directory} currentDir={sanitizeDirRoute(window.location.pathname)} /> }
      </div>
    )
  }
}