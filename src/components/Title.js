function Title({titleText}){
    return(
        <div className="text-center blockpadding">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-12 col-sm-8 col-md-6">
                        <h1 className="titlestyle">{titleText}</h1>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Title;