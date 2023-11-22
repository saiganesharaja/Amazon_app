import { Button, Grid } from "@mui/material"
import Header from "./Header";
// import Home from "./Home";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { decrement, increment } from "./Home";

export  default  function Allproducts(){
    const dispatch = useDispatch();
     const products = useSelector ((State)=>State.Amazon.products);
    return(
        <Grid>
            <Grid>
                {/* <Header/> */}
            </Grid>
            <Grid container
            sx={{ display:'flex',
            flexDirection:'row',
            gap:'3',
            margin:'100px'
            

          } 

            }>
              {products.map(({image,name,price,quantity},i)=>(
                <Grid item style={{ border:'1px solid black', width:'300px',padding:'20px',margin:'3px'}}>
                  
                    <Link to={`/product/${i}`}>
                    <p> <img src={image} style={{height:'200px', width:"200px"}}/></p>
                    </Link>
                    <p> {name}</p>
                    <p>{price}</p>
                 
                    
                    <Grid style={{display:'flex',marginLeft:'50px'}}>
                      <Grid marginRight='10px'>
                    
                    <Button  variant="outlined" onClick={() => dispatch(increment(i))}  >+</Button>
                    </Grid>
                    <Grid>
                    <span> {quantity} </span>
                    </Grid>
                    <Grid marginLeft='10px'>
                    <Button variant="outlined" onClick={() => dispatch(decrement(i))} >-</Button>
                    </Grid>
                    </Grid>
                    <Link to={`/product/${i}`}>
                    <Button  style={{margin:'20px'}} variant="outlined">Add to Cart</Button>
                    </Link>
                </Grid>
            
              ))}
            </Grid>
        </Grid>
     

    );
}