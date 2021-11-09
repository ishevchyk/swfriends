import React, {Component} from "react";
import CardList from "../components/CardList";
import SearchBox from "../components/SearchBox";
import "./App.css"
import Scroll from "../components/Scroll"

// smart components
class App extends Component {
    constructor() {
        super()
        this.state = {
            friends: [],
            searchfield: ''
    }

}

componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(response=> response.json())
        .then(users => this.setState({friends: users}));
}

    onSearchChange = (event) => {
        this.setState({ searchfield: event.target.value })
    }
// pure functions
    render() {
        const{friends, searchfield} = this.state;
        const filteredFriends = friends.filter(friend =>{
            return friend.name.toLowerCase().includes(searchfield.toLowerCase());
        })
        return (!friends.length) ?
        <h1>Loading</h1>:
        (
         <div className='tc'>
            <h1 className='f1'>Slimware Friends</h1>
            <SearchBox searchChange={this.onSearchChange}/>
            <Scroll>
                <CardList friends={filteredFriends} />
            </Scroll>
        </div>
        );
    }
}

export default App;