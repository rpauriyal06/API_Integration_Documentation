const TVSHOW_JSON={
    "totalPages" : 1,
    "nextPage" : false,
    "data" : [
      {
        "contentId": "sample_tvshow_1",
        "title": "Sample Show 1",
        "images": {
          "portrait_23": "https://mydomain.com/600x900.jpg",
          "landscape_169": "https://mydomain.com/1920x1080.jpg"
        },
        "seasons" : [
          {
            "seasonNumber" : 1,
            "title" : "Sample TVShow Season 1",
            "seasonId" : "sample_tvshow_1_season_1"
          },
          {
            "seasonNumber" : 2,
            "title" : "Sample TVShow Season 2",
            "seasonId" : "sample_tvshow_1_season_2"
          }
        ],
        "trailers" : [
          {
            "title" : "Trailer 1 for Sample TVShow 1",
            "duration" : 30,
            "trailerUrl" : [
              {
                "url" : "https://mydomain.com/sample_tvshow_1/trailer/master.m3u8",
                "type" : "HLS"
              },
              {
                "url" : "https://mydomain.com/sample_tvshow_1/trailer/master.mpd",
                "type" : "DASH"
              }
            ],
            "images": {
              "portrait_23": "https://mydomain.com/600x900.jpg",
              "landscape_169": "https://mydomain.com/1920x1080.jpg"
            }
          }
        ],
        "description": "This is synopsis/plot of sample show 1",
        "short_description": "Short description here",
        "isFree": true,
        "isDownloadable": true,
        "ageRating": "A",
        "language": [
          "English", "Hindi"
        ],
        "contentType": "TVSHOW",
        "releaseDate": "2021",
        "genres": [
          "Action",
          "Thriller"
        ],
        "credits" : [
          {
            "name" : "Chris Pratt",
            "role" : "Actor"
          }
        ],
        "expiryTime" : "1 Jan 2022 12:00 AM"
      }
    ]
  }

  export default TVSHOW_JSON;