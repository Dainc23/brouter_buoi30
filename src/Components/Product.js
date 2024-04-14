import React, { useEffect, useState } from 'react';
import axios from'axios'
import { Link } from 'react-router-dom';

const Product = () => {
    const url='https://661b930865444945d04fca10.mockapi.io/Product'
    const[data,setData]=useState(null)
    const getData=()=>{
        axios.get(url)
        .then(function(res){
            console.log(res)
            setData(res.data)
        })
        .catch(function(error){
            console.log(error)
        })
    }
    useEffect(()=>{
        getData();
    },[])
    return (
        <div>
            <h1>Day la day sach san pham</h1>
            {data&&data.map((item,index)=>(
                <Link to={`/Product/${item.id}`} key={index}>Chi tiet san{item.Ten}</Link>
            ))}

        </div>
    );
}

export default Product;
