import "./style.css";
import INGESTION_FLOW from "../tables/IngestionFlowTable";
import MOVIES_TABLE from "../tables/MovieTable";
import TVSHOWS_TABLE from "../tables/TvShowTable";
import EPISODE_TABLE from "../tables/EpisodeTable";
import movie from "../../assets/movie.png";
import episode from "../../assets/episode.png";
import contentDeletion from "../../assets/contentDeletion.png";
import MOVIE_JSON from "../const/movieJson";
import EPISODE_JSON from "../const/episodeJson";
import TVSHOW_JSON from "../const/tvShowJson";
import ReactJson from 'react-json-view'
import CONTENT_DELETION from "../const/contentDeletion";


function IngestionFlow (){
    return(
        <div className="documentation">
<p className="heading">Ingestion Workflow</p><br/><br/>

<span className="text">For each content partner, ingestion is the core component to get onboarded on the Airtel Xtream platform. Through ingestion, Airtel Xstream will collect the content catalog from the partner and ingest it into our database. Below is the basic workflow of the ingestion process :</span><br/><br/>
<span className="text">To ingest contents Airtel Xstream servers will hit the APIs provided by content partners. The below mentioned fields are common for all content types:</span><br/><br/>

<table className="table"> 
  <tr>
      <th>Name</th>
      <th>API Field Name</th>
      <th>Description</th>
      <th>Mandatory</th>
  </tr>
  {
      INGESTION_FLOW.map((item,idx)=>(
        <tr key={idx}>
        <td>{item.name}</td>
        <td>{item.apiFieldName}</td>
        <td>{item.description}</td>
        <td>{item.mandatory}</td>
    </tr>
      ))
  }

</table><br/> <span className="small_text">Table 1 : Commons fields for all content types
 </span><br/><br/>
<span className="text">* Possible values of ageRating : A, U, U/A 7+, U/A 13+, U/A 16+</span><br/>
<span className="text">** Possible values of contentType : MOVIE, VIDEO, TVSHOW, EPISODE, TRAILER, PROMO, SEASON</span><br/>
<span className="text">Apart from above mentioned fields we need additional details based on content type as described below :</span><br/><br/>

<span className="subHeading">Movies/Videos</span><br/><br/>
<span className="text">In the case of movies and videos we need a paginated API from a content partner. Movies can also contain trailers with them. In that case we need trailer information with movie itself with following additional details in trailers key :</span><br/><br/>

<ReactJson src={MOVIE_JSON} theme="monokai" /><br/><br/>


<table className="table"> 
  <tr>
      <th>Name</th>
      <th>API Field Name</th>
      <th>Description</th>
      <th>Mandatory</th>
  </tr>
  {
      MOVIES_TABLE.map((item,idx)=>(
        <tr key={idx}>
        <td>{item.name}</td>
        <td>{item.apiFieldName}</td>
        <td>{item.description}</td>
        <td>{item.mandatory}</td>
    </tr>
      ))
  }
</table><br/>
 <span className="small_text">Table 2 : Additional fields for Movies</span><br/> <br/>

 <img src={movie} alt="movie"/>
 <span className="small_text">Flowchart for fetching non-TvShow content from API</span><br/> <br/>

<span className="subHeading">Promo</span><br/><br/>
<span className="text">Each content partner is allowed to have a promo video to display on the partner channel page. </span><br/>
<span className="text"> Partners can send contentType : PROMO for promo videos.</span><br/> <br/>

<span className="subHeading">TV Shows</span><br/><br/>
<span className="text">On Airtel Xtream platform we support TV Shows as per below hierarchy :</span><br/>
<span className="text">Since each tv show can contain multiple seasons and multiple episodes, we primarily need two </span><br/> 
<span className="text">APIs from content partners to ingest the TV Shows :</span><br/><br/>

<span className="subHeading">Get TV Shows List API </span><br/><br/>
<span className="text">Content partners can provide an API to fetch all the available TV Shows list. Apart from the mentioned common fields in Table 1 we need season details. Details regarding seasons can be stored in seasons key with each season containing below additional information :</span><br/><br/> 
<ReactJson src={TVSHOW_JSON} theme="monokai" /><br/><br/>


<table className="table"> 
  <tr>
      <th>Name</th>
      <th>API Field Name</th>
      <th>Description</th>
      <th>Mandatory</th>
  </tr>
  {
      TVSHOWS_TABLE.map((item,idx)=>(
        <tr key={idx}>
        <td>{item.name}</td>
        <td>{item.apiFieldName}</td>
        <td>{item.description}</td>
        <td>{item.mandatory}</td>
    </tr>
      ))
  }
</table><br/>
 <span className="small_text">Table 3 : Additional Fields for TV Shows</span><br/> <br/>


 <span className="subHeading">Get Episodes List API </span><br/><br/>
<span className="text">Once the TV Shows list is fetched, we will have TV Show and Season IDs. Using these ids we can fetch the episodes by calling the episodes API like this : <br/><br/>For episodes we need below additional information :</span><br/><br/> 

<ReactJson src={EPISODE_JSON} theme="monokai" /><br/><br/>

<table className="table"> 
  <tr>
      <th>Name</th>
      <th>API Field Name</th>
      <th>Description</th>
      <th>Mandatory</th>
  </tr>
  {
      EPISODE_TABLE.map((item,idx)=>(
        <tr key={idx}>
        <td>{item.name}</td>
        <td>{item.apiFieldName}</td>
        <td>{item.description}</td>
        <td>{item.mandatory}</td>
    </tr>
      ))
  }
</table><br/>
 <span className="small_text">Table 4 : Additional Fields for Episodes</span><br/> <br/>

 
 <img src={episode} alt="movie"/>
 <span className="small_text"> Flowchart for fetching TvShow content from API</span><br/> <br/>

 <span className="heading"> Content Deletion</span><br/><br/>
<span className="text">Sometimes content partners might need to unpublish the content from the Airtel Xtream platform and for that they can provide the content deletion API which can include the content ids which needs to be unpublished from the Airtel Xtream system. We will periodically hit this API and will unpublish contents accordingly.
</span><br/> <br/>
<ReactJson src={CONTENT_DELETION} theme="monokai" /><br/><br/>

<img src={contentDeletion} alt="movie"/>
 <span className="small_text"> Flowchart for fetching deleted content from API</span><br/> <br/>

</div>


    )
}

export default IngestionFlow;