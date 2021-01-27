import React from 'react';
import ToDoList from './ToDoList';

const App = () =>{

  const [inputList, setInputList] = React.useState("")
  const [items,setItems] = React.useState([])
  const itemEvent = (e) => {
    setInputList(e.target.value);
  }
  const listOfItems =() =>{
    setItems((oldItems => {
      return [...oldItems,inputList]
    }))
    setInputList('')  
  }

  const deleteItem = (id) =>{
    setItems((oldItems) =>{
      return oldItems.filter((arrElem,index)=>{
       return id !== index
      })

    })
  }


return( 
<>
  <div className="main_div">
    <div className=  "center_div">  
     <br/>
     <h1 className="h1">TODO LIST </h1>
     <br/>
     <input type= "text" className = "input" placeholder="ADD A ITEM"   value = {inputList} 
      onChange= {itemEvent}
     />
     <button className="button" onClick = {listOfItems}> + </button>
     <ol className="ol">
       {items.map((itemVal, index) => {
        return <ToDoList key ={index} id ={index} text = {itemVal} onSelect = {deleteItem}/>
       }
       )}  
     </ol>
    </div>
  </div>
</>
)
}


export default App;
