//variables
const tweetList = document.getElementById('tweet-list');


//Event Listeners
eventListeners();
function eventListeners(){
    //form submission
    document.querySelector('#form').addEventListener('submit', newTweet);

    //Remove tweet from the list
    tweetList.addEventListener('click', removeTweet);

}


//Functions

function newTweet(e){
    e.preventDefault();

    //Read Textarea value
    const tweet = document.getElementById('tweet').value;


    //Create the remove button
    const removeBtn = document.createElement('a');
    removeBtn.classList = 'remove-tweet';
    removeBtn.textContent = 'X';



    //Create an <li> Element
    const li = document.createElement('li');
    li.textContent = tweet;
    


    //Add the remove button to each tweet
    li.appendChild(removeBtn);


    //Add to the list
    tweetList.appendChild(li);

//Add to local storage
    addTweetLocalStorage(tweet);
}

//Remove the tweets from the DOM
function removeTweet(e){
    if(e.target.classList.contains('remove-tweet')) {
        e.target.parentElement.remove();
    }

}

//Add the tweets into the local storage
function addTweetLocalStorage(tweet) {
    let tweets = getTweetsFromStorage();

    //Add tweet into the array
    tweets.push(tweet);

    //Convert tweet array into sring
    localStorage.setItem('tweets', JSON.stringify(tweets));
}

function getTweetsFromStorage() {
    let tweets;
    const tweetsLS = localStorage.getItem('tweets');
    //Get the values, if null is returned then we create an empty array
    if(localStorage.getItem('tweets')=== null) {
        tweets = [];
    } else {
        tweets = JSON.parse(tweetsLS);
    }
    return tweets;
}