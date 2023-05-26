import {Component} from 'react'

import GradientDirectionItem from '../GradientDirectionItem'

import {
  GradientGeneratorContainer,
  ResponsiveContainer,
  Heading,
  GradientDirectionList,
  CustomPara,
  ColorPickerContainer,
  CustomInputAndColorContainer,
  ColorValue,
  CustomInput,
  GenerateButton,
} from './styledComponents'

const gradientDirectionsList = [
  {directionId: 'TOP', value: 'top', displayText: 'Top'},
  {directionId: 'BOTTOM', value: 'bottom', displayText: 'Bottom'},
  {directionId: 'RIGHT', value: 'right', displayText: 'Right'},
  {directionId: 'LEFT', value: 'left', displayText: 'Left'},
]
// Write your code here

class GradientGenerator extends Component {
  state = {
    activeGradientDirection: gradientDirectionsList[0].value,
    fromColorInput: '#8ae323',
    toColorInput: '#014f7b',
    gradient: `to ${gradientDirectionsList[0].value}, #8ae323, #014f7b`,
  }

  onClickGradientDirection = direction => {
    this.setState({activeGradientDirection: direction})
  }

  onChangeFromColor = event => {
    this.setState({fromColorInput: event.target.value})
  }

  onChangeToColor = event => {
    this.setState({toColorInput: event.target.value})
  }

  onClickGenerateButton = () => {
    const {fromColorInput, toColorInput, activeGradientDirection} = this.state
    this.setState({
      gradient: `to ${activeGradientDirection}, ${fromColorInput}, ${toColorInput}`,
    })
  }

  render() {
    const {
      activeGradientDirection,
      fromColorInput,
      toColorInput,
      gradient,
    } = this.state

    return (
      <GradientGeneratorContainer
        data-testid="gradientGenerator"
        gradient={gradient}
      >
        <ResponsiveContainer>
          <Heading>Generate a CSS Color Gradient</Heading>
          <CustomPara>Choose Direction</CustomPara>
          <GradientDirectionList>
            {gradientDirectionsList.map(eachDirection => (
              <GradientDirectionItem
                key={eachDirection.directionId}
                gradientDirection={eachDirection}
                clickGradient={this.onClickGradientDirection}
                isActive={eachDirection.value === activeGradientDirection}
              />
            ))}
          </GradientDirectionList>
          <CustomPara>Pick the Colors</CustomPara>
          <ColorPickerContainer>
            <CustomInputAndColorContainer>
              <ColorValue>{fromColorInput}</ColorValue>
              <CustomInput
                type="color"
                value={fromColorInput}
                onChange={this.onChangeFromColor}
              />
            </CustomInputAndColorContainer>
            <CustomInputAndColorContainer>
              <ColorValue>{toColorInput}</ColorValue>
              <CustomInput
                type="color"
                value={toColorInput}
                onChange={this.onChangeToColor}
              />
            </CustomInputAndColorContainer>
          </ColorPickerContainer>
          <GenerateButton type="button" onClick={this.onClickGenerateButton}>
            Generate
          </GenerateButton>
        </ResponsiveContainer>
      </GradientGeneratorContainer>
    )
  }
}

export default GradientGenerator
