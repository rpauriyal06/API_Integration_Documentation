import "./style.css";
function ContentSupported(){
    return(
        <div className="documentation">
        <div className="heading" style={{display:"flex",justifyContent:"center"}}>API Integration Document</div><br/><br/>
<p className="heading">Types of content supported</p><br/><br/>
   <span className="subHeading">Movies</span><br/><br/>
   <span className="text">In this category, content partners will be able to ingest content which comes in below categories:</span><br/><br/>
   <span className="text">1.Feature Films</span><br/>
   <span className="text">2.Short Movies</span><br/>
   <span className="text">3.Documentaries</span><br/><br/>
   <span className="subHeading"> TV Shows </span><br/><br/>
   <span className="text">Airtel Xstream provides the flexibility to ingest TV Shows on the platform. A TV Show can include multiple seasons and under each season there can be multiple episodes.</span><br/><br/>
   <span className="subHeading">Videos</span><br/><br/>
   <span className="text">Airtel Xstream also allows to ingest standalone video contents. Some examples of video contents :</span><br/><br/>
   <span className="text">1.Music Videos</span><br/>
   <span className="text">2.News Clips</span><br/><br/>
   <span className="subHeading"> Promos</span><br/><br/>
   <span className="text">Each content partner can provide us with a promo video which will be displayed on the partner channel page. Whenever a user visits the partner channel page this promo video will be played automatically. This gives a brief overview of content provided by the partner and helps with user engagement.</span><br/><br/>
   <span className="subHeading">Trailers</span><br/><br/>
   <span className="text">Content partners are allowed to ingest trailer contents also. Below content types can have trailers associated with them :</span><br/><br/>

   <span className="text">1.Movies</span><br/>
   <span className="text">2.TV Shows</span><br/>
   <span className="text">3.Seasons</span><br/>
   <span className="text">4.Episodes</span><br/>

   <span className="text">Trailers are considered as free content (unless specified otherwise) and hence are playable without subscription. For paid content, once the trailer is played users will be provided with the option to subscribe in order to continue watching the actual content.</span>
   <br/><br/>

      </div>
    )
}

export default ContentSupported;