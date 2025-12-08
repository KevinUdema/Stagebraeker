function TextPictureRight({pictureRightImg, textTitle, mainText}) {
  return (
    <section className="textWithPictureRight backgroundblack">
      <div className="container vh-100 d-flex align-items-center">
        <div className="row">
            <div className="col-sm-6 col-md-6 col-12 text-white">
              <h1 className="display-1">{textTitle}</h1>
              <h1 className="display-4">Maybe smaller title</h1>
              <p className="p-2">
                {mainText}
              </p>
            </div>
            <div className="col-sm-6 col-md-6 text-white">
              <img
                className="img-fluid bordershadows"
                src={pictureRightImg}
                alt="Stagebreaker" 
              />
            </div>
          </div>
        </div>
        <div className="clearfix"></div>
    </section>
  );
}

export default TextPictureRight;
