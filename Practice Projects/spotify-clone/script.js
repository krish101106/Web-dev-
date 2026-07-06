async function getSongs(){
    let a= await fetch("http://127.0.0.1:3000/Practice%20Projects/spotify-clone/songs/")
    let responce= await a.text();
    // console.log(responce)

    let div=document.createElement("div")
    div.innerHTML=responce
    let as=div.getElementsByTagName("a")
    let songs=[]
    for (let index = 0; index < as.length; index++) {
        const element = as[index];
        if(as[index].href.endsWith(".mp3")){
            //songs.push(as[index].href.split("/songs/")[1])
            songs.push(decodeURIComponent(as[index].href.split("/songs/")[1]))
        }
    }

    return songs
} 

async function main(){

    let songs= await getSongs()
    let songUL= document.querySelector(".playlist")//.getElementsByTagName("div")[0]
    for (const song of songs) {
        songUL.innerHTML=songUL.innerHTML+`
        <div class="list border">
                    <img src="play-circle-stroke-rounded.svg" alt="">
                    <div class="song-name">${song.replaceAll("%20", " ")}</div>
                    
                </div>
        `
    }

    // var audio = new Audio("songs/" + encodeURIComponent(songs[0]));
    // audio.play();   

}

main()