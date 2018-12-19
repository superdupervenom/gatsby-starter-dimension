import React from 'react'
import PropTypes from 'prop-types'

const Header = (props) => (
    <header id="header" style={props.timeout ? {display: 'none'} : {}}>
        <div className="logo">
            <span className="icon fa-diamond"></span>
        </div>
        <div className="content">
            <div className="inner">
                <h1>We are partners in growing your company</h1>
                <p>
                    We are an exclusive network of the top freelance software developers, designers, marketers, and project managers 
                </p>
            </div>
        </div>
        <nav>
            <ul>
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('intro')}}>Software Development</a></li>
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('work')}}>UI/UX Design</a></li>
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('about')}}>Marketing</a></li>
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('contact')}}>Project Management</a></li>
            </ul>
        </nav>
    </header>
)

Header.propTypes = {
    onOpenArticle: PropTypes.func,
    timeout: PropTypes.bool
}

export default Header
