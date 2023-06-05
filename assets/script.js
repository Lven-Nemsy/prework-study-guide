var topics = ['HTML', 'CSS', 'Git', 'JavaScript'];
var RandomTopic = topics[Math.floor(Math.random() * topics.length)];
function listTopics() {
    for (var x = 0; x < topics.length; x++) {
      console.log(topics[x]);
    }
  }

function selectTopics(){
    if (RandomTopic === 'HTML') {
    console.log("Let's study HTML!");
    } else if (RandomTopic === 'CSS') {
    console.log("Let's study CSS!");
    } else if (RandomTopic === 'Git') {
    console.log("Let's study Git!");
    } else if (RandomTopic === 'JavaScript') {
    console.log("Let's study JavaScript!");
    } else {
    console.log('Please try again!');
    }
}
console.log('Here are the topics we learned through Prework:')
listTopics()
console.log('Which topic should we study first?')
selectTopics()