import React from 'react'
import PropTypes from 'prop-types'

import pic01 from '../images/pic01.jpg'
import pic02 from '../images/pic02.jpg'
import pic03 from '../images/pic03.jpg'

class Main extends React.Component {
  render() {

    let close = <div className="close" onClick={() => {this.props.onCloseArticle()}}></div>

    return (
      <div ref={this.props.setWrapperRef} id="main" style={this.props.timeout ? {display: 'flex'} : {display: 'none'}}>

        <article id="intro" className={`${this.props.article === 'intro' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">Software Development</h2>
          <span className="image main"><img src={pic01} alt="" /></span>
          <p>Test Lift Highlights:
            
            <ul>
              <li>
                Directly responsible for building two SaaS companies from scratch. 
              </li>
              <li>
                Directly responsible for building several consumer startups from scratch.
              </li>
              
            </ul>

            <a href="https://www.youtube.com/embed/dym6XD3-8qw?rel=0&autoplay=1" target="_blank">
              Learn more about Test Lift
            </a> 

          </p>
          {close}
        </article>

        <article id="work" className={`${this.props.article === 'work' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">UI/UX Design</h2>
          <span className="image main"><img src={pic02} alt="" /></span>
          <p>Test Lift Highlights:
            <ul>
              <li>
                Significantly reduced load times utilizing static and dynamic optimization.
              </li>
              <li>
                Greatly increased conversion rates using our proprietary funnel flow analysis.
              </li>
              
            </ul>

            <a href="https://www.youtube.com/embed/dym6XD3-8qw?rel=0&autoplay=1" target="_blank">
              Learn more about Test Lift
            </a> 

          </p>
          {close}
        </article>

        <article id="about" className={`${this.props.article === 'about' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">Marketing</h2>
          <span className="image main"><img src={pic03} alt="" /></span>
          <p>Test Lift Highlights:
            <ul>
              <li>
                Built full stack advertising campaigns resulting in millions in online sales.
              </li>
            </ul>

            <a href="https://www.youtube.com/embed/dym6XD3-8qw?rel=0&autoplay=1" target="_blank">
              Learn more about Test Lift
            </a> 

          </p>
          {close}
        </article>

        <article id="contact" className={`${this.props.article === 'contact' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
        <h2 className="major">Project Management</h2>
          <span className="image main"><img src={pic03} alt="" /></span>
          
          <p>Test Lift Highlights:
          
            <ul>
              <li>
                Eliminated fixed overhead costs through strategic management of freelancers.
              </li>
            </ul>

            <a href="https://www.youtube.com/embed/dym6XD3-8qw?rel=0&autoplay=1" target="_blank">
              Learn more about Test Lift
            </a> 

          </p>
          {close}
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