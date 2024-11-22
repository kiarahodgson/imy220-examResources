const events = [
  {
    name: "A Walk in the Park",
    date: "2021-09-19",
    description:
      "Let's go walking and feed the ducks. #ducks #walk #park #Sunday",
  },
  {
    name: "Beach Day!",
    date: "2019-12-28",
    description:
      "Let's have a fun day on the beach right before #xmas !! #beachday #summertime",
  },
  {
    name: "Pokemon Go Meetup",
    date: "2016-06-11",
    description:
      "I wanna meet up with #PokemonGo fans to #catchEmAll #pokemon #meetup",
  },
  {
    name: "Crochet Date!",
    date: "2024-07-09",
    description:
      "Let's meetup to go crochet in the park. I'll bring the wool!! #park #crochet #meetup",
  },
  {
    name: "Yoga in the Morning",
    date: "2022-07-15",
    description:
      "Join us for a refreshing morning #yoga session #wellness #morning",
  },
  {
    name: "Hackathon",
    date: "2023-03-10",
    description:
      "Compete in this year's #hackathon to win amazing prizes and meet feelow #coders #coding",
  },
  {
    name: "Summer Braai",
    date: "2021-08-05",
    description:
      "Come and enjoy a delicious braai with friends and family #braai #summertime #summer #fun",
  },
  {
    name: "Art Exhibition",
    date: "2018-05-20",
    description:
      "Explore modern art at the Joburg #art #exhibition from talented artists around the world #creativity",
  },
  {
    name: "Star Wars Under the Stars",
    date: "2023-05-04",
    description:
      "Watch your favorite #StarWars movies under the open sky! #movienight #outdoor #maythe4thbewithyou",
  },
  {
    name: "Live Concert: Rock the Night",
    date: "2023-06-25",
    description:
      "Enjoy an electrifying night of live music from your favourite #rock artists #concert #rockmusic #livemusic",
  },
  {
    name: "Farmers Market",
    date: "2024-04-01",
    description:
      "Fresh produce, homemade goods, and more at the local farmers market this week #farmersmarket #organic",
  },
  {
    name: "Comicon Anyone?",
    date: "2024-09-26",
    description:
      "Who's going to #comicon this year? Let's #meetup - I'll be Spiderman!",
  },
];

// Event Component
class Event extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h2>{this.props.name}</h2>
        <p>{this.props.date}</p>
        <p>{this.props.description}</p>
      </div>
    );
  }
}

// EventFeed Component
class EventFeed extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <>
        {this.props.feed
          .sort((a, b) => {
            return new Date(b.date) - new Date(a.date);
          })
          .map((event, index) => {
            return (
              <Event
                key={index}
                name={event.name}
                date={event.date}
                description={event.description}
              />
            );
          })}
      </>
    );
  }
}

// Search Component
class Search extends React.Component {
  constructor(props) {
    super(props);
    this.searchInput = React.createRef();
    this.search = this.search.bind(this);
  }
  search(e) {
    e.preventDefault();
    const term = this.searchInput.current.value;
    this.props.handleSearch(term);
  }
  render() {
    return (
      <form onSubmit={this.search}>
        <label htmlFor="search">Search</label>
        <input
          type="text"
          id="search"
          name="search"
          placeholder="Search something..."
          ref={this.searchInput}
        />
        <input type="submit" value="search" />
      </form>
    );
  }
}

// App Component
class App extends React.Component {
  events = [
    {
      name: "A Walk in the Park",
      date: "2021-09-19",
      description:
        "Let's go walking and feed the ducks. #ducks #walk #park #Sunday",
    },
    {
      name: "Beach Day!",
      date: "2019-12-28",
      description:
        "Let's have a fun day on the beach right before #xmas !! #beachday #summertime",
    },
    {
      name: "Pokemon Go Meetup",
      date: "2016-06-11",
      description:
        "I wanna meet up with #PokemonGo fans to #catchEmAll #pokemon #meetup",
    },
    {
      name: "Crochet Date!",
      date: "2024-07-09",
      description:
        "Let's meetup to go crochet in the park. I'll bring the wool!! #park #crochet #meetup",
    },
    {
      name: "Yoga in the Morning",
      date: "2022-07-15",
      description:
        "Join us for a refreshing morning #yoga session #wellness #morning",
    },
    {
      name: "Hackathon",
      date: "2023-03-10",
      description:
        "Compete in this year's #hackathon to win amazing prizes and meet feelow #coders #coding",
    },
    {
      name: "Summer Braai",
      date: "2021-08-05",
      description:
        "Come and enjoy a delicious braai with friends and family #braai #summertime #summer #fun",
    },
    {
      name: "Art Exhibition",
      date: "2018-05-20",
      description:
        "Explore modern art at the Joburg #art #exhibition from talented artists around the world #creativity",
    },
    {
      name: "Star Wars Under the Stars",
      date: "2023-05-04",
      description:
        "Watch your favorite #StarWars movies under the open sky! #movienight #outdoor #maythe4thbewithyou",
    },
    {
      name: "Live Concert: Rock the Night",
      date: "2023-06-25",
      description:
        "Enjoy an electrifying night of live music from your favourite #rock artists #concert #rockmusic #livemusic",
    },
    {
      name: "Farmers Market",
      date: "2024-04-01",
      description:
        "Fresh produce, homemade goods, and more at the local farmers market this week #farmersmarket #organic",
    },
    {
      name: "Comicon Anyone?",
      date: "2024-09-26",
      description:
        "Who's going to #comicon this year? Let's #meetup - I'll be Spiderman!",
    },
  ];
  constructor(props) {
    super(props);
    this.searchFeed = this.searchFeed.bind(this);
    this.state = {
      feed: events,
    };
  }
  searchFeed(searchTerm) {
    if (searchTerm === "" || searchTerm === " ") {
      this.setState((prev) => (prev.feed = events));
      return;
    }
    let filteredFeed = events;
    if (searchTerm.charAt(0) === "#") {
      filteredFeed = events.filter((event) =>
        event.description.includes(searchTerm)
      );
    } else {
      filteredFeed = events.filter((event) =>
        event.name.includes(searchTerm)
      );
    }
    this.setState((prev) => (prev.feed = filteredFeed));
  }
  render() {
    return (
      <div>
        <h1>Events!</h1>
        <h2>Search</h2>
        <Search handleSearch={this.searchFeed} />
        <h2>Feed</h2>
        <EventFeed feed={this.state.feed} />
      </div>
    );
  }
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
