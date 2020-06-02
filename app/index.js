import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import Popular from './components/Popular'

// Components can have (are concerned with):
// State
// Lifecycle
// UI

// JSX is not violating the separation of concerns
// because a component is concerned with UI

// Babel converts JSX into JS createElement invocations

class App extends React.Component {
  render() {
    // description of the UI
    return (
      <div className="container">
        <Popular />
      </div>
    )
  }
}

// Takes two args:
// the element,
// where to render the element to

// Is decoupled from React to allow you to
// Use react for other environ (mobile app, xbox)
ReactDOM.render(
  <App />,
  document.getElementById('app')
)
