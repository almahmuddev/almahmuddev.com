import Breadcrumb from '@/components/Breadcrumb'
import Link from 'next/link'

export const metadata = {
  title: 'Service — Al Mahmud',
}

const services = [
  { icon: 'fa-pen-ruler',     title: 'Web Design',        para: 'Creating stunning, user-friendly websites that captivate visitors and deliver exceptional experiences.',  projects: '120' },
  { icon: 'fa-bezier-curve',  title: 'Ui/Ux Design',      para: 'Designing intuitive interfaces that balance aesthetics and functionality for the best user experience.',    projects: '241' },
  { icon: 'fa-lightbulb',     title: 'Web Research',       para: 'In-depth research to understand your market, audience and competition for data-driven decisions.',          projects: '240' },
  { icon: 'fa-envelope',      title: 'Marketing',          para: 'Strategic digital marketing solutions to grow your brand, increase visibility and drive results.',          projects: '331' },
  { icon: 'fa-code',          title: 'Development',        para: 'Full-stack development using React, Next.js, and Node.js to build fast, scalable web applications.',       projects: '180' },
  { icon: 'fa-wordpress',     title: 'WordPress',          para: 'Custom WordPress websites, themes and plugins built to your exact requirements and specifications.',       projects: '95'  },
]

export default function ServicePage() {
  return (
    <main>
      <Breadcrumb title="Service" page="Service" />

      <section className="service-area-two tmp-section-gap">
        <div className="container">
          <div className="row g-5">
            {services.map((s, i) => (
              <div className="col-lg-4 col-md-6 col-12" key={i}>
                <div className="service-card-v2 tmponhover tmp-scroll-trigger tmp-fade-in animation-order-1">
                  <div className="service-card-icon">
                    <i className={`fa-light ${s.icon}`}></i>
                  </div>
                  <h4 className="service-title">
                    <Link href="/service-details">{s.title}</Link>
                  </h4>
                  <p className="service-para">{s.para}</p>
                  <div className="service-footer">
                    <span>{s.projects} Projects</span>
                    <Link href="/service-details" className="tmp-arrow-icon-btn">
                      <div className="btn-inner">
                        <i className="tmp-icon fa-solid fa-arrow-up-right"></i>
                        <i className="tmp-icon-bottom fa-solid fa-arrow-up-right"></i>
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
