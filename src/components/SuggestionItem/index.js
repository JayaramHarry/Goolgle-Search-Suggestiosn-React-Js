// Write your code here
import './index.css'

const SuggestionItem = props => {
  const {suggestionsList, onChangeSearchInputSuggestion} = props
  const {suggestion} = suggestionsList

  const onClickSuggestion = () => {
    onChangeSearchInputSuggestion(suggestion)
  }
  return (
    <li className="suggestion-list">
      <p className="suggestion">{suggestion}</p>
      <div>
        <button
          className="arrow-button"
          type="button"
          onClick={onClickSuggestion}
          value={suggestion}
        >
          <img
            className="arrow-left"
            src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png"
            alt="arrow-left"
          />
        </button>
      </div>
    </li>
  )
}

export default SuggestionItem
