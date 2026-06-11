import Link from 'next/link'

export default function Blog() {
    return (
        <>
            {/* Tpm Blog and news Area Start */}
            <section className="blog-and-news-are tmp-section-gap">
                <div className="container">

                    <div className="section-head mb--60">
                        <div className="section-sub-title center-title tmp-scroll-trigger tmp-fade-in animation-order-1">
                            <span className="subtitle">Latest Blog</span>
                        </div>
                        <h2 className="title split-collab tmp-scroll-trigger tmp-fade-in animation-order-2">
                            Transforming Ideas into Exceptional <br /> the man can Creations
                        </h2>
                    </div>

                    <div className="row">

                        {/* Blog Card 1 */}
                        <div className="col-lg-4 col-md-6 col-12">
                            <div className="blog-card-style-two tmponhover tmp-scroll-trigger tmp-fade-in animation-order-1">
                                <div className="blog-card-img">
                                    <div className="img-box">
                                        <Link href="/blog-details">
                                            <img className="img-primary hidden-on-mobile" src="/assets/images/blog/blog-img-7.jpg" alt="Blog Thumbnail" />
                                            <img className="img-secondary" src="/assets/images/blog/blog-img-7.jpg" alt="Blog Thumbnail" />
                                        </Link>
                                    </div>
                                    <span>12 Feb</span>
                                </div>
                                <div className="blog-content-wrap">
                                    <div className="blog-tags">
                                        <ul>
                                            <li><a href="#"><i className="fa-regular fa-user"></i>Mesbah</a></li>
                                            <li><a href="#"><i className="fa-regular fa-comments"></i>Comments (05)</a></li>
                                        </ul>
                                    </div>
                                    <h3 className="blog-title">
                                        <Link href="/blog-details">Inspiring the World, One Project at a Time for the man</Link>
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

                        {/* Blog Card 2 */}
                        <div className="col-lg-4 col-md-6 col-12">
                            <div className="blog-card-style-two tmponhover tmp-scroll-trigger tmp-fade-in animation-order-2">
                                <div className="blog-card-img">
                                    <div className="img-box">
                                        <Link href="/blog-details">
                                            <img className="img-primary hidden-on-mobile" src="/assets/images/blog/blog-img-8.jpg" alt="Blog Thumbnail" />
                                            <img className="img-secondary" src="/assets/images/blog/blog-img-8.jpg" alt="Blog Thumbnail" />
                                        </Link>
                                    </div>
                                    <span>12 Feb</span>
                                </div>
                                <div className="blog-content-wrap">
                                    <div className="blog-tags">
                                        <ul>
                                            <li><a href="#"><i className="fa-regular fa-user"></i>Mesbah</a></li>
                                            <li><a href="#"><i className="fa-regular fa-comments"></i>Comments (05)</a></li>
                                        </ul>
                                    </div>
                                    <h3 className="blog-title">
                                        <Link href="/blog-details">Let's bring your ideas to life! Contact me, and let's</Link>
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

                        {/* Blog Card 3 */}
                        <div className="col-lg-4 col-md-6 col-12">
                            <div className="blog-card-style-two tmponhover tmp-scroll-trigger tmp-fade-in animation-order-3">
                                <div className="blog-card-img">
                                    <div className="img-box">
                                        <Link href="/blog-details">
                                            <img className="img-primary hidden-on-mobile" src="/assets/images/blog/blog-img-9.jpg" alt="Blog Thumbnail" />
                                            <img className="img-secondary" src="/assets/images/blog/blog-img-9.jpg" alt="Blog Thumbnail" />
                                        </Link>
                                    </div>
                                    <span>12 Feb</span>
                                </div>
                                <div className="blog-content-wrap">
                                    <div className="blog-tags">
                                        <ul>
                                            <li><a href="#"><i className="fa-regular fa-user"></i>Mesbah</a></li>
                                            <li><a href="#"><i className="fa-regular fa-comments"></i>Comments (05)</a></li>
                                        </ul>
                                    </div>
                                    <h3 className="blog-title">
                                        <Link href="/blog-details">Each one showcases my approach and dedication man</Link>
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

                    </div>
                </div>
            </section>
            {/* Tpm Blog and news Area End */}
        </>
    )
}
