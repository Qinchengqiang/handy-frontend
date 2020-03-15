import React , {Component}from 'react'
import {Form, Icon, Input , Button} from 'antd'


class defaultLoginForm extends Component {
    handleSubmit = e =>{
        e.preventDefault();
        this.props.form.validateFields((err,values)=>{
            if(!err) {
                console.log('Received value of Furniture Assembly form:', values)
            }
        })
    }

    render (){
        const {getFieldDecorator} = this.props.form;

        return (
            <Form>
                <div>Office Furniture Assembly</div>
                <Form.Item>
                    {getFieldDecorator('zipCode',{rules:[{required:true, message:"please input your home ZIP Code!"}]})(
                        <input 
                        // prefix={}
                        type="number"
                        placeholder="Zip Code"
                        />
                    )}
                </Form.Item>
                <div>Tell us about the job</div>

            </Form>
        )



    }




}