// Write your code here

import {Component} from 'react'

import './index.css'
import SuggestionItem from '../SuggestionItem'

class GoogleSuggestions extends Component {
  state = {searchInput: ''}

  onChangeSearchInput = event => {
    this.setState({searchInput: event.target.value})
  }

  onChangeSearchInputSuggestion = value => {
    this.setState({searchInput: value})
  }

  render() {
    const {suggestionsList} = this.props
    const {searchInput} = this.state
    const searchResults = suggestionsList.filter(eachDestination =>
      eachDestination.suggestion
        .toLowerCase()
        .includes(searchInput.toLowerCase()),
    )

    return (
      <div className="bg-container">
        <img
          className="google-image"
          src="https://assets.ccbp.in/frontend/react-js/google-logo.png "
          alt="google logo"
        />
        <div className="suggestion-container">
          <div className="search-container">
            <img
              className="search-img"
              src="https://assets.ccbp.in/frontend/react-js/google-search-icon.png"
              alt="search icon"
            />
            <input
              value={searchInput}
              className="search-input"
              type="search"
              placeholder="Search Google"
              onChange={this.onChangeSearchInput}
            />
          </div>
          <ul>
            {searchResults.map(each => (
              <SuggestionItem
                key={each.id}
                suggestionsList={each}
                onChangeSearchInputSuggestion={
                  this.onChangeSearchInputSuggestion
                }
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}
export default GoogleSuggestions
