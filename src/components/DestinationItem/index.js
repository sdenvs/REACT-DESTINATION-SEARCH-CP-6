// Write your code here
import './index.css'

const DestinationItem = prop => {
  const {destinationsPlace} = prop
  const {name, imgUrl} = destinationsPlace

  console.log(prop)
  return (
    <div className="card">
      <img className="image" alt={name} src={imgUrl} />
      <p>{name}</p>
    </div>
  )
}

export default DestinationItem
