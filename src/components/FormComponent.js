import React, { Component } from 'react'
import { Button, Form, Label,  Col, Row, FormText } from 'reactstrap';



class VipForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            firstName: '',
            lastName: '',
            email: '',
    };
    //this.handleInputChange = this.handleInputChange.bind(this);
    //this.handleSubmit = this.handleSubmit.bind(this);
}

handleInputChange(event) {
    const target = event.target;
    const name = target.name;
    const value = target.type === 'checkbox' ? target.checked : target.value;

    this.setState({
        [name]: value
    });
}


    render() {
        
        return (
        
            <div className="container" >
                <div className="row row-content">
                    <div className="col-sm-12 col-md-4 offset-md-4 py-2">
                        <h2>Become a VIP member! </h2>
                    </div>
                    <Form model="feedbackForm" onSubmit={values => this.handleSubmit(values)} className="col-sm-12 col-md-4 offset-md-4">
                            
                            <Row className="form-group">
                                <Label htmlFor="firstName" md={2}>First Name</Label>
                                <Col md={10}>
                                    <FormText model=".firstName" id="firstName" name="firstName"
                                    placeholder="First Name"
                                    className="form-control"
                                    /> 
                                </Col>
                            </Row>

                        <Row className="form-group">
                                <Label htmlFor="lastName" md={2}>Last Name</Label>
                                <Col md={10}>
                                    <FormText model=".lastName" id="lastName" name="lastName"
                                    placeholder="Last Name"
                                    className="form-control"
                                    />
                                </Col>
                            </Row>

                            <Row className="form-group">
                                <Label htmlFor="email" md={2}>Email</Label>
                                <Col md={10}>
                                    <FormText model=".email" id="email" name="email"
                                    placeholder="Email"
                                    className="form-control"
                                    />
                                </Col>
                            </Row>
                            
                            <Row className="form-group">
                                <Col md={{size: 10, offset: 2}}>
                                    <Button type="submit" color="warning">
                                        Join Now
                                    </Button>
                                </Col>
                            </Row> 
                        
                        </Form>

                </div>
            </div>
        );
    }
}

export default VipForm;