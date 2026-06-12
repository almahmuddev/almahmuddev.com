'use client'

import Breadcrumb from '@/components/Breadcrumb'
import { useState } from 'react'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '', phone: '', email: '', subject: '', message: '',
  })
  const [status, setStatus] = useState('idle')

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('loading')
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })
      if (res.ok) {
        setStatus('success')
        setFormData({ name: '', phone: '', email: '', subject: '', message: '' })
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  return (
    <main>
      <Breadcrumb title="Contact" page="Contact" />

      <section className="get-in-touch-area tmp-section-gap">
        <div className="container">
          <div className="get-in-touch-wrapper tmponhover">
            <div className="row g-5 align-items-center">

              {/* Left — info */}
              <div className="col-lg-5">
                <div className="contact-inner">
                  <div className="section-head section-head-one-side text-align-left tmp-scroll-trigger tmp-fade-in animation-order-1">
                    <span className="title-left">Get Ready To Create Great</span>
                  </div>
                  <ul className="ft-link v2">
                    <li className="tmp-scroll-trigger tmp-fade-in animation-order-1 tmp-link-animation">
                      <span className="ft-icon"><i className="fa-solid fa-envelope"></i></span>
                      <div className="ft-link-wrap">
                        <h4 className="link-title">E-mail:</h4>
                        <a href="#">nafiz125@gmail.com</a>
                      </div>
                    </li>
                    <li className="tmp-scroll-trigger tmp-fade-in animation-order-2">
                      <span className="ft-icon"><i className="fa-solid fa-location-dot"></i></span>
                      <div className="ft-link-wrap">
                        <h4 className="link-title">Location:</h4>
                        <div>Sylhet, Bangladesh</div>
                      </div>
                    </li>
                    <li className="tmp-scroll-trigger tmp-fade-in animation-order-3 tmp-link-animation">
                      <span className="ft-icon"><i className="fa-solid fa-phone"></i></span>
                      <div className="ft-link-wrap">
                        <h4 className="link-title">Contact:</h4>
                        <a href="#">01245789321</a>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Right — form */}
              <div className="col-lg-7">
                <div className="contact-inner">
                  <div className="section-head section-head-one-side text-align-left tmp-scroll-trigger tmp-fade-in animation-order-1">
                    <span className="title">GET IN TOUCH</span>
                  </div>
                  <div className="contact-form">
                    {status === 'success' && (
                      <div style={{ color: 'green', marginBottom: '16px' }}>
                        ✅ Message sent successfully!
                      </div>
                    )}
                    {status === 'error' && (
                      <div style={{ color: 'red', marginBottom: '16px' }}>
                        ❌ Something went wrong. Please try again.
                      </div>
                    )}
                    <form onSubmit={handleSubmit}>
                      <div className="contact-form-wrapper row">
                        <div className="col-lg-6">
                          <div className="form-group">
                            <input className="input-field" name="name" placeholder="Your Name" type="text" required value={formData.name} onChange={handleChange} />
                          </div>
                        </div>
                        <div className="col-lg-6">
                          <div className="form-group">
                            <input className="input-field" name="phone" placeholder="Phone Number" type="tel" required value={formData.phone} onChange={handleChange} />
                          </div>
                        </div>
                        <div className="col-lg-6">
                          <div className="form-group">
                            <input className="input-field" name="email" placeholder="Your Email" type="email" required value={formData.email} onChange={handleChange} />
                          </div>
                        </div>
                        <div className="col-lg-6">
                          <div className="form-group">
                            <input className="input-field" name="subject" placeholder="Subject" type="text" value={formData.subject} onChange={handleChange} />
                          </div>
                        </div>
                        <div className="col-lg-12">
                          <div className="form-group">
                            <textarea className="input-field" placeholder="Your Message" name="message" required value={formData.message} onChange={handleChange}></textarea>
                          </div>
                        </div>
                        <div className="col-lg-12">
                          <div className="tmp-button-here">
                            <button className="tmp-btn hover-icon-reverse radius-round w-100" type="submit" disabled={status === 'loading'}>
                              <span className="icon-reverse-wrapper">
                                <span className="btn-text">{status === 'loading' ? 'Sending...' : 'Appointment Now'}</span>
                                <span className="btn-icon"><i className="fa-sharp fa-regular fa-arrow-right"></i></span>
                                <span className="btn-icon"><i className="fa-sharp fa-regular fa-arrow-right"></i></span>
                              </span>
                            </button>
                          </div>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
