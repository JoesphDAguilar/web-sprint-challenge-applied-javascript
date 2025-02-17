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
      bootstrap: res.data.articles.bootstrap,
      javascript: res.data.articles.javascript,
      jquery: res.data.articles.jquery,
      node: res.data.articles.node,
      technology: res.data.articles.technology
    }
    
    // const node = Card(articleObj.node);
    // cards.appendChild(node);

    // const technology = Card(articleObj.technology);
    // cards.appendChild(technology);

    articleObj.bootstrap.forEach(item => {
      const bootstrap = Card(item);
      cards.appendChild(bootstrap);
    });

    articleObj.javascript.forEach(item => {
      const javascript = Card(item);
      cards.appendChild(javascript);
    })

    articleObj.jquery.forEach(item => {
      const jquery = Card(item);
      cards.appendChild(jquery);
    })

    articleObj.node.forEach(item => {
      const node = Card(item);
      cards.appendChild(node);
    })

    articleObj.technology.forEach(item => {
      const technology = Card(item);
      cards.appendChild(technology);
    })
    })

}

export { Card, cardAppender }
