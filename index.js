const URL = "https://api.pexels.com/v1/search"

window.onload = () =>{
    const firstBtn = document.querySelector(".btn-primary")
    const secondBtn = document.querySelector(".btn-secondary")
    firstBtn.onclick = takePicture
    secondBtn.onclick = takeNewPicture
    
    const form = document.querySelector("form")
    form.onsubmit = search
}


const search = (e) =>{
    e.preventDefault()
    const client =' fV4jS8Yae1kHqWB7G2Jvy2SbOBnEpfViY5gOqsILhmEJpDIIwUKmXCGY '; 
    const query = document.querySelector("#photo").value
    console.log(query);
    fetch(URL + "?query=" + query, {
        method: "GET",
        headers: {
            Authorization: client
        }
    }).then(resp => resp.json())
    .then( obj => {
        generateCard(obj);
        console.log(obj)
    });
}


const takePicture = () =>{
    const client =' fV4jS8Yae1kHqWB7G2Jvy2SbOBnEpfViY5gOqsILhmEJpDIIwUKmXCGY '; 
    const query = ' Natura ' ;
    
    fetch(URL + "?query=" + query, {
        method: "GET",
        headers: {
            Authorization: client
        }
    }).then(resp => resp.json())
    .then( obj => {
        generateCard(obj);
        console.log(obj)
    });
    
    
}
const takeNewPicture = () =>{
    const client =' fV4jS8Yae1kHqWB7G2Jvy2SbOBnEpfViY5gOqsILhmEJpDIIwUKmXCGY '; 
    const query = ' sea ' ;
    
    fetch(URL + "?query=" + query, {
        method: "GET",
        headers: {
            Authorization: client
        }
    }).then(resp => resp.json())
    .then( obj => {
        generateCard(obj);
        console.log(obj)
    });
}


const generateCard = (x) =>{
    const container = document.querySelector(".container-md");
    container.remove()
    const newContainer = document.createElement("div")
    newContainer.className = "container-md"
    const row = document.createElement("div")
    row.className = "row"
    x.photos.forEach(element => {
        const col = document.createElement("div")
        col.className = "col-4"
        const card = document.createElement("div")
        card.className = "card mb-4 shadow-sm"
        const linkI = document.createElement("a")
        linkI.onclick = function info() {
            window.location.assign ("./details.html?Id=" + element.id)
        }
        const img = document.createElement("img")
        img.className = "card-img-top"
        img.src = element.src.medium
        const cardBody = document.createElement("div")
        cardBody.className = "card-body"
        const linkP = document.createElement("a")
        linkP.onclick = function info() {
            window.location.assign ("./details.html?Id=" + element.id)
        }
        const h5 = document.createElement("h5")
        h5.className = "card-title"
        h5.innerText = `${element.photographer}`
        const p = document.createElement("p")
        p.className = "card-text"
        p.innerText = `${element.alt}`
        const div = document.createElement("div")
        div.className = "d-flex justify-content-between align-items-center"
        const divB = document.createElement("div")
        divB.className = "btn-group"
        const buttonV = document.createElement("button")
        buttonV.className = "btn btn-sm btn-outline-secondary"
        buttonV.innerText = "View"
        const buttonH = document.createElement("button")
        buttonH.className = "btn btn-sm btn-outline-secondary"
        buttonH.innerText = "Hide"
        buttonH.onclick = () =>{
            col.remove()
        }
        const small = document.createElement("small")
        small.className = "text-muted"
        small.innerText = `${element.id}`
        
        
        
        
        
        card.appendChild(linkI)
        linkI.appendChild(img)
        card.appendChild(cardBody)
        cardBody.appendChild(linkP)
        linkP.appendChild(h5)
        cardBody.appendChild(p)
        cardBody.appendChild(div)
        div.appendChild(divB)
        div.appendChild(small)
        divB.appendChild(buttonV)
        divB.appendChild(buttonH)
        col.appendChild(card)
        row.appendChild(col)
    });
    
    const album = document.querySelector(".album")
    newContainer.appendChild(row);
    album.appendChild(newContainer)
    
}