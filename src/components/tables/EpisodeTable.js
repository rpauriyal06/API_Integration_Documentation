const EPISODE_TABLE=[
    {id:1,
        name:"Episode Number",
        apiFieldName:"episodeNumber",
        description:"Indicating the episode number",
        mandatory:"YES",
    },
    {id:2,
        name:"Title",
        apiFieldName:"title",
        description:"Title of Episode. If not provided TVSHOW_NAME - SEASON NUMBER - EPISODE NUMBER will be used",
        mandatory:"NO",
    },
]

export default EPISODE_TABLE;