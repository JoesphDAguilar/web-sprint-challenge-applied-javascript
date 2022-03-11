import axios from "axios";

const Tabs = (topics) => {
  // TASK 3
  // ---------------------
  // Implement this function which takes an array of strings ("topics") as its only argument.
  // As an example, if the topics passed are ['javascript', 'bootstrap', 'technology']
  // then the function returns the markup below.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  //
  // <div class="topics">
  //   <div class="tab">javascript</div>
  //   <div class="tab">bootstrap</div>
  //   <div class="tab">technology</div>
  // </div>
  //

  const topicsDiv = document.createElement("div");
  const tabOne = document.createElement("div");
  const tabTwo = document.createElement("div");
  const tabThree = document.createElement("div");

  topicsDiv.appendChild(tabOne);
  topicsDiv.appendChild(tabTwo);
  topicsDiv.appendChild(tabThree);

  topicsDiv.classList.add("topics");
  tabOne.classList.add("tab");
  tabTwo.classList.add("tab");
  tabThree.classList.add("tab");

  tabOne.textContent = topics[0];
  tabTwo.textContent = topics[1];
  tabThree.textContent = topics[2];

  return topicsDiv;
};

const tabsAppender = (selector) => {
  // TASK 4
  // ---------------------
  // Implement this function which takes a css selector as its only argument.
  // It should obtain topics from this endpoint: `http://localhost:5000/api/topics` (test it with a console.log!).
  // Find the array of topics inside the response, and create the tabs using the Tabs component.
  // Append the tabs to the element in the DOM that matches the selector passed to the function.
  //
  const tab = document.querySelector(selector);
  axios.get(`http://localhost:5000/api/topics`)
  .then(res => {
    console.log(res.data.topics)
    res.data.topics.forEach(topic => {
      const topicTab = Tabs(topic.length);
      tab.appendChild(topicTab);
    })
  })
  .catch(err => console.error(err))
}
export { Tabs, tabsAppender };

