import React,{useState, useEffect} from 'react'
import "./SearchBar.css"





function SearchBar(props){
    const [input, setSearchValue]=useState("Search what you want")
    const [productsState, setProductsState]=useState([])
    const shouldDisplayButton=input.length>2
   
    

    function readText(event)
    {
        setSearchValue(event.target.value)
    }

    function searchFunction()
    {
        let url="https://www.googleapis.com/books/v1/volumes?q="
        fetch(url+input)
        .then(res=>res.json())
        .then((json)=>{
           const newProductsState=json.items
            
           
           setProductsState(newProductsState)
           console.log(productsState)
        })
    }
    






   
return (
    
<div>
    < input type="text" value={input} onChange={readText} />
    {shouldDisplayButton && <button onClick={searchFunction}>Search</button>}



{productsState.map((product) => {
    return (<div>{product.volumeInfo.title}<button>View more</button></div>)
})}

    
</div>
)
}


export default SearchBar