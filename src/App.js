import React,{Component} from "react";
import './App.css';
import {CardList} from "./components/card-list/card-list"
import {SearchBox} from "./components/search-box/search-box"

class App extends Component{
  constructor(){
    super();
    this.state = {monsters:[], searchField:''}
  }
  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users').then(response=>response.json())
    .then(users=> this.setState({monsters:users}))
  }

  setSearchField=(event)=>{
    this.setState({searchField:event.target.value})
  }
  render(){
    const filteredMonsters = this.state.monsters.filter(monster=>monster.name.toLowerCase().includes(this.state.searchField.toLowerCase()))
    return (
      <div className="App">
        <h1>Monsters</h1>
        <SearchBox placeholder='search monsters' handleChange={this.setSearchField}/>
        <CardList monsters={filteredMonsters}/>
        
      </div>
    );
  }
}
export default App;
