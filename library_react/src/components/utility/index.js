export const getListOfSongs = (start) => {

    let path = process.env.REACT_APP_SITE_URL ? process.env.REACT_APP_SITE_URL + "/graphql" : '';
    return new Promise((resolve, reject) => {
        var fetch = require('graphql-fetch')(path)

        var query = `
        query{
            getList(name:"library",prev:`+ start + `){  
                result
            }}
        `
        var queryVars = {
            id: 'abcdef'
        }
        var opts = {
            // custom fetch options
        }

        fetch(query, queryVars, opts).then(function (results) {
            let data = results.data.getList.result;
            resolve(data)
        })
    });
}


export const getListOfPlaylist = (start) => {


    let path = process.env.REACT_APP_SITE_URL ? process.env.REACT_APP_SITE_URL + "/graphql" : '';
    return new Promise((resolve, reject) => {
        var fetch = require('graphql-fetch')(path)

        var query = `
        query{
            getList(name:"playlist"){  
                result
            }}
        `

        fetch(query).then(function (results) {
            let data = results.data.getList.result;
            resolve(data)
        })
    });
}


export const addToPlayList = (playlistid, songid) => {


    let path = process.env.REACT_APP_SITE_URL ? process.env.REACT_APP_SITE_URL + "/graphql" : '';
    return new Promise((resolve, reject) => {
        var fetch = require('graphql-fetch')(path)

        var query = `
        mutation {
            updatePlayList(input: {
             
              songs:"[`+ songid + `]",
              id:`+ playlistid + `
            }) {
              id
            }
          }
        `

        fetch(query).then(function (results) {
            let data = results.data.updatePlayList.result;
            resolve(data)
        })
    });
}


export const getListSongByQuery = (search) => {
    console.log(search)
    let path = process.env.REACT_APP_SITE_URL ? process.env.REACT_APP_SITE_URL + "/graphql" : '';
    return new Promise((resolve, reject) => {
        var fetch = require('graphql-fetch')(path)

        var query = `
                query{
                    getList(name:"library",search:"`+ search + `"){  
                        result
                    }}
                `
        var queryVars = {
            id: 'abcdef'
        }
        var opts = {
            // custom fetch options
        }

        fetch(query, queryVars, opts).then(function (results) {
            let data = results.data.getList.result;
            resolve(data)
        })
    });
}


export const createPlaylistItem = (name) => {
    
    let path = process.env.REACT_APP_SITE_URL ? process.env.REACT_APP_SITE_URL + "/graphql" : '';
    return new Promise((resolve, reject) => {
if(name !== false){

        var fetch = require('graphql-fetch')(path)
        var query = `
        mutation {
            addPlayList(input: {
              name: "`+ name + `",
              songs:"[]"
            }) {
              id
            }
          }
        `

        fetch(query).then(function (results) {
            let data = results.data.addPlayList.result;
            resolve("success")
        })
    }else{
        resolve("error")
    }
    });
}
