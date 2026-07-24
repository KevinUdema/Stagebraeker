function MeetTheBand({StageBreakMember, MemberName}){
    return(
        <section className="bandMember backgroundblack col-12 col-sm-6 col-lg-3 mb-4">
            <div className="m-2 m-sm-0 text-center">
                <img
                    className="img-fluid bordershadows"
                    src={StageBreakMember}
                    alt={MemberName}
                />
                <h4 className="mt-3 mb-0 text-white fw-bold">{MemberName}</h4>
            </div>
        </section>
    );
}

export default MeetTheBand;