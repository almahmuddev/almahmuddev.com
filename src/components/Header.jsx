'use client'

import { useEffect } from 'react'
import Link from 'next/link'
import ThemeToggle from '@/components/ThemeToggle'

export default function Header() {

  // Sticky header
  useEffect(() => {
    const header = document.querySelector('.header--sticky')
    const handleScroll = () => {
      if (window.scrollY > 100) {
        header?.classList.add('sticky')
      } else {
        header?.classList.remove('sticky')
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Sidebar open/close
  useEffect(() => {
    const openBtns  = document.querySelectorAll('.tmp_button_active')
    const closeBtns = document.querySelectorAll('.close_side_menu_active')
    const sidebar   = document.querySelector('.tmp_side_bar')
    const overlay   = document.querySelector('.overlay_close_side_menu')

    const openSidebar  = () => sidebar?.classList.add('open')
    const closeSidebar = () => sidebar?.classList.remove('open')

    openBtns.forEach(btn  => btn.addEventListener('click', openSidebar))
    closeBtns.forEach(btn => btn.addEventListener('click', closeSidebar))
    overlay?.addEventListener('click', closeSidebar)

    return () => {
      openBtns.forEach(btn  => btn.removeEventListener('click', openSidebar))
      closeBtns.forEach(btn => btn.removeEventListener('click', closeSidebar))
      overlay?.removeEventListener('click', closeSidebar)
    }
  }, [])

  // Mobile menu open/close
  useEffect(() => {
    const openBtns   = document.querySelectorAll('.humberger_menu_active')
    const closeBtns  = document.querySelectorAll('.close-button')
    const mobileMenu = document.querySelector('.tmp-popup-mobile-menu')

    const openMenu  = () => mobileMenu?.classList.add('menu-open')
    const closeMenu = () => mobileMenu?.classList.remove('menu-open')

    openBtns.forEach(btn  => btn.addEventListener('click', openMenu))
    closeBtns.forEach(btn => btn.addEventListener('click', closeMenu))

    return () => {
      openBtns.forEach(btn  => btn.removeEventListener('click', openMenu))
      closeBtns.forEach(btn => btn.removeEventListener('click', closeMenu))
    }
  }, [])

  return (
    <>
      {/* tpm-header-area start */}
      <header className="tmp-header-area-start header-one header--sticky header--transparent">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="header-content">

                <div className="logo">
                  <Link href="/">
                    <img className="logo-dark" src="/assets/images/logo/white-logo-reeni-3.png" alt="logo" />
                    <img className="logo-white" src="/assets/images/logo/logo-white.png" alt="logo" />
                  </Link>
                </div>

                <nav className="tmp-mainmenu-nav d-none d-xl-block">
                  <ul className="tmp-mainmenu">
                    <li>
                      <Link href="/">Home</Link>
                    </li>
                    <li>
                      <Link href="/about">About</Link>
                    </li>
                    <li className="has-dropdown">
                      <a href="#">Services <i className="fa-regular fa-chevron-down"></i></a>
                      <ul className="submenu">
                        <li><Link href="/service">Service</Link></li>
                        <li><Link href="/service-details">Service Details</Link></li>
                      </ul>
                    </li>
                    <li className="has-dropdown">
                      <a href="#">Blog <i className="fa-regular fa-chevron-down"></i></a>
                      <ul className="submenu">
                        <li><Link href="/blog">Blog Classic</Link></li>
                        <li><Link href="/blog-col-4">Blog Column 3</Link></li>
                        <li><Link href="/blog-details">Blog Details</Link></li>
                      </ul>
                    </li>
                    <li className="has-dropdown">
                      <a href="#">Project <i className="fa-regular fa-chevron-down"></i></a>
                      <ul className="submenu">
                        <li><Link href="/project">Project</Link></li>
                        <li><Link href="/project-details">Project Details</Link></li>
                      </ul>
                    </li>
                    <li>
                      <Link href="/contact">Contact</Link>
                    </li>
                  </ul>
                </nav>

                <div className="tmp-header-right">
                  <div className="social-share-wrapper d-none d-md-block">
                    <div className="social-link">
                      <a href="#"><i className="fa-brands fa-instagram"></i></a>
                      <a href="#"><i className="fa-brands fa-linkedin-in"></i></a>
                      <a href="#"><i className="fa-brands fa-twitter"></i></a>
                      <a href="#"><i className="fa-brands fa-facebook-f"></i></a>
                    </div>
                  </div>
                  <div className="actions-area">
                    <ThemeToggle />
                    <div className="tmp-side-collups-area d-none d-xl-block">
                      <button className="tmp-menu-bars tmp_button_active">
                        <i className="fa-regular fa-bars-staggered"></i>
                      </button>
                    </div>
                    <div className="tmp-side-collups-area d-block d-xl-none">
                      <button className="tmp-menu-bars humberger_menu_active">
                        <i className="fa-regular fa-bars-staggered"></i>
                      </button>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </header>
      {/* tpm-header-area end */}


      {/* Desktop Sidebar */}
      <div className="d-none d-xl-block">
        <div className="tmp-sidebar-area tmp_side_bar">
          <div className="inner">
            <div className="top-area">
              <a href="/" className="logo">
                <img className="logo-dark" src="/assets/images/logo/white-logo-reeni.png" alt="logo" />
                <img className="logo-white" src="/assets/images/logo/logo-white.png" alt="logo" />
              </a>
              <div className="close-icon-area">
                <button className="tmp-round-action-btn close_side_menu_active">
                  <i className="fa-sharp fa-light fa-xmark"></i>
                </button>
              </div>
            </div>
            <div className="content-wrapper">
              <div className="image-area-feature">
                <a href="/">
                  <img src="/assets/images/logo/man.png" alt="personal-logo" />
                </a>
              </div>
              <h5 className="title mt--30">Freelancer delivering exceptional Webflow, and Next.js solutions.</h5>
              <p className="disc">I am a skilled freelancer specializing in Webflow development, Figma design, and Next.js projects. I deliver creative, dynamic, and user-centric web solutions.</p>
              <div className="short-contact-area">
                <div className="single-contact">
                  <i className="fa-solid fa-phone"></i>
                  <div className="information tmp-link-animation">
                    <span>Call Now</span>
                    <a href="#" className="number">+92 (8800) - 98670</a>
                  </div>
                </div>
                <div className="single-contact">
                  <i className="fa-solid fa-envelope"></i>
                  <div className="information tmp-link-animation">
                    <span>Mail Us</span>
                    <a href="#" className="number">example@info.com</a>
                  </div>
                </div>
                <div className="single-contact">
                  <i className="fa-solid fa-location-crosshairs"></i>
                  <div className="information tmp-link-animation">
                    <span>My Address</span>
                    <span className="number">66 Broklyant, New York 3269</span>
                  </div>
                </div>
              </div>
              <div className="social-wrapper mt--20">
                <span className="subtitle">find with me</span>
                <div className="social-link">
                  <a href="#"><i className="fa-brands fa-instagram"></i></a>
                  <a href="#"><i className="fa-brands fa-linkedin-in"></i></a>
                  <a href="#"><i className="fa-brands fa-twitter"></i></a>
                  <a href="#"><i className="fa-brands fa-facebook-f"></i></a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <a className="overlay_close_side_menu close_side_menu_active" href="javascript:void(0);"></a>
      </div>
      {/* Desktop Sidebar end */}


      {/* Mobile Menu */}
      <div className="d-block d-xl-none">
        <div className="tmp-popup-mobile-menu">
          <div className="inner">
            <div className="header-top">
              <div className="logo">
                <a href="/" className="logo-area">
                  <img className="logo-dark" src="/assets/images/logo/white-logo-reeni.png" alt="logo" />
                  <img className="logo-white" src="/assets/images/logo/logo-white.png" alt="logo" />
                </a>
              </div>
              <div className="close-menu">
                <button className="close-button tmp-round-action-btn">
                  <i className="fa-sharp fa-light fa-xmark"></i>
                </button>
              </div>
            </div>
            <ul className="tmp-mainmenu">
              <li><Link href="/">Home</Link></li>
              <li><Link href="/about">About</Link></li>
              <li className="has-dropdown">
                <a href="#">Services <i className="fa-regular fa-chevron-down"></i></a>
                <ul className="submenu">
                  <li><Link href="/service">Service</Link></li>
                  <li><Link href="/service-details">Service Details</Link></li>
                </ul>
              </li>
              <li className="has-dropdown">
                <a href="#">Blog <i className="fa-regular fa-chevron-down"></i></a>
                <ul className="submenu">
                  <li><Link href="/blog">Blog Classic</Link></li>
                  <li><Link href="/blog-col-4">Blog Column 3</Link></li>
                  <li><Link href="/blog-details">Blog Details</Link></li>
                </ul>
              </li>
              <li className="has-dropdown">
                <a href="#">Project <i className="fa-regular fa-chevron-down"></i></a>
                <ul className="submenu">
                  <li><Link href="/project">Project</Link></li>
                  <li><Link href="/project-details">Project Details</Link></li>
                </ul>
              </li>
              <li><Link href="/contact">Contact</Link></li>
            </ul>
            <div className="social-wrapper mt--40">
              <span className="subtitle">find with me</span>
              <div className="social-link">
                <a href="#"><i className="fa-brands fa-instagram"></i></a>
                <a href="#"><i className="fa-brands fa-linkedin-in"></i></a>
                <a href="#"><i className="fa-brands fa-twitter"></i></a>
                <a href="#"><i className="fa-brands fa-facebook-f"></i></a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Mobile Menu end */}
    </>
  )
}
