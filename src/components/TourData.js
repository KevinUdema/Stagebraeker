function TourData({ShowDate, ShowVenueName, ShowVenueTime,ShowCountry, ShowCity}){
    return(
        <section className="TourData">
                <div className="Tourshows">
                    <div className="showData col-sm-10">
                        <div className="showdate">
                            {ShowDate}
                        </div> 
                        <div className="showvenuedata">
                            {ShowVenueName} | {ShowVenueTime}
                        </div>
                        <div className="showlocation">
                            {ShowCountry} | {ShowCity}
                        </div>
                    </div>
                    <div className="ShowButtons col-sm-2">

                    </div>
                </div>
        </section>
    );
}

export default TourData;