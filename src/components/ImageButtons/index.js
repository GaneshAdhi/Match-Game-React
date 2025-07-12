import './index.css'

const ImageButtons = props => {
  const {imageDetail, imageChangeOn} = props
  const {id, thumbnailUrl} = imageDetail
  return (
    <li className="image-item">
      <button
        onClick={() => {
          imageChangeOn(id)
        }}
        className="image-button"
        type="button"
      >
        <img className="image-of-button" alt="thumbnail" src={thumbnailUrl} />
      </button>
    </li>
  )
}

export default ImageButtons
