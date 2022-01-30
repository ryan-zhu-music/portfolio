export const Header = (props) => {

    return (
        <div id="music-header">
            <div className="container" data-aos="fade-up" data-aos-duration="2000">
                <div className="row text-center">
                    <h2>
                        {props.data ? props.data.title : "Music"}
                    </h2>
                    <h4>
                        {props.data ? props.data.subtitle : "Loading..."}
                    </h4>
                    <div className="btn-container" style={{marginTop: "20px"}}>
                        <a href="https://musescore.com/ryan_zhu_music" className="btn btn-custom" target="_blank" rel="noopener noreferrer">
                            Sheet Music
                        </a>
                    </div>
                    <hr/>
                </div>
            </div>
        </div>
    ); 
};
