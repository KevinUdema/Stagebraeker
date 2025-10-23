function TextPictureRight({pictureRightImg, textTitle, mainText}) {
  return (
    <section className="textWithPictureRight backgroundblack">
      <div className="container">
        <div
          data-inviewport="scale-in"
          className="d-flex align-items-center fullview example-style"
        >
          <div className="col-sm-6 text-white">
          <h1 className="display-1">{textTitle}</h1>
            <h1 className="p-2">Maybe small title before text</h1>
            <p className="p-2">
              {mainText}
            </p>
          </div>
          <div className="col-sm-5 offset-1 text-white">
            <img
              className="img-fluid bordershadows"
              src={pictureRightImg}
              alt="Stagebreaker" 
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default TextPictureRight;
