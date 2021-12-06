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
        <div className="inputCo">
          <input
            onChange={this.textChanged}
            type="search"
            className="inputEl"
            placeholder="Search"
            value={searchText}
          />
          <img
            className="icon-image"
            alt="search icon"
            src="https://assets.ccbp.in/frontend/react-js/destinations-search-icon-img.png"
          />
        </div>
        <ul className="cardsContainer">
          {displayResult.map(eachItem => (
            <DestinationItem key={eachItem.id} destinationsPlace={eachItem} />
          ))}
        </ul>
      </div>
    )
  }
}

export default DestinationSearch
