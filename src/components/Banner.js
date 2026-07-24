// Banner component for the website
function Banner({heading , fillerText , bannerImgLink}) {
  return (
    <section className="banner">
      <div className="bannerimg">
        <img
          src={bannerImgLink}
          className=" col-12 bannerfull"
          alt="banner Stagebreak"
        />
        <div className="bannerimgText text-white carousel-caption d-flex flex-column justify-content-center align-items-center text-center">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-12 col-md-8 col-lg-6">
                <h1>{heading}</h1>
                <p>{fillerText}</p>
                <h1 className="display-3 mb-0">ꜜ</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Banner;
