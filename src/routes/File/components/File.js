/********************************************************
 * File.js 
 *
 * Responsible for serving the Editor necessary props
 * and connecting the editor to the selected doc's
 * content.
 *
 * @flow
 ********************************************************/

import React, { PropTypes, Component } from 'react'
import { ContentEditor } from '~/components'
import { sanitizeDirRoute } from '~/utils/sanitize'
import { CodeEditor } from '~/components'

export default class File extends Component {
  constructor(props) {
    super(props)
    this.state = {
      code: "Loading .."
    }
  }
  componentDidMount() {
    this.props.fetchPath(this.props.params.fileName)
  }
    
  render () {
    if (this.props.file.content.length === 0) {
      return <div>Loading</div>
    } else {
    switch (this.props.location.pathname.split('.')[1]) {
      case "html" :
        return  <CodeEditor  
                    mode="htmlmixed"
                    sha={this.props.file.sha} 
                    path={this.props.file.path} 
                    content={this.props.file.content} 
                    isFetching={this.props.file.isFetching}
                    fetchPath={(path) => this.props.fetchPath(path)}
                    updateFile={this.props.updateFile} /> 
      case "js" :
        return  <CodeEditor  
                    mode="javascript"
                    sha={this.props.file.sha} 
                    path={this.props.file.path} 
                    content={this.props.file.content} 
                    isFetching={this.props.file.isFetching}
                    fetchPath={(path) => this.props.fetchPath(path)}
                    updateFile={this.props.updateFile} /> 
      case "yml" || "yaml":
        return  <CodeEditor  
                    mode="yaml"
                    sha={this.props.file.sha} 
                    path={this.props.file.path} 
                    content={this.props.file.content} 
                    isFetching={this.props.file.isFetching}
                    fetchPath={(path) => this.props.fetchPath(path)}
                    updateFile={this.props.updateFile} /> 
      case "xml":
        return  <CodeEditor  
                    mode="xml"
                    sha={this.props.file.sha} 
                    path={this.props.file.path} 
                    content={this.props.file.content} 
                    isFetching={this.props.file.isFetching}
                    fetchPath={(path) => this.props.fetchPath(path)}
                    updateFile={this.props.updateFile} /> 
               
      case "scss" || "sass" :
        return  <CodeEditor  
                    mode="sass"
                    sha={this.props.file.sha} 
                    path={this.props.file.path} 
                    content={this.props.file.content} 
                    isFetching={this.props.file.isFetching}
                    fetchPath={(path) => this.props.fetchPath(path)}
                    updateFile={this.props.updateFile} /> 
      case "md" :
        return  <CodeEditor  
                    mode="markdown"
                    sha={this.props.file.sha} 
                    path={this.props.file.path} 
                    content={this.props.file.content} 
                    isFetching={this.props.file.isFetching}
                    fetchPath={(path) => this.props.fetchPath(path)}
                    updateFile={this.props.updateFile} /> 
               
      default :
        return  <ContentEditor 
                    sha={this.props.file.sha} 
                    path={this.props.file.path} 
                    content={this.props.file.content} 
                    updateFile={this.props.updateFile} /> 
    }

    }
  }
}
