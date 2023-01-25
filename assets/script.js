var topics = ['HTML','CSS','Git','JavaScript'];
var randomTopics = topics[Math.floor(Math.random() * topics.length)];

function listTopics(){
    for (var x = 0; x < topics.length; x++){
        console.log(topics[x]);
    }
}

function selectTopics(){
    if (randomTopics === 'HTML') {
        console.log("Let's study HTML!");
    }else if(randomTopics === 'CSS') {
        console.log("Let's study CSS!");
    }else if (randomTopics === 'Git'){
        console.log("Let's study Git!");
    }else if (randomTopics === 'JavaScript'){
        console.log("Let's study JavaScript!");
    }else {
        console.log('Please try again!');
    }
}


console.log('Here are the topics we learned through Prework:');
listTopics();
console.log('Which topic should we study first?');
selectTopics();