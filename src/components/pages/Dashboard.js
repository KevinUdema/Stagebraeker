import Header from "../Header";
import Banner from "../Banner";
import TextPictureRight from "../TextPictureRight";
import MeetTheBand from "../MeetTheBand" 
import TourData from "../TourData";
import Title from "../Title";
import Footer from "../Footer";

function Dashboard() {
  
  const BandPics = [
    {img: "/bannerpic1.jpg", alt: "bandMember1"},
    {img: "https://placehold.co/600x400", alt: "bandMember2"},
    {img: "https://placehold.co/600x400", alt: "bandMember3"},
    {img: "https://placehold.co/600x400", alt: "bandMember4"},
  ]
  const TourDataArray = [
    {ShowDate:"23-05", ShowVenueName:"De Klinker", ShowVenueTime:"20:30", ShowCountry:"The Netherlands", ShowCity:"Winschoten"},
    {ShowDate:"23-05", ShowVenueName:"De Klinker", ShowVenueTime:"20:30", ShowCountry:"The Netherlands", ShowCity:"Winschoten"},
    {ShowDate:"23-05", ShowVenueName:"De Klinker", ShowVenueTime:"20:30", ShowCountry:"The Netherlands", ShowCity:"Winschoten"},
    {ShowDate:"23-05", ShowVenueName:"De Klinker", ShowVenueTime:"20:30", ShowCountry:"The Netherlands", ShowCity:"Winschoten"},
    {ShowDate:"23-05", ShowVenueName:"De Klinker", ShowVenueTime:"20:30", ShowCountry:"The Netherlands", ShowCity:"Winschoten"},
    {ShowDate:"23-05", ShowVenueName:"De Klinker", ShowVenueTime:"20:30", ShowCountry:"The Netherlands", ShowCity:"Winschoten"},
    {ShowDate:"23-05", ShowVenueName:"De Klinker", ShowVenueTime:"20:30", ShowCountry:"The Netherlands", ShowCity:"Winschoten"},
    {ShowDate:"23-05", ShowVenueName:"De Klinker", ShowVenueTime:"20:30", ShowCountry:"The Netherlands", ShowCity:"Winschoten"},
  ]

  return (
    <div className="backgroundblack">
      <Header ></Header>
      <Banner 
        heading={"Dashboardpage"} 
        fillerText={"This is text that's going somewhere"} 
        bannerImgLink={"/bannerpic1.jpg"}/>
      <TextPictureRight 
        pictureRightImg={"/bannerpic1.jpg"} 
        textTitle={"Big cool title"} 
        mainText={"Lorem Ipsum is the single greatest threat. We are not - we are not keeping up with other websites. Lorem Ipsum best not make any more threats to your website. It will be met with fire and fury like the world has never seen. Does everybody know that pig named Lorem Ipsum? An ‘extremely credible source’ has called my office and told me that Barack Obama’s placeholder text is a fraud."}
      />
      <div className="container">
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
        <Title titleText="Icarus tour" />
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

export default Dashboard;
