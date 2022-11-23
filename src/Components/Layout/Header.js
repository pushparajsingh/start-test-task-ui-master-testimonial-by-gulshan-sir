import React, {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
import Logo from '../../assets/images/logo.svg'
import HeaderShap from '../../assets/images/header-shape.svg'
import HeaderBg from '../../assets/images/header-bg.jpg'

const Header = () => {

    const [active, setActive] = useState('home')

    useEffect(()=>{
        handleNavigate('home')
    },[])

    const handleNavigate = (id) => {
        setActive(id)
        document.getElementById(id).scrollIntoView({
            behavior: 'smooth',
            block: 'nearest',
            inline: 'start'
        });
    }

    return (
        <header className="header-area">
            <div className="navgition navgition-transparent">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <nav className="navbar navbar-expand-lg">
                                <Link to='/' className="navbar-brand">
                                    <img src={Logo} alt="Logo" />
                                </Link>
                                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarOne" aria-controls="navbarOne" aria-expanded="false" aria-label="Toggle navigation">
                                    <span className="toggler-icon"></span>
                                    <span className="toggler-icon"></span>
                                    <span className="toggler-icon"></span>
                                </button>
                                <div className="collapse navbar-collapse sub-menu-bar" id="navbarOne">
                                    <ul className="navbar-nav m-auto">
                                        <li className={`nav-item ${active==='home' && 'active'}`}>
                                            <Link to='/' className="page-scroll" onClick={()=>handleNavigate('home')}>HOME</Link>
                                        </li>
                                        <li className={`nav-item ${active==='service' && 'active'}`}>
                                            <Link to='/' className="page-scroll" onClick={()=>handleNavigate('service')}>SERVICES</Link>
                                        </li>
                                        <li className={`nav-item ${active==='pricing' && 'active'}`}>
                                            <Link to='/' className="page-scroll" onClick={()=>handleNavigate('pricing')}>PRICING</Link>
                                        </li>
                                        <li className={`nav-item ${active==='testimonial' && 'active'}`}>
                                            <Link to='/' className="page-scroll" onClick={()=>handleNavigate('testimonial')}>Testimonial</Link>
                                        </li>
                                        <li className={`nav-item ${active==='contact' && 'active'}`}>
                                            <Link to='/' className="page-scroll" onClick={()=>handleNavigate('contact')}>CONTACT</Link>
                                        </li>
                                    </ul>
                                </div>
                                <div className="navbar-social d-none d-sm-flex align-items-center">
                                    <span>FOLLOW US</span>
                                    <ul>
                                        <li>
                                            <Link to='/'><i className="lni-facebook-filled"/></Link>
                                        </li>
                                        <li>
                                            <Link to='/'><i className="lni-twitter-original"/></Link>
                                        </li>
                                        <li>
                                            <Link to='/'><i className="lni-instagram-original"/></Link>
                                        </li>
                                        <li>
                                            <Link to='/'><i className="lni-linkedin-original"/></Link>
                                        </li>
                                    </ul>
                                </div>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
            <div id="home" className="header-hero bg_cover" style={{ backgroundImage: `url(${HeaderBg})` }}>
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-xl-8 col-lg-10">
                            <div className="header-content text-center">
                                <h3 className="header-title">Handcrafted Landing Page for Startups and SaaS Businesses</h3>
                                <p className="text">A simple, customizable, and, beautiful SaaS business focused landing page to make your project closer to launch!</p>
                                <ul className="header-btn rounded-buttons">
                                    <li>
                                        <Link to='/' className="main-btn rounded-three">GET IN TOUCH</Link>
                                     </li>
                                    <li>
                                        <Link to='/' className="main-btn rounded-four video-popup">WATCH THE VIDEO <i className="lni-play"></i></Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="header-shape">
                    <img src={HeaderShap} alt="shape" />
                </div>
            </div>
        </header>
    )
}

export default Header