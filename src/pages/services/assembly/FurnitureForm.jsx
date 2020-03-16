import React from "react";
import {Icon} from 'antd'
import './furnitureAssembly.scss'

// higher order component: extends current form, provide input control event handling and form input validation
function AssemblyFormCreate(Comp) {
  return class extends React.Component {
    constructor(props) {
      super(props);
      // options
      this.options = {};
      //  datas
      this.state = {};
    }

    // handing input event
    handleChange = e => {
      // data input and validate
      const { name, value } = e.target;
      this.setState({ [name]: value }, () => {
        // single field validation
        this.validateField(name);
      });
    };

    validateField = field => {
      const rules = this.options[field].rules;
      // any of the rules returns false the validation fails
      const isValid = !rules.some(rule => {
        if (rule.required) {
          if (!this.state[field]) {
            // the failed validation case
            this.setState({
              [field + "Message"]: rule.message
            });
            return true;
          }
        }

        return false;
      });
      // cleans out any error if previously registered with the field
      if (isValid) {
        this.setState({
          [field + "Message"]: ""
        });
      }

      return isValid;
    };

    validateFields = cb => {
      const rets = Object.keys(this.options).map(field =>
        this.validateField(field)
      );
      const ret = rets.every(v => v === true);
      cb(ret, this.state);
    };

    // handling focus and error generator
    handleFocus = e => {
      const field = e.target.name;
      this.setState({
        [field + "Focus"]: true
      });
    };

    isFieldTouched = field => {
      return !!this.state[field + "Focus"];
    };

    getFieldError = field => {
      return this.state[field + "Message"];
    };

    // decoration function: accept field option as input and returns a form item higher order component
    getFieldDec = (field, option) => {
      this.options[field] = option; // extract validation option configurations
      return InputComp => (
        <div>
          {React.cloneElement(InputComp, {
            name: field,
            value: this.state[field] || "",
            onChange: this.handleChange, //handles data input change
            onFocus: this.handleFocus //handles focus event
          })}
        </div>
      );
    };

    render() {
      return (
        <Comp
          getFieldDec={this.getFieldDec}
          validateFields={this.validateFields}
          isFieldTouched={this.isFieldTouched}
          getFieldError={this.getFieldError}
        />
      );
    }
  };
}

class FormItem extends React.Component {
  render() {
    return (
      <div>
        {/* default unnamed slot*/} 
        {this.props.children}
        {this.props.help && (
          <p
            style={{
              color: this.props.validateStatus === "error" ? "red" : "green"
            }}
          >
            {this.props.help}
          </p>
        )}
      </div>
    );
  }
}

class AssemblyFormInput extends React.Component {
  render() {
    const {prefix, ...rest} = this.props;
    return (
      <div className="assembly-form_item">
        {prefix}
        <input {...rest} className="assembly-form_item-input"/>
      </div>
    );
  }
}

// @AssemblyFormCreate
class AssemblyFormTest extends React.Component {
  onSubmit = () => {
    this.props.validateFields((isValid, values) => {
      if (isValid) {
        console.log(values);
        alert("getting a price for you~~~~");
      } else {
        alert("oops sth went wrong");
      }
    });
  };
  render() {
    // extract the form error
    const { getFieldDec, isFieldTouched, getFieldError } = this.props;
    const zipcodeError = isFieldTouched("zipcode") && getFieldError("zipcode");
    const emailError = isFieldTouched("email") && getFieldError("email")
    const detailError = isFieldTouched("detail") && getFieldError("detail")
    const phoneError = isFieldTouched("phone") && getFieldError("phone")
    const styleObj = {
        height: "5em",
        paddingBottom: "3em"
    }
    return (
      <div className="assembly-furniture_form">
          <div className="assembly-furniture_form-title">Furniture Assembly</div>
        <FormItem validateStatus="error" help={zipcodeError || ""} >
          {getFieldDec("zipcode", {
            rules: [{ required: true, message: "Please input your ZIP Code!" }]
          })(<AssemblyFormInput type="number" prefix={<Icon type="home" className="assembly-form_prefix" style={{color:"#BABBBD"}}/>} placeholder="ZIP Code" />)}
        </FormItem>
        <p className="assembly-furniture_form-title_sub">Tell us about the job</p>
        <FormItem validateStatus="error" help={detailError || ""}>
          {getFieldDec("detail", {
            rules: [{ required: true, message: "job description?" }]
          })(<AssemblyFormInput type="text" style={styleObj} prefix={<Icon type="zhihu" className="assembly-form_prefix" style={{color:"#BABBBD"}}/>} placeholder="Please describe the job in detail"/>)}
        </FormItem>
        <FormItem validateStatus="error" help={emailError || ""}>
          {getFieldDec("email", {
            rules: [{ required: true, message: "You forget your email address my boi" }]
          })(<AssemblyFormInput type="text" prefix={<Icon type="mail" className="assembly-form_prefix" style={{color:"#BABBBD"}}/>} placeholder="Email Address"/>)}
        </FormItem>
        <FormItem validateStatus="error" help={phoneError || ""}>
          {getFieldDec("phone", {
            rules: [{ required: true, message: "You forget your phonenumber my boi" }]
          })(<AssemblyFormInput type="number" prefix={<Icon type="mobile" className="assembly-form_prefix" style={{color:"#BABBBD"}}/>} placeholder="Phone Number"/>)}
        </FormItem>
        <button onClick={this.onSubmit} className="assembly-from_button">Get a Price</button>
      </div>
    );
  }
}
export default AssemblyFormCreate(AssemblyFormTest);
