const fetch = require("node-fetch");
let url=process.env.NODE_ENV ? process.env.NODE_ENV : "http://localhost:5000/";
const getSearchData = (type,prev) => {
    return new Promise((resolve, reject) => {
        const url = "http://localhost:5000/" + type + "?search="+prev;
    
        fetch(url)
            .then(res => res.json())
            .then((res) => { 
                  resolve(res)
             })
            .catch(console.error);
    })
}
const getFetchData = (type,prev) => {
    return new Promise((resolve) => {
        const url = "http://localhost:5000/" + type;
    
        fetch(url)
            .then(res => res.json())
            .then((res) => {  if(type === "library") {
                resolve((res.splice(prev, 4)))
            }else{
                resolve(res)
                }
             })
            .catch(console.error);
    })
}
export const getPageData = (key,prev) => {
    return new Promise(async (resolve, reject) => {
        // getting data from redis
        let playlists;

        if (key === "playlist" || key === "library") {

            playlists = await getFetchData(key,prev);
        } else {
        }

        playlists = {
            result: JSON.stringify(playlists)
        }
        resolve(playlists);
    });
}

export const getPageDataById = (id, type) => {
    return new Promise(async (resolve, reject) => {
        // getting data from redis
        let playlists;
        let vehicles2;
        let url = type + "/" + id;

        playlists = await getFetchData(url);

        playlists = {
            result: JSON.stringify(playlists)
        }
        resolve(playlists);
    });
}

export const createPlayList = (res) => {
    return new Promise(async (resolve, reject) => {
    let data = {
        name: res.name,
        songs: JSON.parse(res.songs)
    }
    const url = "http://localhost:5000/playlist/";
    const opts = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data)
    };
    fetch(url, opts)
        .then(res => res.json())
        .then((res) => {
            resolve(res)
        })
        .catch(console.error);
    });
}

export const updatePlayList = (res) => {
    return new Promise(async (resolve, reject) => {
    let data = {
        name: res.name,
        songs: JSON.parse(res.songs)
    }

    const url = "http://localhost:5000/playlist/"+res.id;
    const opts = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data)
    };
    fetch(url, opts)
        .then(res => res.json())
        .then((res) => {
            resolve(res)
        })
        .catch(console.error);
    });
}

export const getSearchDataQuery = (key,search) => {
    return new Promise(async (resolve, reject) => {
        // getting data from redis
        let playlists;

        playlists = await getSearchData(key,search);
        playlists = {
            result: JSON.stringify(playlists)
        }
        resolve(playlists);
    });
}