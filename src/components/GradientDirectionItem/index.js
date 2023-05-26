// Write your code here
import {ListItem, DirectionButton} from './styledComponents'

const GradientDirectionItem = props => {
  const {gradientDirection, clickGradient, isActive} = props
  const {displayText, value} = gradientDirection
  const onClickGradientDirection = () => {
    clickGradient(value)
  }

  return (
    <ListItem>
      <DirectionButton
        type="button"
        onClick={onClickGradientDirection}
        isActive={isActive}
      >
        {displayText}
      </DirectionButton>
    </ListItem>
  )
}

export default GradientDirectionItem
