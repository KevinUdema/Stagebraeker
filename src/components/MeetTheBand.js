function MeetTheBand({StageBreakMember, MemberName}){
    return(

        <section className="bandMember backgroundblack col-sm-3" >
 
                <div className="">
                <img
                    className="img-fluid"
                    src={StageBreakMember}
                    alt={MemberName} 
                />
                </div>
        </section>
    );
}

export default MeetTheBand;