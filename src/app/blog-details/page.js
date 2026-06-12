import Breadcrumb from '@/components/Breadcrumb'
import Link from 'next/link'

export const metadata = {
  title: 'Blog Details — Al Mahmud',
}

export default function BlogDetailsPage() {
  return (
    <main>
      <Breadcrumb title="Blog Details" page="Blog Details" />

      <section className="blog-details-area tmp-section-gap">
        <div className="container">
          <div className="row g-5">

            {/* Main Content */}
            <div className="col-lg-8">
              <div className="blog-details-content">
                <div className="blog-thumbnail mb--40">
                  <img src="/assets/images/blog/blog-img-7.jpg" alt="blog" />
                </div>
                <div className="blog-meta mb--20">
                  <ul>
                    <li><i className="fa-regular fa-user"></i> Al Mahmud</li>
                    <li><i className="fa-regular fa-calendar"></i> 12 Feb 2025</li>
                    <li><i className="fa-regular fa-comments"></i> Comments (05)</li>
                  </ul>
                </div>
                <h2 className="blog-details-title tmp-scroll-trigger tmp-fade-in animation-order-1">
                  Inspiring the World, One Project at a Time
                </h2>
                <p className="description">
                  Business consulting consultants provide expert advice and guidance to businesses to help them improve their performance, efficiency, and organizational effectiveness. They bring specialized knowledge and skills that help organizations identify challenges, develop strategies, and implement solutions.
                </p>
                <p className="description">
                  A personal portfolio is a curated collection of an individual's professional work, showcasing their skills, achievements, and experiences. It serves as a visual resume that demonstrates capabilities to potential employers, clients, or collaborators.
                </p>
                <blockquote className="blockquote-style">
                  <p>A portfolio is not just a collection of work — it's a story of growth, dedication, and passion.</p>
                </blockquote>
                <p className="description">
                  Financial planners help people knowledge about how to invest and save money in the most efficient way. Many people across the country use them to help manage and grow their financial future with confidence.
                </p>
                <div className="blog-tags-wrap mt--40">
                  <div className="tags">
                    <span>Tags:</span>
                    <a href="#">Design</a>
                    <a href="#">Development</a>
                    <a href="#">Portfolio</a>
                  </div>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="col-lg-4">
              <div className="blog-sidebar">
                <div className="sidebar-widget">
                  <h4 className="widget-title">Recent Posts</h4>
                  <ul className="recent-post-list">
                    {[
                      { img: 'blog-img-7.jpg', title: 'Inspiring the World, One Project at a Time', date: '12 Feb' },
                      { img: 'blog-img-8.jpg', title: "Let's bring your ideas to life today", date: '15 Feb' },
                      { img: 'blog-img-9.jpg', title: 'Each one showcases my approach', date: '18 Feb' },
                    ].map((post, i) => (
                      <li key={i} className="recent-post-item">
                        <div className="post-img">
                          <img src={`/assets/images/blog/${post.img}`} alt="post" />
                        </div>
                        <div className="post-info">
                          <span>{post.date}</span>
                          <h6><Link href="/blog-details">{post.title}</Link></h6>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="sidebar-widget mt--40">
                  <h4 className="widget-title">Categories</h4>
                  <ul className="category-list">
                    {['Web Design', 'Development', 'UI/UX', 'Marketing', 'WordPress'].map((cat, i) => (
                      <li key={i}><a href="#">{cat}</a></li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </main>
  )
}
