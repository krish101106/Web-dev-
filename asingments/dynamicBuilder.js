function createCard(title, cName, views, monthOld, duration, thumbnail){

    if(views>1000){
        views=`${(views/1000).toFixed(1)}k`
    }

    let card=document.createElement('div')
    card.className="card"
    card.innerHTML=`
    <div class="thumbnail"> <img src="${thumbnail}" alt="" /></div>
    <div class="names"> 
        <div class="title">${title}</div> 
        <div class="info"> 
            <div className="cName">${cName}</div>
            <div className="monthOld">${monthOld}</div>
            <div className="views">${views}</div>
        </div>
        
    </div>`

    const e=document.getElementsByClassName('page')
    e[0].append(card)
}

createCard("first", "chanel", 10999, 10, "10:30", "https://i.ytimg.com/vi/mCx5aSEK8YE/hqdefault.jpg?sqp=-oaymwEjCPYBEIoBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLDTo08aNccZBytRk9gIZ0WM28_GCg")

createCard("first", "chanel", 10999, 10, "10:30", "https://i.ytimg.com/vi/mCx5aSEK8YE/hqdefault.jpg?sqp=-oaymwEjCPYBEIoBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLDTo08aNccZBytRk9gIZ0WM28_GCg")

createCard("first", "chanel", 10999, 10, "10:30", "https://i.ytimg.com/vi/mCx5aSEK8YE/hqdefault.jpg?sqp=-oaymwEjCPYBEIoBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLDTo08aNccZBytRk9gIZ0WM28_GCg")