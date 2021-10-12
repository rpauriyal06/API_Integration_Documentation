const EPISODE_JSON={
    "totalPages" : 10,
    "nextPage" : true,
    "data" : [
      {
        "contentId": "sample_tvshow_1_season_1_episode_1",
        "title": "Sample Show 1 Season 1 Episode 1",
        "images": {
          "portrait_23": "https://mydomain.com/600x900.jpg",
          "landscape_169": "https://mydomain.com/1920x1080.jpg"
        },
        "episodeNumber" : 1,
        "description": "This is synopsis/plot of episode 1",
        "short_description": "Short description here",
        "isFree": true,
        "isDownloadable": true,
        "ageRating": "A",
        "language": [
          "English", "Hindi"
        ],
        "contentType": "EPISODE",
        "releaseDate": "2021",
        "genres": [
          "Action",
          "Thriller"
        ],
        "streamUrl" : [
          {
            "url" : "https://mydomain.com/sample_tvshow_1/ep1/master.m3u8",
            "type" : "HLS"
          },
          {
            "url" : "https://mydomain.com/sample_tvshow_1/ep1/master.mpd",
            "type" : "DASH"
          }
        ],
        "credits" : [
          {
            "name" : "Chris Pratt",
            "role" : "Actor"
          }
        ],
        "expiryTime" : "1 Jan 2022 12:00 AM"
      },
      {
        "contentId": "sample_tvshow_1_season_1_episode_2",
        "title": "Sample Show 1 Season 1 Episode 2",
        "images": {
          "portrait_23": "https://mydomain.com/600x900.jpg",
          "landscape_169": "https://mydomain.com/1920x1080.jpg"
        },
        "episodeNumber" : 2,
        "description": "This is synopsis/plot of episode 2",
        "short_description": "Short description here",
        "isFree": true,
        "isDownloadable": true,
        "ageRating": "A",
        "language": [
          "English", "Hindi"
        ],
        "contentType": "EPISODE",
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
  };

  export default EPISODE_JSON;