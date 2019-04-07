import React from 'react'
import PropTypes from 'prop-types'

import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
  withRouter
} from "react-router-dom";

/*
import pic01 from '../images/pic01.jpg'
import pic02 from '../images/pic02.jpg'
import pic03 from '../images/pic03.jpg'
*/

class Main extends React.Component {
  render() {

    return (
      <div ref={this.props.setWrapperRef} id="main" style={this.props.timeout ? {display: 'flex'} : {display: 'none'}}>


        <article id="wallet" className={`${this.props.article === 'wallet' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <div className="redirect" onClick={() => {this.props.history.push('/wallet')}}></div>
        </article>


        <article id="updates" className={`${this.props.article === 'updates' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <div className="redirect" onClick={() => {this.props.history.push('/updates')}}></div>
        </article>


        <article id="library" className={`${this.props.article === 'library' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <div className="redirect" onClick={() => {this.props.history.push('/library')}}></div>
        </article>


        <article id="about" className={`${this.props.article === 'about' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <div className="redirect" onClick={() => {this.props.history.push('/about')}}></div>
        </article>

      </div>
    )
  }
}

Main.propTypes = {
  route: PropTypes.object,
  article: PropTypes.string,
  articleTimeout: PropTypes.bool,
  onCloseArticle: PropTypes.func,
  timeout: PropTypes.bool,
  setWrapperRef: PropTypes.func.isRequired,
}

export default Main
