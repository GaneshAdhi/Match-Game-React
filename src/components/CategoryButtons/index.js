import './index.css'

const CategoryButtons = props => {
  const {tabItemDetail, activeTabButtonStatus, changeActiveId} = props
  const {tabId, displayText} = tabItemDetail
  const tabButtonClassName = activeTabButtonStatus
    ? 'tab-btn-active'
    : 'tab-btn-inactive'

  return (
    <li className="tab-item">
      <button
        type="button"
        onClick={() => {
          changeActiveId(tabId)
        }}
        className={`tab-button-common ${tabButtonClassName}`}
      >
        {displayText}
      </button>
    </li>
  )
}

export default CategoryButtons
