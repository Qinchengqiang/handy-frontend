import React from 'react'
// higher order component: extends current form, provide input control event handling and form input validation
export default function AssemblyFormCreate(Comp) {
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

                // if (rule.emailValidator) {

                // }

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