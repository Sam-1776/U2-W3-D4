const params = new URLSearchParams(window.location.search);
const newId = params.get("Id");
console.log(newId);
const client = " fV4jS8Yae1kHqWB7G2Jvy2SbOBnEpfViY5gOqsILhmEJpDIIwUKmXCGY ";
const URL = "https://api.pexels.com/v1/photos/";

window.onload = () => {
  generatePage();
};

const generatePage = () => {
  fetch(URL + newId, {
    headers: {
      Authorization: client,
    },
  })
    .then((resp) => resp.json())
    .then((data) => {
      console.log(data);
      const body = document.querySelector("body")
      body.style.backgroundColor = data.avg_color
      const container = document.querySelector(".container");
      const link = document.createElement("a");
      link.onclick = function info() {
        window.location.assign(data.photographer_url);
      };
      const h1 = document.createElement("h1");
      h1.innerText = `${data.photographer}`;
      const img = document.createElement("img");
      img.className = ("border border-secondary")
      img.src = data.src.large;
      const h4 = document.createElement("h4");
      h4.innerText = `${data.alt}`;
      const button = document.createElement("button");
      button.innerText = "Back Home";
      button.className = "btn btn-dark";
      button.onclick = function back() {
        window.location.assign("./Starting-template.html");
      };

      container.appendChild(link);
      link.appendChild(h1);
      container.appendChild(img);
      container.appendChild(h4);
      container.appendChild(button);
    })
    .catch((err) => console.log(err));
};
