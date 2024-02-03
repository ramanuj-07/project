const API_KEY = "879afa130506416bb14493603034ba5c";
const url = "https://newsapi.org/v2/everything?q=";

window.addEventListener("load", () => fetchNews("India"));

function reload() {
    window.location.reload();
}
async function fetchNews(query) {
    const res = await fetch(`${url}${query}&apiKey=${API_KEY}`);
    const data = await res.json();
    console.log(data);
    bindData(data.articles);
}
function bindData(articles) {
    const cardsContainer = document.getElementById("cards-container");
    const newsCardTemplate = document.getElementById("template-news-card");

    cardsContainer.innerHTML ='';

    articles.forEach((article) => {
        if (!article.urlToImage) return;
        const cardClone = newsCardTemplate.content.cloneNode(true);
        fillDataInCard(cardClone, article);
        cardsContainer.appendChild(cardClone);
    });    
}
function fillDataInCard(cardClone, article) {
    const newsImg = cardClone.querySelector('#news-image');
    const newsTitle = cardClone.querySelector('#news-title');
    const newsSource = cardClone.querySelector('#news-source');
    const newsDesc = cardClone.querySelector('#news-description');

    newsImg.src = article.urlToImage;
    newsTitle.innerHTML = article.title;
    newsDesc.innerHTML = article.description;

    const date = new Date(article.publishedAt).toLocaleString("en-US",{
        timeZone: "Asia/Jakarta"
    });
    newsSource.innerHTML = `${article.source.name} . ${date}`;

    cardClone.firstElementChild.addEventListener('click', () => {
        window.open(article.url, "_blank");
    })
}
let currentSelectedNav = null;

function onNavItemClick(id) {
    fetchNews(id);
    const navItem = document.getElementById(id);
    currentSelectedNav?.classList.remove("active");
    currentSelectedNav = navItem;
    currentSelectedNav?.classList.add("active");
}

const searchButton = document.getElementById("search-button")
const searchText = document.getElementById("search-text");

searchButton.addEventListener("click",()=> {
    const query = searchText.value;
    if (!query) return;
    fetchNews(query);
    currentSelectedNav ?.classList.remove("active");
    currentSelectedNav = null;
})