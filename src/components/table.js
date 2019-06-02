import React, {Component} from 'react';
import BootstrapTable from 'react-bootstrap-table-next';


class Table extends Component{
    constructor(){
        super();
        this.state={
            columns : [{
                dataField: 'pago',
                text: '# Pago'
              }, {
                dataField: 'cuotainicial',
                text: 'Cuota Inicial'
              }, {
                dataField: 'cuotas',
                text: 'Cuotas'
              }, {
                dataField: 'insoluto',
                text: 'Insoluto'
              }, {
                dataField: 'interes',
                text: 'Interes'
              }, {
                dataField: 'valorfinal',
                text: 'Valor Final'
              },
            ],
            rowEvents : {
              onClick: (e, row, rowIndex) => {
                console.log('funciona');
                this.props.generatePdf(e, row, rowIndex);
              }
            }
        }
    }

    componentDidMount(){
      this.state.rowEvents = {
        onClick: (e, row, rowIndex) => {
          console.log('funciona');
          //this.props.generatePdf(e, row, rowIndex);
        }
      }
    }
    

    render(){
      console.log(this.state.rowEvents);
        let ins = 0;
        let cuot = (Number(this.props.initialData.precio) - Number(this.props.initialData.cuotainicial)) / Number(this.props.initialData.cuotas);
        console.log(Number(this.props.initialData.cuotainicial));
        let products =  [];
        for(let i= 0; i<(Number(this.props.initialData.cuotas)+1); i++){
            //console.log(products);
            if(i===0){
                ins = Number(this.props.initialData.precio) - Number(this.props.initialData.cuotainicial);
                let obj = {
                    key: i,
                    pago: i,
                    cuotainicial: Number(this.props.initialData.cuotainicial).toFixed(2),
                    cuotas: 0.0,
                    insoluto: (ins).toFixed(2),
                    interes: ((ins*Number(this.props.initialData.interes)*(1/Number(this.props.initialData.tipo)))/100).toFixed(2),
                    valorfinal: Number(this.props.initialData.cuotainicial).toFixed(2)
                }
                products.push(obj);
            }else{
                ins = ins-cuot;
                let obj ={
                    key: i,
                    pago: i,
                    cuotainicial: 0.0,
                    cuotas: (cuot).toFixed(2),
                    insoluto: (ins).toFixed(2),
                    interes: ((ins*Number(this.props.initialData.interes)*(1/Number(this.props.initialData.tipo)))/100).toFixed(2),
                    valorfinal: (cuot+Number(products[i-1].interes)).toFixed(2)
                }
                products.push(obj);
            }
            
        }
        return(
            <BootstrapTable keyField='pago' data={ products } columns={ this.state.columns } rowEvents = {this.state.rowEvents}/>
        );
    }
}



export default Table;
  