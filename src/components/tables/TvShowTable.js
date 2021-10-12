const TVSHOWS_TABLE=[
    {id:1,
        name:"Season Number",
        apiFieldName:"seasonNumber",
        description:"Indicating the season number",
        mandatory:"YES",
    },
    {id:2,
        name:"Title",
        apiFieldName:"title",
        description:"Title of trailer. If not provided TVSHOW_NAME - SEASON NUMBER will be used",
        mandatory:"NO",
    },
    {id:3,
        name:"Season Id",
        apiFieldName:"seasonId",
        description:"Unique identifier to identify different seasons",
        mandatory:"YES",
    },
]

export default TVSHOWS_TABLE;