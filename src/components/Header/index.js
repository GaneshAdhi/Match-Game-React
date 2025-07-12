import './index.css'

const Header = props => {
  const {scoreText, timeText} = props

  return (
    <header className="header">
      <nav className="header-inner-card">
        <ul className="header-inner-card">
          <li className="list-item-head">
            <img
              className="header-logo"
              alt="website logo"
              src="https://assets.ccbp.in/frontend/react-js/match-game-website-logo.png"
            />
          </li>
          <li>
            <div className="header-score-and-time-card">
              <p className="header-score-text">
                Score:
                <span className="header-score-span-text">{scoreText}</span>
              </p>
              <div className="header-timer-card">
                <img
                  className="timer-card-time-logo"
                  alt="timer"
                  src="https://assets.ccbp.in/frontend/react-js/match-game-timer-img.png"
                />
                <p className="timer-card-time-text">{timeText} sec</p>
              </div>
            </div>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
