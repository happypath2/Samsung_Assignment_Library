const componentTypeDefs = `

type Results {
    result: String
}
type Song {
    name: String
  
  }
type PlayListResults {
    result: String
}
type Songs {
    result: String
  }
  input PlayListInput {
    name: String
    songs: String
  }
  input PlayListUpdateInput {
      id:Int
    name: String
    songs: String
  }
type Query {
    getPage(name: String): Results,
    getList(name: String,prev:Int,search:String): PlayListResults,
    getDataById(id: Int,type:String): PlayListResults,

    
}
type Playlist {
    id: ID!
    name: String
    songs: String
  }
type Mutation {
    addPlayList(input: PlayListInput): Playlist
    updatePlayList(input: PlayListUpdateInput): Playlist

   
  }

 
`
export default componentTypeDefs;
