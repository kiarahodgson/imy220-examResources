// Name Surname u12345678

class Poll {
  /**
   * @param {Object} param0
   * @param {[Object]} param0.votes
   * votes = [
   *  { option: 'name', votes: 0 },
   * ]
   * @param {[string]} param0.feed
   * 
   */
  constructor({votes, feed}) {
    this.votes = votes;
    this.feed = feed;
  }

  /**
   * @param {string} option
   */
  vote(option) {
    const index = this.votes.findIndex((vote) => vote.option === option);
    this.votes[index].votes++;
  }

  updateFeed(message) {
    this.feed.push(message);
  }

  getVotes() {
    return this.votes;
  }

  getFeed() {
    return this.feed;
  }
}

module.exports = Poll;