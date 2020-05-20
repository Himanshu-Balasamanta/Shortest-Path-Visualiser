import React from "react";
import start from './play-solid.svg';
import './grid.css'
import end from './times-circle-solid.svg'
const is_present = (arr,y,x) => {
  //console.log(walls)
  return arr.reduce((t,c)=>{
    if(c[0]===y && c[1]=== x){
      return true
    }
    return t;
  },false)
}

function Grid(props) {
  
  const height = props.height ||20 ;
  const width = props.width || 30;
  let list = [];

  for(let i =0;i<height;i++){
    let temp = []
      for(let j=0;j<width;j++){
         if(i===props.end[0] && j===props.end[1]){
          temp.push(<div  key={i+j} style={{width:'30px',height:'30px',border:'1px solid lightblue',WebkitUserSelect: 'none'}}><img src={end} alt="start" style={{width:'25px',height:'25px'}}/></div>)
        }
        else if(i===props.start[0] && j===props.start[1]){
          temp.push(<div  key={i+j} style={{width:'30px',height:'30px',border:'1px solid lightblue',WebkitUserSelect: 'none'}}><img src={start} alt="start" style={{width:'25px',height:'25px'}}/></div>)
        }
        else if(is_present(props.path,i,j)){
          temp.push(<div  key={i+j} className="animation-target " style={{width:'30px',height:'30px',WebkitUserSelect: 'none',backgroundColor:'#fcf876'}}></div>)
        
        }
      
       else if(props.current && props.current[0]===i&&props.current[1]===j){
          temp.push(<div  key={i+j} style={{width:'30px',height:'30px',backgroundColor:'#fcf876',WebkitUserSelect: 'none'}}></div>)
        }
        else if(props.grid[i][j]===3){
          temp.push(<div  key={i+j} className="animation-target " style={{width:'30px',height:'30px',backgroundColor:'#3797a4',WebkitUserSelect: 'none'}}></div>)
        }
        else if(props.grid[i][j]===2){
          temp.push(<div  key={i+j} className="animation-target " style={{width:'30px',height:'30px',backgroundColor:'#8ccbbe',WebkitUserSelect: 'none'}}></div>)
        
        }
        
        else if(props.grid[i][j]===1){
          temp.push(<div key={i+j} className="animation-target animate__shakeX" style={{width:'30px',height:'30px',backgroundColor:'#202060',WebkitUserSelect: 'none'}} onTouchStart={(e)=> {if(window.event.buttons===1){props.toggleWall(i,j,1)};}}   onMouseOver={(e)=> {if(window.event.buttons===1){props.toggleWall(i,j,1)};}} onClick={(e)=> {props.toggleWall(i,j,1);}} ></div>)
        }
        else{
          temp.push(<div  key={i+j}  style={{width:'30px',height:'30px',border:'1px solid lightblue',WebkitUserSelect: 'none'}} onTouchStart={(e)=> {if(window.event.buttons===1){props.toggleWall(i,j,0)}}}  onMouseOver={(e)=> {if(window.event.buttons===1){props.toggleWall(i,j,0)}}} onClick={(e)=> {props.toggleWall(i,j,0);}}></div>)
        }
  
      }
   
  list.push(temp)
  }

  return (
  <div className="p-4">
 
   {list.map((obj,ind) => {
   return <div className="row justify-content-center flex-nowrap" key={ind}>{obj}</div>
   })}
  </div>
  );
}

export default Grid;
