import React, { Component } from 'react';
import { Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';

class Pdf extends Component {

    constructor() {
        super();
        this.state = {
            styles: StyleSheet.create({
                page: {
                    flexDirection: 'row',
                    backgroundColor: '#E4E4E4'
                },
                section: {
                    flexDirection: 'column',
                    
                },
                double:{
                    flexDirection: 'row'
                },
                spacervert:{
                    marginTop: '50px',
                    marginLeft: '50px'
                },
                spacerhori:{
                    marginLeft: '25px'
                },
                elementgroup:{
                    flexDirection: 'row'
                },
                tablerow:{
                    flexDirection: 'row'
                }
            })
        }
    }

    render() {
        console.log(this.props.data);
        return (
            <Document>
                <Page size="A4" style={this.state.styles.page}>
                    <View style={this.state.styles.section}>
                        <Text>Factura</Text>
                        <Text>Comercial El Ahorro</Text>
                        <Text>Ahorra con nosotros</Text>

                        <View style={this.state.styles.spacervert}></View>

                        <View style={this.state.styles.double}>
                            <View style={this.state.styles.section}>
                                <View style={this.state.styles.elementgroup}>
                                    <Text>Direccion: </Text>
                                    <Text>Belisario Quevedo </Text>
                                </View>
                                <View style={this.state.styles.elementgroup}>
                                    <Text>Ciudad: </Text>
                                    <Text>Latacunga</Text>
                                </View>
                                <View style={this.state.styles.elementgroup}>
                                    <Text>Telefono: </Text>
                                    <Text>123456789</Text>
                                </View>
                                <View style={this.state.styles.elementgroup}>
                                    <Text>Correo: </Text>
                                    <Text>12345@12345.com</Text>
                                </View>
                                <View style={this.state.styles.elementgroup}>
                                    <Text>Nombre: </Text>
                                    <Text>Juan Perez</Text>
                                </View>
                                <View style={this.state.styles.elementgroup}>
                                    <Text>Empresa: </Text>
                                    <Text>Electronic</Text>
                                </View>
                            </View>

                            <View style={this.state.styles.spacervert}></View>


                            <View style={this.state.styles.section}>
                                <View style={this.state.styles.elementgroup}>
                                    <Text># Factura: </Text>
                                    <Text>8</Text>
                                </View>
                                <View style={this.state.styles.elementgroup}>
                                    <Text>Fecha de Compra: </Text>
                                    <Text>4/26/2018</Text>
                                </View>
                                <View style={this.state.styles.elementgroup}>
                                    <Text>Fecha de Vencimiento: </Text>
                                    <Text>5/25/2019</Text>
                                </View>
                                <View style={this.state.styles.elementgroup}>
                                    <Text>Id Cliente: </Text>
                                    <Text>123456789</Text>
                                </View>
                                <View style={this.state.styles.elementgroup}>
                                    <Text>Telefono: </Text>
                                    <Text>12345789</Text>
                                </View>
                                <View style={this.state.styles.elementgroup}>
                                    <Text>Fecha de Pago: </Text>
                                    <Text>8/26/2018</Text>
                                </View>
                            </View>
                        </View>

                        <View style={this.state.styles.spacervert}></View>

                        <View>
                            <View style={this.state.styles.tablerow}>
                                <View style={this.state.styles.spacerhori}></View>
                                <Text># Pago</Text>
                                <View style={this.state.styles.spacerhori}></View>
                                <Text>Descripcion</Text>
                                <View style={this.state.styles.spacerhori}></View>
                                <View style={this.state.styles.spacerhori}></View>
                                <View style={this.state.styles.spacerhori}></View>
                                <Text>Valor</Text>
                                <View style={this.state.styles.spacerhori}></View>
                                <View style={this.state.styles.spacerhori}></View>
                                <View style={this.state.styles.spacerhori}></View>
                                <Text>Total</Text>
                            </View>
                            <View style={this.state.styles.tablerow}>
                                <View style={this.state.styles.spacerhori}></View>
                                <View style={this.state.styles.spacerhori}></View>
                                <Text>{this.props.data.pago}</Text>
                                <View style={this.state.styles.spacerhori}></View>
                                <View style={this.state.styles.spacerhori}></View>
                                <Text>Pago de cuota</Text>
                                <View style={this.state.styles.spacerhori}></View>
                                <View style={this.state.styles.spacerhori}></View>
                                <Text>{this.props.data.valorfinal}</Text>
                                <View style={this.state.styles.spacerhori}></View>
                                <View style={this.state.styles.spacerhori}></View>
                                <Text>{this.props.data.valorfinal}</Text>
                            </View>
                        </View>
                    </View>

                </Page>
            </Document>
        );
    }
}

export default Pdf;