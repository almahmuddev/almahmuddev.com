import Breadcrumb from '@/components/Breadcrumb'
import Link from 'next/link'

export const metadata = {
  title: 'Project Details — Al Mahmud',
}

export default function ProjectDetailsPage() {
  return (
    <main>
      <Breadcrumb title="Project Details" page="Project Details" />

      <section className="project-details-area tmp-section-gap">
        <div className="container">
          <div className="row g-5">

            {/* Main Image */}
            <div className="col-lg-12">
              <div className="project-details-thumbnail mb--40">
                <img src="/assets/images/latest-portfolio/portfoli-img-5.jpg" alt="project" />
              </div>
            </div>

            {/* Content + Sidebar */}
            <div className="col-lg-8">
              <div className="project-details-content">
                <h2 className="title tmp-scroll-trigger tmp-fade-in animation-order-1">
                  SAAS Website Design
                </h2>
                <p className="description">
                  Business consulting consultants provide expert advice and guidance to businesses to help them improve their performance, efficiency, and organizational effectiveness. They bring specialized knowledge and skills that help organizations identify challenges, develop strategies, and implement solutions.
                </p>
                <p className="description">
                  A personal portfolio is a curated collection of an individual's professional work, showcasing their skills, achievements, and experiences. It serves as a visual resume that demonstrates capabilities to potential employers and clients.
                </p>
                <div className="project-gallery mt--40">
                  <div className="row g-3">
                    <div className="col-lg-6">
                      <img src="/assets/images/latest-portfolio/portfoli-img-6.jpg" alt="project" />
                    </div>
                    <div className="col-lg-6">
                      <img src="/assets/images/latest-portfolio/portfoli-img-7.jpg" alt="project" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Sidebar Info */}
            <div className="col-lg-4">
              <div className="project-info-sidebar">
                <h4 className="sidebar-title">Project Info</h4>
                <ul className="project-info-list">
                  <li><span>Client:</span> Jackson Clark</li>
                  <li><span>Category:</span> Web Design</li>
                  <li><span>Tools:</span> Figma, Framer</li>
                  <li><span>Year:</span> 2025</li>
                  <li><span>Duration:</span> 2 Weeks</li>
                </ul>
                <div className="mt--30">
                  <Link className="tmp-btn hover-icon-reverse radius-round" href="/contact">
                    <span className="icon-reverse-wrapper">
                      <span className="btn-text">Start a Project</span>
                      <span className="btn-icon"><i className="fa-sharp fa-regular fa-arrow-right"></i></span>
                      <span className="btn-icon"><i className="fa-sharp fa-regular fa-arrow-right"></i></span>
                    </span>
                  </Link>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </main>
  )
}
