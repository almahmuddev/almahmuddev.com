import Link from 'next/link'

export const metadata = {
  title: 'Page Not Found',
}

export default function NotFound() {
  return (
    <main>
      <div className="breadcrumb-area breadcrumb-bg">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="breadcrumb-inner text-center">
                <h1 className="title split-collab">404</h1>
                <p className="description" style={{ marginTop: '16px' }}>
                  Oops! The page you are looking for doesn&apos;t exist or has been moved.
                </p>
                <div className="tmp-button-here mt--30" style={{ display: 'flex', justifyContent: 'center' }}>
                  <Link className="tmp-btn hover-icon-reverse radius-round" href="/">
                    <span className="icon-reverse-wrapper">
                      <span className="btn-text">Back to Home</span>
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
    </main>
  )
}
