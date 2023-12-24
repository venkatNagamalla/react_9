// Write your code here

import './index.css'

const SuggestionItem = props => {
  const {eachSuggestionItem, onSelectItem} = props
  const {suggestion} = eachSuggestionItem

  const onSelect = () => {
    onSelectItem(suggestion)
  }

  return (
    <li className="list-element">
      <p className="suggestion">{suggestion}</p>
      <button type="button" onClick={onSelect}>
        <img
          src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png"
          alt="arrow"
          className="arrow-img"
        />
      </button>
    </li>
  )
}

export default SuggestionItem
