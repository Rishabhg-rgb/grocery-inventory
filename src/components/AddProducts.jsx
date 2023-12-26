import React, { useState } from 'react'
import { base_url } from '../config'

const AddProducts = () => {
    const [data, setData] = useState({
        productName: "",
        category: "",
        brand: "",
        unitPrice: "",
        quantityInStock: "",
        unitOfMeasure: "each"
    })
    const updateState = (e) => {
        const name = e.target.name
        const value = e.target.value
        setData({ ...data, [name]: value })
    }

    const addProduct = async () => {
        const url = base_url + "/products/add"
        const headers = {
            "Content-type": "application/json"
        }
        const body = JSON.stringify({
            productName:data.productName,
            category:data.category,
            brand:data.brand,
            unitPrice:parseInt(data.unitPrice),
            quantityInStock:parseInt(data.quantityInStock),
            unitOfMeasure:data.unitOfMeasure
        })
        const config = {
            headers,
            body,
            method: "POST"
        }
        const response = await fetch(url, config)
        const responseJSON = await response.json()
        if (responseJSON.status == 201) {
            alert("Product Successfully Added")
            window.location.reload()
        }
        else {
            alert("some fields may empty")
        }
    }
    return (
        <div className="container">
            <div className="card">
                <div className="card-header bg-primary text-white">
                    <h2 className="mb-0">Add New Product</h2>
                </div>
                <div className="card-body">
                    <form id="addProductForm">
                        <div className="form-group">
                            <label htmlFor="productName">Product Name:</label>
                            <input type="text" className="form-control" id="productName" name="productName" value={data.productName} onChange={(e) => { updateState(e) }} required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="category">Category:</label>
                            <input type="text" className="form-control" id="category" name="category" value={data.category} onChange={(e) => { updateState(e) }} required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="brand">Brand:</label>
                            <input type="text" className="form-control" id="brand" name="brand" value={data.brand} onChange={(e) => { updateState(e) }} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="unitPrice">Unit Price:</label>
                            <input type="number" className="form-control" id="unitPrice" name="unitPrice" step="0.01" value={data.unitPrice} onChange={(e) => { updateState(e) }} required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="quantityInStock">Quantity in Stock:</label>
                            <input type="number" className="form-control" id="quantityInStock" name="quantityInStock" value={data.quantityInStock} onChange={(e) => { updateState(e) }} required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="unitOfMeasure">Unit of Measure:</label>
                            <select className="form-control" id="unitOfMeasure" name="unitOfMeasure" value={data.unitOfMeasure} onChange={(e) => { updateState(e) }}>
                                <option value="kg">kg</option>
                                <option value="liter">liter</option>
                                <option value="each">each</option>
                            </select>
                        </div>
                        <button type="button" className="btn btn-primary" onClick={() => { addProduct() }}>Add Product</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default AddProducts