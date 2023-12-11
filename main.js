const form = document.querySelector('form');
const table = document.querySelector('table');
const electoralName = document.querySelector('#electoralName');
const isCoalition = document.querySelector('#isCoalition');
const numberOfVotes = document.querySelector('#numberOfVotes');
const electoralList = document.querySelector('#electoralList');
const results = document.querySelector('#results');
const next = document.querySelector('#next');
const calc = document.querySelector('#calc')

next.addEventListener('click', evt){
    evt.preventDefault();

};

calc.addEventListener('click', evt);{
    evt.preventDefault();
}

const isCoalitionValue = isCoalition.value;
const numberOfVotesValue = numberOfVotes.value;

const electorals = [];

const electoral = {
    name: electoralName.value;
    coalition: isCoalition.value;
    votes: numberOfVotes.value;
}