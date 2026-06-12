import Breadcrumb from '@/components/Breadcrumb'
import Link from 'next/link'

export const metadata = {
  title: 'Blog — Al Mahmud',
}

const blogs = [
  { img: 'blog-img-7.jpg',  date: '12 Feb', title: 'Inspiring the World, One Project at a Time for the man' },
  { img: 'blog-img-8.jpg',  date: '15 Feb', title: "Let's bring your ideas to life! Contact me, and let's" },
  { img: 'blog-img-9.jpg',  date: '18 Feb', title: 'Each one showcases my approach and dedication man' },
  { img: 'blog-img-7.jpg',  date: '20 Feb', title: 'A personal portfolio is a curated collection of work' },
  { img: 'blog-img-8.jpg',  date: '22 Feb', title: 'Business consulting consultants provide expert advice' },
  { img: 'blog-img-9.jpg',  date: '25 Feb', title: 'Transforming ideas into reality one project at a time' },
]

export default function BlogPage() {
  return (
    <main>
      <Breadcrumb title="Blog" page="Blog" />

      <section className="blog-and-news-are tmp-section-gap">
        <div className="container">
          <div className="row">
            {blogs.map((blog, i) => (
              <div className="col-lg-4 col-md-6 col-12" key={i}>
                <div className={`blog-card-style-two tmponhover tmp-scroll-trigger tmp-fade-in animation-order-${(i % 3) + 1}`}>
                  <div className="blog-card-img">
                    <div className="img-box">
                      <Link href="/blog-details">
                        <img className="img-primary hidden-on-mobile" src={`/assets/images/blog/${blog.img}`} alt="Blog Thumbnail" />
                        <img className="img-secondary" src={`/assets/images/blog/${blog.img}`} alt="Blog Thumbnail" />
                      </Link>
                    </div>
                    <span>{blog.date}</span>
                  </div>
                  <div className="blog-content-wrap">
                    <div className="blog-tags">
                      <ul>
                        <li><a href="#"><i className="fa-regular fa-user"></i>Al Mahmud</a></li>
                        <li><a href="#"><i className="fa-regular fa-comments"></i>Comments (05)</a></li>
                      </ul>
                    </div>
                    <h3 className="blog-title">
                      <Link href="/blog-details">{blog.title}</Link>
                    </h3>
                    <div className="read-more-btn">
                      <Link className="tmp-btn hover-icon-reverse radius-round btn-border btn-md" href="/blog-details">
                        <span className="icon-reverse-wrapper">
                          <span className="btn-text">Read More</span>
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
