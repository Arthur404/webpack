import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import {BrowserRouter, Route, Link} from 'react-router-dom'
import createBrowserHistory from 'history/createBrowserHistory'
import './sass/main.scss'

const history = createBrowserHistory();

const Home = () => (
    <div className="container">
        <div className="slider-hero">
            <div className="slide">
                <div className="intro-hero">
                    <h2 className="welcome"><span>Welcome to</span>Home</h2>
                    <span className="intro">Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum has been the industry's standard dummy text ever.</span>
                    <button className="btn active-btn">Read More</button>
                </div>
            </div>
        </div>
    </div>
)

const About = () => (
    <div className="container">
        <div className="slider-hero">
            <div className="slide">
                <div className="intro-hero">
                    <h2 className="welcome"><span>Welcome to</span>About</h2>
                    <span className="intro">Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum has been the industry's standard dummy text ever.</span>
                    <button className="btn active-btn">Read More</button>
                </div>
            </div>
        </div>
    </div>
)

const Contact = () => (
    <div className="container">
        <div className="slider-hero">
            <div className="slide">
                <div className="intro-hero">
                    <h2 className="welcome"><span>Welcome to</span>Contact</h2>
                    <span className="intro">Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum has been the industry's standard dummy text ever.</span>
                    <button className="btn active-btn">Read More</button>
                </div>
            </div>
        </div>
    </div>
)



class Nav extends Component {
    render() {
        return <section className="hero">
            <BrowserRouter histoey={history}>
            <header>
                <nav className="navbar">
                    <div className="container">
                        <div className="flex-nav">
                            <h1 className="logo">
                                <a href="index.html">
                                    <img src="img/logo.png" alt="BusinessPlus">
                                        BusinessPlus
                                </a>
                            </h1>
                            <div className="tel"><a href="tel:+99788856999">+9978 8856 999</a></div>
                            <button className="navbar-toggle collapsed nav-btn" data-toggle="collapse" data-target="#navbar-collapse" aria-expanded="false">
                                <i className="fa fa-bars"></i>
                            </button>
                        </div>
                        <div className="collapse navbar-collapse nav-menu" id="navbar-collapse">
                            <ul className="nav navbar-nav">
                                <li><Link to="/">Home</Link></li>
                                <li><Link to="/about">About</Link></li>
                                <li><Link to="/contact">Contact</Link></li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </header>
            <Route path="/" component={Home}/>
            <Route path="/about" component={About}/>
            <Route path="/contact" component={Contact}/>
            </BrowserRouter>
        </section>
    }
}
