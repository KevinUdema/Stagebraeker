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
        <div className="bannerimgText text-white carousel-caption">
          
          <h1>{heading} </h1>
          <p>{fillerText}</p>
          <h1>ꜜ</h1>
          {/* TODO: Make a proper font awesome arrow and move it around with javascript - Move text up aswell */}
        </div>
      </div>
    </section>
  );
}

export default Banner;
