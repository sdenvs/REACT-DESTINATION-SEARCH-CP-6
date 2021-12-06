// Write your code here
import './index.css'
import {Component} from 'react'
import DestinationItem from '../DestinationItem'

class DestinationSearch extends Component {
  state = {searchText: ''}

  textChanged = event => {
    this.setState({searchText: event.target.value})
  }

  render() {
    const {searchText} = this.state
    const {destinationsList} = this.props
    const displayResult = destinationsList.filter(eachItem =>
      eachItem.name.toLowerCase().includes(searchText.toLowerCase()),
    )

    console.log(searchText)
    return (
      <div className="bgContainer">
        <h1 className="heading">Destination Search</h1>
        <input
          onChange={this.textChanged}
          className="inputEl"
          type="search"
          placeholder="Search"
          value={searchText}
        />
        <div className="cardsContainer">
          {displayResult.map(eachItem => (
            <DestinationItem key={eachItem.id} destinationsPlace={eachItem} />
          ))}
        </div>
      </div>
    )
  }
}

export default DestinationSearch
