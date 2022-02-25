import React from 'react';

class SelectField extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      selectedValue: null
    }
    this.sendToParent = this.sendToParent.bind(this);
  }

  sendToParent = () => {
      this.props.selectInfo(this.state.selectedValue)
  }



  render() {

    return(
        <div className="field">
            <h4>  {this.props.label}</h4>
            {Array.isArray(this.props.value)
              ? <select className="form-control" onChange={(e) => { this.setState({ selectedValue: e.target.value}, this.sendToParent)}} required>
                <option selected disabled value="">{this.props.placeholder}...</option>
                {this.props.value.map( (item, index) => {
                  return <option key={index} value={item}>{item}</option>
                })}
              </select>
              : <select className="form-control" onChange={(e) => { this.setState({ selectedValue: e.target.value}, this.sendToParent)}} required>
                <option selected disabled value="">{this.props.placeholder}...</option>
                {this.props.option.map( (item, index) => {
                  if(this.props.language === 'sp') {
                    return <option key={index} value={item.english}>{item.spanish}</option>
                  } else {
                    return <option key={index} value={item.english}>{item.english}</option>
                  }
                })}
              </select>
            }
            <div class="invalid-feedback">
              Please select an option.
            </div>
        </div>
        )
      }
    }

export default SelectField;
