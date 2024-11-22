var socket = io();

socket.on('connect', () => {
  console.log('I connected with ID:', socket.id);
  listenForVotes();

  socket.on('currentVotes', (msg) => {
    updateVotes(msg.votes);
    updateFeed(msg.feed);
  });

  socket.on('someoneVoted', (msg) => {
    updateVotes(msg.votes);
    updateFeed(msg.feed);
  });
});

socket.on('disconnect', () => {
  console.log('I disconnected');
});

// listen for votes
const listenForVotes = () => {
  const poll = document.getElementById('poll');
  poll.addEventListener('submit', (event) => {
    event.preventDefault();
    const option = poll.querySelector('input[type="radio"]:checked');
    if(option !== null) socket.emit('vote', option.value);
  });
}

// update votes
const updateVotes = (votes) => {
  let totalVotes = 0;

  const poll = document.getElementById('poll');
  const optionElements = poll.querySelectorAll('input[type="radio"]');
  const totalVotesElement = poll.querySelector('#total-votes');

  Array.from(optionElements).map((option) => {
    const optionValue = option.value;
    const optionVotes = votes.find(vote => vote.option === optionValue).votes;
    const optionVotesElement = poll.querySelector(`label[for="${optionValue}"] span`);
    optionVotesElement.textContent = optionVotes;
    totalVotes += optionVotes;
  });

  totalVotesElement.textContent = `${totalVotes}`;
}

const updateFeed = (feed) => {
  const feedElement = document.getElementById('feed');
  feedElement.innerHTML = '';
  
  feed.map((message) => {
    const messageElement = document.createElement('p');
    messageElement.textContent = message;
    feedElement.appendChild(messageElement);
  });
}