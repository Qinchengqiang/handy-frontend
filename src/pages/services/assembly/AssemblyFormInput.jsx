import React from 'react'
export default class AssemblyFormInput extends React.Component {
    render() {
        const { prefix, ...rest } = this.props;
        return (
            <div className="assembly-form_item">
                {prefix}
                <input {...rest} className="assembly-form_item-input" />
            </div>
        );
    }
}