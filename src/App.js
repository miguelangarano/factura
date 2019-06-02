import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import {
  Container,
  Row,
  Col,
  DropdownButton,
  Dropdown,
  Button
} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Table from './components/table';
import { PDFViewer } from '@react-pdf/renderer';
import Pdf from './components/pdf';
import {StyleSheet } from '@react-pdf/renderer';


class App extends Component {

  constructor() {
    super();
    this.state = {
      initialData: {
        producto: '',
        precio: 0.0,
        cuotas: 0,
        cuotainicial: 0.0,
        interes: 0.0,
        tipo: 4
      },
      selection: 'Elije un tipo',
      createTable: false,
      createPdf: false,
      data: null,
      styles : StyleSheet.create({
        pdf: {
          width: '100%',
          height: '500%',
          backgroundColor: '#E4E4E4'
        },
      })
    };  

    this.setTipo = this.setTipo.bind(this);
    this.onChangeValue = this.onChangeValue.bind(this);
    this.changeTable = this.changeTable.bind(this);
    this.generatePdf = this.generatePdf.bind(this);
  }

  changeTable(){
    let valu = !this.state.createTable;
    let valu1 = !this.state.createPdf;
    this.setState({
      createTable: valu,
      createPdf: valu1
    });
  }

  setTipo(val, valu){
    this.state.initialData = {
      producto: this.state.initialData.producto,
      precio: this.state.initialData.precio,
      cuotas: this.state.initialData.cuotas,
      cuotainicial: this.state.initialData.cuotainicial,
      interes: this.state.initialData.interes,
      tipo: val
    };

    this.state.selection= valu;

    this.setState({});
  }

  onChangeValue(obj){
    console.log(obj.target.value);
    switch(obj.target.name){
      case 'producto':{
        this.state.initialData= {
          producto: obj.target.value,
          precio: this.state.initialData.precio,
          cuotas: this.state.initialData.cuotas,
          cuotainicial: this.state.initialData.cuotainicial,
          interes: this.state.initialData.interes,
          tipo: this.state.initialData.tipo
        }
        break;
      }
      case 'precio':{
        this.state.initialData = {
          producto: this.state.initialData.producto,
          precio: obj.target.value,
          cuotas: this.state.initialData.cuotas,
          cuotainicial: this.state.initialData.cuotainicial,
          interes: this.state.initialData.interes,
          tipo: this.state.initialData.tipo
        }
        break;
      }
      case 'cuotas':{
        this.state.initialData =  {
          producto: this.state.initialData.producto,
          precio: this.state.initialData.precio,
          cuotas: obj.target.value,
          cuotainicial: this.state.initialData.cuotainicial,
          interes: this.state.initialData.interes,
          tipo: this.state.initialData.tipo
        }
        break;
      }
      case 'cuotainicial':{
        this.state.initialData = {
          producto: this.state.initialData.producto,
          precio: this.state.initialData.precio,
          cuotas: this.state.initialData.cuotas,
          cuotainicial: obj.target.value,
          interes: this.state.initialData.interes,
          tipo: this.state.initialData.tipo
        }
        break;
      }
      case 'interes':{
        this.state.initialData = {
          producto: this.state.initialData.producto,
          precio: this.state.initialData.precio,
          cuotas: this.state.initialData.cuotas,
          cuotainicial: this.state.initialData.cuotainicial,
          interes: obj.target.value,
          tipo: this.state.initialData.tipo
        }
        break;
      }
      default:{
        break;
      }
    }
    //this.setState({});
  }

  generatePdf(e, row, rowIndex){
    console.log(e+"   "+row+"    "+rowIndex);
    this.setState({
      createPdf: true,
      data: row
    });
  }

  

  render() {
    let Widget = null;
    let Viewer = null;
    if(this.state.createTable){
      Widget = <Table initialData={this.state.initialData} generatePdf = {this.generatePdf}></Table>
      
    }

    if(this.state.createPdf && this.state.data!==null){
      Viewer = <PDFViewer style={this.state.styles.pdf}>
                  <Pdf data = {this.state.data}/>
                </PDFViewer>
    }
    return (
      <Container>
        <div className="separate"></div>
        <Row className="justify-content-md-center">
          <Col>
            <h3>Producto:</h3>
            <input type="text" name="producto" onChange = {this.onChangeValue}></input>
          </Col>
          <Col>
            <h3>Precio:</h3>
            <input type="number" name="precio" onChange = {this.onChangeValue}></input>
          </Col>
          <Col>
            <h3>Cuotas:</h3>
            <input type="number" name="cuotas" onChange = {this.onChangeValue}></input>
          </Col>
          <Col>
            <h3>Cuota Inicial:</h3>
            <input type="number" name="cuotainicial" onChange = {this.onChangeValue}></input>
          </Col>
          <Col>
            <h3>Interés (%):</h3>
            <input type="number" name="interes" onChange = {this.onChangeValue}></input>
          </Col>
          <Col>
            <h3>Tipo:</h3>
            <DropdownButton id="dropdown-basic-button" title={this.state.selection}>
              <Dropdown.Item onClick = {() => this.setTipo(0, 'Elige un tipo')}>Elige un tipo</Dropdown.Item>
              <Dropdown.Item onClick = {() => this.setTipo(1, 'Anual')}>Anual</Dropdown.Item>
              <Dropdown.Item onClick = {() => this.setTipo(2, 'Semestral')}>Semestral</Dropdown.Item>
              <Dropdown.Item onClick = {() => this.setTipo(12, 'Mensual')}>Mensual</Dropdown.Item>
              <Dropdown.Item onClick = {() => this.setTipo(24, 'Quincenal')}>Quincenal</Dropdown.Item>
              <Dropdown.Item onClick = {() => this.setTipo(52, 'Semanal')}>Semanal</Dropdown.Item>
              <Dropdown.Item onClick = {() => this.setTipo(4, 'Trimestral')}>Trimestral</Dropdown.Item>
            </DropdownButton>
          </Col>
        </Row>
        <div className="separate"></div>
        <Row>
          <Col>
            <Button size="lg" block onClick = {this.changeTable}>Generar Tabla</Button>
          </Col>
        </Row>
        <div className="separate"></div>
        <Row className="justify-content-md-center">
          <Container>
            {Widget}
          </Container>
        </Row>
        
        <Row>
          <Col>
            {Viewer}
          </Col>
        </Row>
      </Container>
    );
  }
}

export default App;
