import './index.css'

const ScoreCard = props => {
  const {reset, scoreText} = props

  return (
    <div className="score-container">
      <div className="inner-score-container">
        <img
          className="tropy-score-img"
          alt="trophy"
          src="https://assets.ccbp.in/frontend/react-js/match-game-trophy.png"
        />
        <p className="your-score-text">Your Score</p>
        <p className="your-score-text">{scoreText}</p>
        <button
          onClick={() => {
            reset()
          }}
          className="play-again-btn"
          type="button"
        >
          <img
            className="reset-img"
            alt="reset"
            src="https://assets.ccbp.in/frontend/react-js/match-game-play-again-img.png"
          />
          PLAY AGAIN
        </button>
      </div>
    </div>
  )
}

export default ScoreCard
