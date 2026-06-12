import Breadcrumb from '@/components/Breadcrumb'

export const metadata = {
    title: 'About Me — Al Mahmud',
}

export default function AboutPage() {
    return (
        <main>
            <Breadcrumb title="About Me" page="About Me" />

            {/* Service Cards */}
            <section className="service-area tmp-section-gap">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-3 col-md-4 col-sm-6">
                            <div className="service-card-v1 tmp-scroll-trigger tmp-fade-in animation-order-1 tmp-link-animation">
                                <div className="service-card-icon"><i className="fa-light fa-pen-ruler"></i></div>
                                <h4 className="service-title"><a href="/service-details">Web Design</a></h4>
                                <p className="service-para">120 Projects</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-4 col-sm-6">
                            <div className="service-card-v1 tmp-scroll-trigger tmp-fade-in animation-order-2 tmp-link-animation">
                                <div className="service-card-icon"><i className="fa-light fa-bezier-curve"></i></div>
                                <h4 className="service-title"><a href="/service-details">Ui/Ux Design</a></h4>
                                <p className="service-para">241 Projects</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-4 col-sm-6">
                            <div className="service-card-v1 tmp-scroll-trigger tmp-fade-in animation-order-3 tmp-link-animation">
                                <div className="service-card-icon"><i className="fa-light fa-lightbulb"></i></div>
                                <h4 className="service-title"><a href="/service-details">Web Research</a></h4>
                                <p className="service-para">240 Projects</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-4 col-sm-6">
                            <div className="service-card-v1 tmp-scroll-trigger tmp-fade-in animation-order-4 tmp-link-animation">
                                <div className="service-card-icon"><i className="fa-light fa-envelope"></i></div>
                                <h4 className="service-title"><a href="/service-details">Marketing</a></h4>
                                <p className="service-para">331 Projects</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Skill Progress Bars */}
            <div className="tmp-skill-area tmp-section-gapBottom">
                <div className="container">
                    <div className="row">
                        <div className="inner">
                            <div className="row">

                                <div className="col-lg-6">
                                    <div className="progress-wrapper">
                                        <div className="content">
                                            <h2 className="custom-title mb--30 tmp-scroll-trigger tmp-fade-in animation-order-1">
                                                Design Skill <span><img src="/assets/images/custom-line/custom-line.png" alt="custom-line" /></span>
                                            </h2>
                                            {[
                                                { name: 'PHOTOSHOP', width: '100%', val: '100%' },
                                                { name: 'FIGMA', width: '95%', val: '95%' },
                                                { name: 'ADOBE XD', width: '60%', val: '60%' },
                                                { name: 'ADOBE ILLUSTRATOR', width: '70%', val: '70%' },
                                            ].map((skill, i) => (
                                                <div className="progress-charts" key={i}>
                                                    <h6 className="heading heading-h6">{skill.name}</h6>
                                                    <div className="progress">
                                                        <div className="progress-bar wow fadeInLeft" role="progressbar" style={{ width: skill.width }} aria-valuenow={parseInt(skill.width)} aria-valuemin="0" aria-valuemax="100">
                                                            <span className="percent-label">{skill.val}</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>

                                <div className="col-lg-6">
                                    <div className="progress-wrapper">
                                        <div className="content">
                                            <h2 className="custom-title mb--30 tmp-scroll-trigger tmp-fade-in animation-order-1">
                                                Development Skill <span><img src="/assets/images/custom-line/custom-line.png" alt="custom-line" /></span>
                                            </h2>
                                            {[
                                                { name: 'REACT / NEXT.JS', width: '95%', val: '95%' },
                                                { name: 'JAVASCRIPT', width: '90%', val: '90%' },
                                                { name: 'WORDPRESS', width: '85%', val: '85%' },
                                                { name: 'NODE.JS', width: '70%', val: '70%' },
                                            ].map((skill, i) => (
                                                <div className="progress-charts" key={i}>
                                                    <h6 className="heading heading-h6">{skill.name}</h6>
                                                    <div className="progress">
                                                        <div className="progress-bar wow fadeInLeft" role="progressbar" style={{ width: skill.width }} aria-valuenow={parseInt(skill.width)} aria-valuemin="0" aria-valuemax="100">
                                                            <span className="percent-label">{skill.val}</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Counter Area */}
            <section className="counter-area tmp-section-gapBottom">
                <div className="container">
                    <div className="row g-5">
                        <div className="col-12 col-lg-6">
                            <div className="year-of-expariance-wrapper bg-blur-style-one tmp-scroll-trigger tmp-fade-in animation-order-1">
                                <div className="year-expariance-wrap">
                                    <h2 className="counter year-number">
                                        <span className="odometer" data-count="3">00</span>
                                    </h2>
                                    <h3 className="year-title">Years Of <br /> experience</h3>
                                </div>
                                <p className="year-para">
                                    Business consulting consultants provide expert advice and guidance to businesses to help improve their performance and efficiency.
                                </p>
                            </div>
                        </div>
                        <div className="col-12 col-lg-6">
                            <div className="counter-area-right-content">
                                <div className="row g-5">
                                    {[
                                        { count: '15', label: 'Projects Completed' },
                                        { count: '10', label: 'Happy Clients' },
                                        { count: '5', label: 'Awards Won' },
                                        { count: '2', label: 'Years Experience' },
                                    ].map((item, i) => (
                                        <div className="col-lg-6 col-sm-6 col-12" key={i}>
                                            <div className="counter-card tmponhover tmp-scroll-trigger tmp-fade-in animation-order-1">
                                                <h3 className="counter counter-title">
                                                    <span className="odometer" data-count={item.count}>00</span>k+
                                                </h3>
                                                <p className="counter-para">{item.label}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </main>
    )
}
