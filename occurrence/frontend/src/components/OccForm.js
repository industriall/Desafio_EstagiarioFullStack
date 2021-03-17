import React, { Component } from 'react';
import { Form, Button, Col } from 'react-bootstrap'
import { Plus } from 'react-bootstrap-icons';


class OccForm extends Component {

    constructor(props) {
        super(props)

        this.state = {
            occTitle: ''
        }
    }

    handleOccTitleChange = (event) => {
        this.setState({
            occTitle: event.target.value
        })
    }

    render() {
        return(
            <Form>
                <Form.Row>

                    <Col xs={7}>
                        <Form.Label>Título</Form.Label>
                        <Form.Control
                            placeholder="Título da Ocorrência"
                            value={this.state.occTitle}
                            onChange={this.handleOccTitleChange}
                        />
                    </Col>
                    <Col>
                        <Form.Label>Início</Form.Label>
                        <Form.Control type="date" />
                    </Col>
                    <Col>
                        <Form.Label>Fim</Form.Label>
                        <Form.Control type="date" />
                    </Col>
                </Form.Row>

                <Form.Row><h4>Acontecimentos</h4></Form.Row>

                <Form.Row>
                    <Col xs={7}>
                        <Form.Label>Acontecimento</Form.Label>
                        <Form.Control/>
                    </Col>

                    <Col>
                        
                        <Button>
                            <Plus/>
                            ADICIONAR
                        </Button>
                    </Col>
                </Form.Row>

                {/* <div id="events-list">{eventList}</div> */}

                <Button variant="primary" type="submit">
                    SALVAR
                </Button>
            </Form>
        )
    }
}

export default OccForm;