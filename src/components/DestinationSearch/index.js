// Write your code here
import './index.css'
import {Component} from 'react'
import DestinationItem from '../DestinationItem'

class DestinationSearch extends Component {
  render() {
    const {destinationsList} = this.props
    console.log(destinationsList)
    return (
      <div className="bgContainer">
        <h1 className="heading">Destination Search</h1>
        <input className="inputEl" type="search" placeholder="Search" />
        <div className="cardsContainer">
          {destinationsList.map(eachItem => (
            <DestinationItem key={eachItem.id} destinationsPlace={eachItem} />
          ))}
        </div>
      </div>
    )
  }
}

export default DestinationSearch
