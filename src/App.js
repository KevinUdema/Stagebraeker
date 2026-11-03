import Header from "./components/Header";
import Banner from "./components/Banner";
import TextPictureRight from "./components/TextPictureRight";
import MeetTheBand from "./components/MeetTheBand" 
import TourData from "./components/TourData";
import Title from "./components/Title";
import Footer from "./components/Footer";

function App() {
  
  const BandPics = [
    {img: "pictures/people/Jorn.jpg", alt: "Jorn"},
    {img: "pictures/people/Shanna.jpg", alt: "Shanna"},
    {img: "pictures/people/Nicky.jpg", alt: "Nicky"},
    {img: "pictures/people/Kevin.jpg", alt: "Kevin"},

  ]
  const TourDataArray = [
    {ShowDate:"23-05", ShowVenueName:"De Klinker", ShowVenueTime:"20:30", ShowCountry:"The Netherlands", ShowCity:"Winschoten"},
    {ShowDate:"23-05", ShowVenueName:"De Klinker", ShowVenueTime:"20:30", ShowCountry:"The Netherlands", ShowCity:"Winschoten"},
    {ShowDate:"23-05", ShowVenueName:"De Klinker", ShowVenueTime:"20:30", ShowCountry:"The Netherlands", ShowCity:"Winschoten"},
    {ShowDate:"23-05", ShowVenueName:"De Klinker", ShowVenueTime:"20:30", ShowCountry:"The Netherlands", ShowCity:"Winschoten"},
    {ShowDate:"23-05", ShowVenueName:"De Klinker", ShowVenueTime:"20:30", ShowCountry:"The Netherlands", ShowCity:"Winschoten"},
    // {ShowDate:"23-05", ShowVenueName:"De Klinker", ShowVenueTime:"20:30", ShowCountry:"The Netherlands", ShowCity:"Winschoten"},
    // {ShowDate:"23-05", ShowVenueName:"De Klinker", ShowVenueTime:"20:30", ShowCountry:"The Netherlands", ShowCity:"Winschoten"},
    // {ShowDate:"23-05", ShowVenueName:"De Klinker", ShowVenueTime:"20:30", ShowCountry:"The Netherlands", ShowCity:"Winschoten"},
  ]

  return (
    <div className="backgroundblack">
      <Header ></Header>
      <Banner 
        heading={"Stagebraeker"} 
        fillerText={"A local metal force from Winschoten, Stagebraeker brings thunder, grit, and hometown heat to every stage they touch."} 
        bannerImgLink={"/bannerpic1.jpg"}/>
      <TextPictureRight 
        pictureRightImg={"pictures/fullband.jpg"} 
        textTitle={"Heavy riffs, local roots"} 
        mainText={"Born in Winschoten and forged in the fire of late-night rehearsals, Stagebraeker is the kind of band that turns a small town into a full-blown storm. Their sound hits hard, swings wild, and carries the raw spirit of a community that knows how to raise the volume."}
      />
      <div className="container">
        <div className="text-center blockpadding">
          <h2 className="titlestyle d-inline-block px-4">Meet the Band</h2>
        </div>
        <div className="row Meettheband">
          {
            BandPics.map((bandMemb,i) => (
              <MeetTheBand 
                  key={i}
                  StageBreakMember={bandMemb.img}
                  MemberName={bandMemb.alt}
              />)
            )
          }
        </div>
        <Title titleText="The Icarus Tour" />
        <div className="touringData">
          {TourDataArray.map((tourDataInfo,i) =>
            <TourData 
              key={i}
              ShowDate={tourDataInfo.ShowDate}
              ShowVenueName={tourDataInfo.ShowVenueName}
              ShowVenueTime={tourDataInfo.ShowVenueTime}
              ShowCountry={tourDataInfo.ShowCountry}
              ShowCity={tourDataInfo.ShowCity}
            />
          )}          
        </div>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
