import "./style.css";


function Playback(){
    return(
        <div className="documentation">
            <span className="heading">Playback</span><br/><br/>
            <span className="text">As per table 1, stream URL is not a mandatory field during content ingestion. If content partners decide not to provide stream URLs during content ingestion they need to provide a playback API. </span><br/>
            <span className="text">The playback API will be called every time XStream backend receives a content play request. Content Partner can send us playback URL in this API using which content will be played on Xstream apps.</span><br/><br/>
            <span className="text">Xstream players support both DRM and non-DRM-protected content.</span><br/><br/>

            <span className="text">1. For DRM-protected contents, Xstream players support Widevine (for non-ios devices) and Fairplay (for ios devices)</span><br/>
            <span className="text">2. For non-DRM contents, Xstream players support HLS play-URL (for all platforms)</span><br/><br/>
        </div>
    )
}


export default Playback;
