import Breadcrumb from '@/components/Breadcrumb'
import Link from 'next/link'

export const metadata = {
  title: 'Project — Al Mahmud',
}

const projects = [
  { img: 'portfoli-img-5.jpg',  title: 'SAAS Website Design',    tags: ['Figma', 'Framer'] },
  { img: 'portfoli-img-6.jpg',  title: 'Workout App Design',     tags: ['Adobe', 'Webflow', 'Ai'] },
  { img: 'portfoli-img-7.jpg',  title: 'e-Commerce Design',      tags: ['Figma', 'Framer', 'Wordpress'] },
  { img: 'portfoli-img-8.jpg',  title: 'Dashboard Design',       tags: ['Adobe', 'Webflow'] },
  { img: 'portfoli-img-5.jpg',  title: 'Portfolio Website',      tags: ['Next.js', 'React'] },
  { img: 'portfoli-img-6.jpg',  title: 'Landing Page Design',    tags: ['Figma', 'HTML'] },
]

export default function ProjectPage() {
  return (
    <main>
      <Breadcrumb title="Project" page="Project" />

      <section className="tmp-latest-portfolio tmp-section-gap">
        <div className="container">
          <div className="row g-5">
            {projects.map((p, i) => (
              <div className="col-lg-6 col-md-6 col-12" key={i}>
                <div className={`latest-portfolio-card-style-two tmponhover tmp-scroll-trigger tmp-fade-in animation-order-${(i % 3) + 1}`}>
                  <div className="portfoli-card-img">
                    <div className="img-box v2">
                      <Link href="/project-details">
                        <img className="img-primary hidden-on-mobile" src={`/assets/images/latest-portfolio/${p.img}`} alt="project" />
                        <img className="img-secondary" src={`/assets/images/latest-portfolio/${p.img}`} alt="project" />
                      </Link>
                    </div>
                  </div>
                  <div className="portfolio-card-content-wrap">
                    <div className="content-left">
                      <h3 className="portfolio-card-title">
                        <Link href="/project-details">{p.title}</Link>
                      </h3>
                      <div className="tag-items">
                        <ul>
                          {p.tags.map((tag, j) => (
                            <li key={j}><a href="#" className="tag-item">{tag}</a></li>
                          ))}
                        </ul>
                      </div>
                    </div>
                    <div className="tmp-button-here">
                      <Link className="tmp-btn hover-icon-reverse radius-round btn-border btn-md" href="/project-details">
                        <span className="icon-reverse-wrapper">
                          <span className="btn-text">View Design</span>
                          <span className="btn-icon"><i className="fa-sharp fa-regular fa-arrow-right"></i></span>
                          <span className="btn-icon"><i className="fa-sharp fa-regular fa-arrow-right"></i></span>
                        </span>
                      </Link>
                    </div>
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
