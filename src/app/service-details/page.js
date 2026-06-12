import Breadcrumb from '@/components/Breadcrumb'
import Link from 'next/link'

export const metadata = {
  title: 'Service Details — Al Mahmud',
}

export default function ServiceDetailsPage() {
  return (
    <main>
      <Breadcrumb title="Service Details" page="Service Details" />

      <section className="service-details-area tmp-section-gap">
        <div className="container">
          <div className="row g-5">

            {/* Main Content */}
            <div className="col-lg-8">
              <div className="service-details-content">
                <div className="thumbnail mb--40">
                  <img src="/assets/images/service/service-details-1.jpg" alt="service" />
                </div>
                <h2 className="title tmp-scroll-trigger tmp-fade-in animation-order-1">
                  Web Design & Development
                </h2>
                <p className="description tmp-scroll-trigger tmp-fade-in animation-order-2">
                  Business consulting consultants provide expert advice and guidance to businesses to help them improve their performance, efficiency, and organizational effectiveness. They bring specialized knowledge and skills that help organizations identify challenges, develop strategies, and implement solutions.
                </p>
                <p className="description tmp-scroll-trigger tmp-fade-in animation-order-3">
                  A personal portfolio is a curated collection of an individual's professional work, showcasing their skills, achievements, and experiences. It serves as a visual resume that demonstrates capabilities to potential employers, clients, or collaborators.
                </p>
                <div className="service-feature-list mt--40">
                  <h3 className="feature-title">What's Included</h3>
                  <ul>
                    {['Responsive Design', 'SEO Optimized', 'Fast Performance', 'Cross Browser Compatible', 'Clean Code', '24/7 Support'].map((item, i) => (
                      <li key={i}><i className="fa-solid fa-circle-check"></i> {item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="col-lg-4">
              <div className="service-sidebar">
                <div className="sidebar-widget">
                  <h4 className="widget-title">All Services</h4>
                  <ul className="service-list">
                    {['Web Design', 'Ui/Ux Design', 'Web Research', 'Marketing', 'Development', 'WordPress'].map((s, i) => (
                      <li key={i}>
                        <Link href="/service-details">
                          {s} <i className="fa-solid fa-arrow-right"></i>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="sidebar-widget mt--40">
                  <h4 className="widget-title">Need Help?</h4>
                  <div className="contact-widget">
                    <p>Have a project in mind? Let's talk about it.</p>
                    <Link className="tmp-btn hover-icon-reverse radius-round" href="/contact">
                      <span className="icon-reverse-wrapper">
                        <span className="btn-text">Contact Me</span>
                        <span className="btn-icon"><i className="fa-sharp fa-regular fa-arrow-right"></i></span>
                        <span className="btn-icon"><i className="fa-sharp fa-regular fa-arrow-right"></i></span>
                      </span>
                    </Link>
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
