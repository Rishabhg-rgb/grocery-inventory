import React, { useEffect } from 'react'
import { useState } from 'react'
import { base_url } from '../config'

const GetProducts = () => {
    const [products, setProducts] = useState([])
    useEffect(() => {
        GetProducts()
    }, [])
    const GetProducts = async () => {
        const url = base_url + "/products/get"
        const response = await fetch(url)
        const responseJson = await response.json()
        if (responseJson.status == 200) {
            console.log(responseJson, "12")
            setProducts(responseJson.data)
        }
    }

    return (
        <div className="container mt-5">
            <h2>Product List</h2>
            <div className="row">
                {/* <!-- Example of a product card (repeat this block for each product) --> */}
                {products.length != 0 && products.map((value, key) => {
                    return <div className="col-lg-4 mb-4"  key={key}>
                        <div className="card">
                            {/* <img src="https://via.placeholder.com/150" className="card-img-top" alt="Product Image" /> */}
                            <div className="card-body">
                                <h5 className="card-title">{value.productName}</h5>
                                <p className="card-text">Category:{value.category}</p>
                                <p className="card-text">Brand: {value.brand}</p>
                                <p className="card-text">Price: {value.unitPrice}</p>
                                <p className="card-text">In Stock: {value.quantityInStock}</p>
                                <p className="card-text">Unit of Measure:{value.unitOfMeasure}</p>
                            </div>
                        </div>
                    </div>

                })
                }
                {/* <!-- End of product card example --> */}
            </div>
        </div>
    )
}

export default GetProducts