import {Component} from 'react'

import {
  CustomEditContainer,
  FormContainer,
  CustomHeading,
  CustomInput,
  CustomButton,
  Container,
  CustomPara,
} from './styledComponent'

class EditPage extends Component {
  state = {inputValue: '', active: false}

  onChangeSave = event => {
    event.preventDefault()
    this.setState({active:true})
  }

  onClickEdit = () => {
    this.setState({active:false})
  }

inputChange = event => {
  this.setState({inputValue:event.target.value})
}


  renderSavePage = () => {
    const {inputValue, active} = this.state
    return (
      <FormContainer onSubmit={this.onChangeSave}>
        <CustomHeading>Editable Text Input</CustomHeading>
        <div>
          <CustomInput type="text" onChange={this.inputChange} value={inputValue}/>
          <CustomButton type="submit">Save</CustomButton>
        </div>
      </FormContainer>
    )
  }

  renderEditPage = () => {
    const {active, inputValue} = this.state
    return (
      <Container>
        <CustomHeading>Editable Text Input</CustomHeading>
        <div>
          <CustomPara>{inputValue}</CustomPara>
          <CustomButton onClick={this.onClickEdit}>Edit</CustomButton>
        </div>
      </Container>
    )
  }

  render() {
    const {active} = this.state
    return (
      <CustomEditContainer>
        <div>
        {active ? <div>{this.renderEditPage()}</div>:<div>{this.renderSavePage()}</div>}
        </div>
      </CustomEditContainer>
    )
  }
}
export default EditPage
