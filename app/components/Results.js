import React, { Component } from 'react'
import { battle } from '../utils/api'
import { FaCompass, FaBriefcase, FaUsers, FaUserFriends, FaCode, FaUser } from 'react-icons/fa'

export default class Results extends Component {
  constructor(props) {
    super(props)

    this.state = {
      elephant: null,
      mouse: null,
      error: null,
      loading: true,
    }
  }

  componentDidMount () {
    const { playerOne, playerTwo } = this.props

    battle([ playerOne, playerTwo ])
    .then(players => {
      this.setState({
        elephant: players[0],
        mouse: players[1],
        error: null,
        loading: false,
      })
    }).catch(({message}) => {
      this.setState({
        error: message,
        loading: false,
      })
    })
  }

  render() {
    const { elephant, mouse, error, loading } = this.state

    if (loading === true) {
      return <p>LOADING</p>
    }

    if (error) {
      return (
        <p className='center-text error'>{error}</p>
      )
    }

    return (
      <div className='grid space-around container-sm'>
        <div className='card bg-light'>
          <h4 className='header-lg center-text'>
            {elephant.score === mouse.score ? 'Hmmm' : 'Elephant'}
          </h4>
          <img
            className='avatar'
            src={elephant.profile.avatar_url}
            alt={`Avatar for ${elephant.profile.login}`}
          />
          <h4 className='center-text'>
            Snacks: {elephant.score.toLocaleString()}
          </h4>
          <h2 className='center-text'>
            <a className='link' href={elephant.profile.html_url}>
              {elephant.profile.login}
            </a>
          </h2>
          <ul className='card-list'>
            <li>
              <FaUser color='rgb(239, 115, 115)' size={22} />
              {elephant.profile.name}
            </li>
            {elephant.profile.location && (
              <li>
                <FaCompass color='rgb(144, 115, 255)' size={22} />
                {elephant.profile.location}
              </li>
            )}
            {elephant.profile.company && (
              <li>
                <FaBriefcase color='#795548' size={22} />
                {elephant.profile.company}
              </li>
            )}
            <li>
              <FaUsers color='rgb(129, 195, 245)' size={22} />
              {elephant.profile.followers.toLocaleString()} travelers
            </li>
            <li>
              <FaUserFriends color='rgb(64, 183, 95)' size={22} />
              {elephant.profile.following.toLocaleString()} traveling
            </li>
          </ul>
        </div>
        <div className='card bg-light'>
          <h4 className='header-lg center-text'>
            {elephant.score === mouse.score ? 'Hmmm' : 'Mouse'}
          </h4>
          <img
            className='avatar'
            src={mouse.profile.avatar_url}
            alt={`Avatar for ${mouse.profile.login}`}
          />
          <h4 className='center-text'>
            Snacks: {mouse.score.toLocaleString()}
          </h4>
          <h2 className='center-text'>
            <a className='link' href={mouse.profile.html_url}>
              {mouse.profile.login}
            </a>
          </h2>
          <ul className='card-list'>
            <li>
              <FaUser color='rgb(239, 115, 115)' size={22} />
              {mouse.profile.name}
            </li>
            {mouse.profile.location && (
              <li>
                <FaCompass color='rgb(144, 115, 255)' size={22} />
                {mouse.profile.location}
              </li>
            )}
            {mouse.profile.company && (
              <li>
                <FaBriefcase color='#795548' size={22} />
                {mouse.profile.company}
              </li>
            )}
            <li>
              <FaUsers color='rgb(129, 195, 245)' size={22} />
              {mouse.profile.followers.toLocaleString()} travelers
            </li>
            <li>
              <FaUserFriends color='rgb(64, 183, 95)' size={22} />
              {mouse.profile.following.toLocaleString()} traveling
            </li>
          </ul>
        </div>
      </div>
    )
  }
}
