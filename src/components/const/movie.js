const MOVIE={
    "totalPages" : 2,
    "nextPage" : true,
    "data" : [
      {
        "contentId": "sample_movie_1",
        "title": "Sample Movie 1",
        "images": {
          "portrait_23": "https://mydomain.com/600x900.jpg",
          "landscape_169": "https://mydomain.com/1920x1080.jpg"
        },
        "streamUrl": [
          {
            "url" : "https://mydomain.com/sample_movie_1/master.m3u8",
            "type" : "HLS"
          },
          {
            "url" : "https://mydomain.com/sample_movie_1/master.mpd",
            "type" : "DASH"
          }
        ],
        "description": "This is synopsis/plot of sample movie 1",
        "short_description": "Short description here",
        "isFree": true,
        "isDownloadable": true,
        "ageRating": "A",
        "language": [
          "English", "Hindi"
        ],
        "contentType": "MOVIE",
        "releaseDate": "2021",
        "genres": [
          "Action",
          "Thriller"
        ],
        "credits" : [
          {
            "name" : "Chris Pratt",
            "role" : "Actor"
          },
          {
            "name" : "Scarlett Johansson",
            "role" : "Actor"
          },
          {
            "name" : "Anthony",
            "role" : "Director"
          },
          {
            "name" : "David",
            "role" : "Producer"
          }
        ],
        "duration" : 600,
        "expiryTime" : "1 Jan 2022 12:00 AM"
      },
      {
        "contentId": "sample_movie_2",
        "title": "Sample Movie 2 with Trailers",
        "images": {
          "portrait_23": "https://mydomain.com/600x900.jpg",
          "landscape_169": "https://mydomain.com/1920x1080.jpg"
        },
        "streamUrl": [],
        "description": "This is synopsis/plot of sample movie 2",
        "short_description": "Short description here",
        "isFree": true,
        "isDownloadable": true,
        "ageRating": "U",
        "language": [
          "English", "Hindi"
        ],
        "trailers" : [
          {
            "title" : "Trailer 1 for Sample Movie 2",
            "duration" : 30,
            "trailerUrl" : [
              {
                "url" : "https://mydomain.com/sample_movie_2/trailer/master.m3u8",
                "type" : "HLS"
              },
              {
                "url" : "https://mydomain.com/sample_movie_2/trailer/master.mpd",
                "type" : "DASH"
              }
            ],
            "images": {
              "portrait_23": "https://mydomain.com/600x900.jpg",
              "landscape_169": "https://mydomain.com/1920x1080.jpg"
            }
          }
        ],
        "contentType": "MOVIE",
        "releaseDate": "1 Jan 2021",
        "genres": [
          "Action",
          "Thriller"
        ],
        "credits" : [
          {
            "name" : "Chris Pratt",
            "role" : "Actor"
          },
          {
            "name" : "Scarlett Johansson",
            "role" : "Actor"
          },
          {
            "name" : "Anthony",
            "role" : "Director"
          },
          {
            "name" : "David",
            "role" : "Producer"
          }
        ],
        "duration" : 600,
        "expiryTime" : "1 Jan 2022 12:00 AM"
      },
      {
        "contentId": "sample_video_1",
        "title": "Sample Video 1",
        "images": {
          "portrait_23": "https://mydomain.com/600x900.jpg",
          "landscape_169": "https://mydomain.com/1920x1080.jpg"
        },
        "streamUrl": [
          {
            "url" : "https://mydomain.com/sample_video_1/master.m3u8",
            "type" : "HLS"
          },
          {
            "url" : "https://mydomain.com/sample_video_1/master.mpd",
            "type" : "DASH"
          }
        ],
        "description": "This is synopsis/plot of sample video 1",
        "short_description": "Short description here",
        "isFree": true,
        "isDownloadable": true,
        "ageRating": "A",
        "language": [
          "English", "Hindi"
        ],
        "contentType": "VIDEO",
        "releaseDate": "2021",
        "genres": [
          "Action",
          "Thriller"
        ],
        "credits" : [],
        "duration" : 60,
        "expiryTime" : "1 Jan 2022 12:00 AM"
      },
      {
        "contentId": "sample_promo_1",
        "title": "Sample Promo 1",
        "images": {
          "portrait_23": "https://mydomain.com/600x900.jpg",
          "landscape_169": "https://mydomain.com/1920x1080.jpg"
        },
        "streamUrl": [
          {
            "url" : "https://mydomain.com/promo/master.m3u8",
            "type" : "HLS"
          },
          {
            "url" : "https://mydomain.com/promo/master.mpd",
            "type" : "DASH"
          }
        ],
        "description": "Description of content partner",
        "short_description": "Short description here",
        "isFree": true,
        "isDownloadable": true,
        "ageRating": "A",
        "language": [
          "English", "Hindi"
        ],
        "contentType": "PROMO",
        "releaseDate": "2021",
        "genres": [
          "Action",
          "Thriller"
        ],
        "credits" : [],
        "duration" : 60
      }
    ]
  }

  export default MOVIE;