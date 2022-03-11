import axios from "axios";

const Card = (article) => {
  // TASK 5
  // ---------------------
  // Implement this function, which should return the markup you see below.
  // It takes as its only argument an "article" object with `headline`, `authorPhoto` and `authorName` properties.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  // Add a listener for click events so that when a user clicks on a card, the headline of the article is logged to the console.
  //
  // <div class="card">
  //   <div class="headline">{ headline }</div>
  //   <div class="author">
  //     <div class="img-container">
  //       <img src={ authorPhoto }>
  //     </div>
  //     <span>By { authorName }</span>
  //   </div>
  // </div>
  //
  const cardDiv = document.createElement('div');
  const headline = document.createElement('div');
  const author = document.createElement('div');
  const imgContainer = document.createElement('div');
  const img = document.createElement('img');
  const authorName = document.createElement('span');

  cardDiv.appendChild(headline);
  cardDiv.appendChild(author);
  author.appendChild(imgContainer);
  imgContainer.appendChild(img);
  author.appendChild(authorName);

  cardDiv.classList.add("card");
  headline.classList.add("headline");
  author.classList.add("author");
  imgContainer.classList.add("img-container");

  headline.textContent = `${article.headline}`;
  img.src = article.authorPhoto;
  authorName.textContent = `${article.authorName}`;

  cardDiv.addEventListener("click", function () {
    console.log(headline);
  })

  return cardDiv;
}

const cardAppender = (selector) => {
  // TASK 6
  // ---------------------
  // Implement this function that takes a css selector as its only argument.
  // It should obtain articles from this endpoint: `http://localhost:5000/api/articles` (test it with console.log!!).
  // However, the articles do not come organized in a single, neat array. Inspect the response closely!
  // Create a card from each and every article object in the response, using the Card component.
  // Append each card to the element in the DOM that matches the selector passed to the function.

  //
  const cards = document.querySelector(selector);

  axios.get(`http://localhost:5000/api/articles`)
  .then(res => {
    console.log(res.data.articles);
    const articleObj = {
      bootstrap: res.data.articles.bootstrap[0],
      javascript: res.data.articles.javascript[1],
      jquery: res.data.articles.jquery[2],
      node: res.data.articles.node[0],
      technology: res.data.articles.technology[0]
    }
    //console.log({articleObj:articleObj.bootstrap})
    const bootstrap = Card(articleObj.bootstrap);
    cards.appendChild(bootstrap);

    const javascript = Card(articleObj.javascript);
    cards.appendChild(javascript);
    
    const jquery = Card(articleObj.jquery);
    cards.appendChild(jquery);
    
    const node = Card(articleObj.node);
    cards.appendChild(node);

    const technology = Card(articleObj.technology);
    cards.appendChild(technology);
    })

}

export { Card, cardAppender }
