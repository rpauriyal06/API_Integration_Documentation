
const WITH_DRM={
    "playUrls" : [
      {
        "url" : "https://mydomain.com/sample_movie_1/master.m3u8",
        "type" : "HLS",
        "drmType" : "fairplay",
        "licenseUrl" : "https://drmservers.com/license/samplemovie1"
      },
      {
        "url" : "https://mydomain.com/sample_movie_1/master.mpd",
        "type" : "DASH",
        "drmType" : "widevine",
        "licenseUrl" : "https://drmservers.com/license/samplemovie1"
      }
    ],
    "subtitles" : [
      {
        "language" : "English",
        "url" : "https://mydomain.com/subtitle/movie1"
      }
    ]
  }

  export default WITH_DRM;