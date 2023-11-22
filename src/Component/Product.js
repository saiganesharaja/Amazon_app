import { Button, Grid } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { ProductSelector, decrement, increment } from "./Home";


export default function Product(){
    const dispatch = useDispatch()
    const {id} = useParams();
    const products = useSelector((state)=>state.Amazon.products);
    const item = useSelector(ProductSelector(id));
    // let total=0;
    return(

        <Grid>
            <Grid item>
                
                    <Grid>
                    <p> <img src={item.image} style={{height:'200px', width:"200px"}}/></p>
                    </Grid>
                    <p> {item.name}</p>
                    <p>{item.price}</p>
                    <Grid style={{display:'flex',marginLeft:"620px"}}>
                      <Grid marginRight='10px'>
                    
                    <Button  variant="outlined" onClick={() => dispatch(increment(id))}  >+</Button>
                    </Grid>
                    <Grid>
                    <span> { item.quantity} </span>
                    </Grid>
                    <Grid marginLeft='10px'>
                    <Button variant="outlined" onClick={() => dispatch(decrement(id))} >-</Button>
                    </Grid>
                    </Grid>
                    
                </Grid>
            
        </Grid>
    );
}