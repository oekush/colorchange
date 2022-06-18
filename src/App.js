import React, {Component} from "react";
import './App.css';


class App extends Component{
  
  state={
    bgColor:{},
      colorsArr:[
        { color: "#247BA0", name: 'LAPIS LAZULI' },
        { color: "#70C1B3", name: 'GREEN SHEEN' },
        { color: "#B2DBBF", name: 'SEA FOAM GREEN' },
        { color: "#F3FFBD", name: 'VERY PALE YELLOW' },
        { color: "#FF1654", name: 'AWESOME' },
        { color: "#000000", name: 'BLACK' },
        { color: "#ADD8E6", name: 'LIGHT BLUE' },
        { color: "#800080", name: 'PURPLE' },
        { color: "#FFFF00", name: 'YELLOW' },
        { color: "#00FF00", name: 'LIME'}
      ],
      renderedColor:[]
  }
  constructor(){
    const usedColor = []
    super();
   this.handleClick = this.handleClick.bind(this)
  }
  
  handleClick() {
    
    const {colorsArr} = this.state;
    this.randomColor= colorsArr[Math.floor(Math.random()*colorsArr.length)]
    this.setState({
      bgColor: this.randomColor,
    })
    this.addArray(this.state.bgColor)
  }

    addArray(color){
       let array = []
       array.push(color)
       this.setState({
         renderedColor:array
       })
    }
    
  
  renderButton(){
    let button
    button = <div> <div className="content-box" style={{backgroundColor:`${this.state.bgColor.color}`, minHeight:"3vh",overflow:"hidden", zoom:3,}}>{this.state.bgColor.name}</div>
   <button type="button"
   style={{backgroundColor:this.state.bgColor.color}}
   onClick={this.handleClick} >Randomize </button></div>
   this.renderColor()
   return button
  }

  renderColor(){
    const array = this.state.renderedColor
  

  }
  renderColorArray(){
    var div= 
    <div>
      Hello
    {this.state.renderedColor.forEach(element => {
      <div>console.log('aaa')
      <p style={{backgroundColor:element.color}}>element.name <span>,</span></p> 
   
        </div>
         })}
    </div>
        return div
  }
  render(){
    
    const button = this.renderButton()
    const comp = this.renderColorArray()
    return (
      <div className="App">
      {button}
      {comp}
      
      </div>
    );
  }
}


export default App;
