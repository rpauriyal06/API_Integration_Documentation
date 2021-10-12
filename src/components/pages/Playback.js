import "./style.css";
import playback from "../../assets/playback.png";
import playbackFlow from "../../assets/playbackFlow.png";
import ReactJson from 'react-json-view'
import WITHOUT_DRM from "../const/withoutDrm";
import WITH_DRM from "../const/playbackDrm";



function Playback(){
    return(
        <div className="documentation">
            <span className="heading">Playback</span><br/><br/>
            <span className="text">As per table 1, stream URL is not a mandatory field during content ingestion. If content partners decide not to provide stream URLs during content ingestion they need to provide a playback API. </span><br/>
            <span className="text">The playback API will be called every time XStream backend receives a content play request. Content Partner can send us playback URL in this API using which content will be played on Xstream apps.</span><br/><br/>
            <span className="text">Xstream players support both DRM and non-DRM-protected content.</span><br/><br/>

            <span className="text">1. For DRM-protected contents, Xstream players support Widevine (for non-ios devices) and Fairplay (for ios devices)</span><br/>
            <span className="text">2. For non-DRM contents, Xstream players support HLS play-URL (for all platforms)</span><br/><br/>

            <img src={playback} alt="playback"/><br/> <br/>
            <span className="text">For non-DRM-protected content, all Xstream platforms can support HLS; we suggest that content partners use HLS play-URLs for the content.</span><br/>
            <span className="text">Also, for non-DRM content, we only need play-URLs. If the play-URLs are static, content partners can send the URL in the ingestion API itself, and then there is no requirement of playback API.</span><br/><br/>
            <span className="text">For DRM contents, we also need license and certificate information in the playback API. Check the sample responses for reference.</span><br/><br/>
            <span className="text">For User subscription and registration at the content-partner end, the content-partner can also provide the APIs for the same.</span><br/><br/>

            <span className="subHeading">Sample Response of Playback without DRM</span><br/><br/>
<ReactJson src={WITHOUT_DRM} theme="monokai" /><br/><br/>

<span className="subHeading">Sample Response of Playback with DRM</span><br/><br/>
<ReactJson src={WITH_DRM} theme="monokai" /><br/><br/>

<span className="text">Below is the flow diagram of both cases when stream url is provided during ingestion and when not provided how playback API is used :</span><br/><br/>
<img src={playbackFlow} alt="#"/><br/>
<span className="small_text"> Flowchart for fetching playback/download data from API</span>
<br/><br/>


        </div>
    )
}


export default Playback;
