// intializing the news api parameters
let country = "in";
let apikey = "5857d8ce65994d9aac714bb34d97853a";
const xhr = new XMLHttpRequest();
xhr.open(
  "GET",
  `https://newsapi.org/v2/top-headlines?country=${country}&apiKey=${apikey}`,
  true
);
xhr.onload = function () {
  if (this.status === 200) {
    let json = JSON.parse(this.responseText);
    let articles = json.articles;
    for (news in articles) {
      let newsHeading = articles[news].title;
      let newsDesc = articles[news].description;
      console.log(articles[news]);
      let img = articles[news].urlToImage;
      if (articles[news].description == null) {
        newsDesc = "";
      }

      newsSection.innerHTML += `<div class="card my-3 rounded border border-5 shadow p-3 mb-5" id="newscard" >
            <img src="${img}" class="card-img-top" alt="Image not found"  height="400px">
            <div class="card-body">
              <h5 class="card-title"><span class="badge text-bg-dark fs-2 text-wrap">${newsHeading}</span></h5>
              <p class="card-text">${newsDesc}</p>
              <a href=${articles[news].url} target='_blank'>Read more here</a>
            </div>
          </div>`;
    }
  } else {
    console.log("some error occurred");
  }
};
// Grab the news container
let newsSection = document.getElementById("newsSection");
xhr.send();
