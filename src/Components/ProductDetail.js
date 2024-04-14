import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const ProductDetail = () => {
    const {id}=useParams()
    const url=`https://661b930865444945d04fca10.mockapi.io/Product/${id}`
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
            <h1>ten san phan: {data&&data.Ten}</h1>
            <h2>Gia: {data&&data.Gia}</h2>
            <h3>Xuat su: {data&&data.XuatSU}</h3>
            
        </div>
    );
}

export default ProductDetail;
