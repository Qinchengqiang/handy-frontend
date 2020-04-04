import React from 'react'

export default class FormItem extends React.Component {
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