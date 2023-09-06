import React, { Component } from 'react'
import Equipo from './components/Equipo';
import Arg from "./img/arg.svg";
import Usa from "./img/usa.svg";

class Tablero extends Component {
  constructor(props) {
    super(props);
    this.state = {
      local: 0,
      visitante: 0
    }
  }
  /* Cree sus funciones aquí abajo */
  handleClickIncrementarloc1 = ()=>{
    this.setState({
      local: this.state.local +1
    })
  }
  handleClickIncrementarloc2 = ()=>{
    this.setState({
      local: this.state.local +2
    })
  }
  handleClickIncrementarloc3 = ()=>{
    this.setState({
      local: this.state.local +3
    })
  }
  handleClickDecrementarloc1 = ()=>{
    this.setState({
      local: this.state.local -1
    })
  }
  handleClickDecrementarloc2 = ()=>{
    this.setState({
      local: this.state.local -2
    })
  }
  handleClickDecrementarloc3 = ()=>{
    this.setState({
      local: this.state.local -3
    })
  }
  /*funcion visitante*/
  handleClickIncrementarvis1 = ()=>{
    this.setState({
      visitante: this.state.visitante +1
    })
  }
  handleClickIncrementarvis2 = ()=>{
    this.setState({
      visitante: this.state.visitante +2
    })
  }
  handleClickIncrementarvis3 = ()=>{
    this.setState({
      visitante: this.state.visitante +3
    })
  }
  handleClickDecrementarvis1 = ()=>{
    this.setState({
      visitante: this.state.visitante -1
    })
  }
  handleClickDecrementarvis2 = ()=>{
    this.setState({
      visitante: this.state.visitante -2
    })
  }
  handleClickDecrementarvis3 = ()=>{
    this.setState({
      visitante: this.state.visitante -3
    })
  }
  /*reiniciar */
  handleClickReiniciar = ()=>{ 
    this.setState({
      local: this.state.local === 0,
      visitante: this.state.visitante === 0,
    })
  }
  render () {
    return (
      <>
        <h4>{this.props.children}</h4>
        <div className='tablero_grupo'>
          <div className='contenedor_local'>
            <Equipo nombre="Local"/>
            
            <Equipo contador={this.state.local}/>

            <Equipo bandera={ Arg } />
            
            <button className='btn_inc' onClick={this.handleClickIncrementarloc1}>+ 1</button>
            <button className='btn_inc' onClick={this.handleClickIncrementarloc2}>+ 2</button>
            <button className='btn_inc' onClick={this.handleClickIncrementarloc3}>+ 3</button>
            <button className='btn_dec' onClick={this.handleClickDecrementarloc1}>- 1</button>
            <button className='btn_dec' onClick={this.handleClickDecrementarloc2}>- 2</button>
            <button className='btn_dec' onClick={this.handleClickDecrementarloc3}>- 3</button>
          </div>
          <div className='contenedor_visitante'>
            <Equipo nombre="Visitante"/>

            <Equipo contador={this.state.visitante}/>

            <Equipo bandera={ Usa } />
            
            <button className='btn_inc' onClick={this.handleClickIncrementarvis1}>+ 1</button>
            <button className='btn_inc' onClick={this.handleClickIncrementarvis2}>+ 2</button>
            <button className='btn_inc' onClick={this.handleClickIncrementarvis3}>+ 3</button>
            <button className='btn_dec' onClick={this.handleClickDecrementarvis1}>- 1</button>
            <button className='btn_dec' onClick={this.handleClickDecrementarvis2}>- 2</button>
            <button className='btn_dec' onClick={this.handleClickDecrementarvis3}>- 3</button>

          </div>
        </div>
        <button onClick={this.handleClickReiniciar}>Reiniciar tablero</button>
      </>
    )
  }
}

export default Tablero;