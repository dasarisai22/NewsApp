// let var=URL('654ad8a5454c460988b1f39379733e47')
// console.log(var);
let search_btn = document.getElementById("search_btn")
search_btn.addEventListener("click",()=>{
    let news_term = document.getElementById("news_term").value
    let fetchNews = async()=>{
        let data = await fetch(`https://newsapi.org/v2/everything?q=${news_term}&apikey=654ad8a5454c460988b1f39379733e47`)
        let finaldata = await data.json()
        let finalNews= finaldata.articles
        let news_container = document.getElementById("news_container")
        news_container.innerHTML=""
        finalNews.forEach((article)=>{
            news_container.innerHTML += `
            <article class=card_container>
            <img src=${article.urlToImage} id=image alt=image>
            <h3 id=title>${article.title}</h3>
            <p id=description>${article.description}</p>
            <p id=date>${article.publishedAt}</p>
            <a href=${article.url} id=link target=_blank><button id=read_btn>Read Ful Article</button></a>
           </article> `
        })
    }
    fetchNews()
})