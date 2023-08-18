import axios from "axios";
import React, { useEffect, useState } from 'react'
import api from '@api' //src/services/api
// import './Admin.scss'
export default function ProductForm() {
    const [pictures, setPictures] = useState([]);
    const [products, setProducts] = useState([]);
    console.log("🚀 ~ file: Admin.jsx:7 ~ ProductForm ~ products:", products)
    const [categories, setCategories] = useState([]);
    try {
        useEffect(() => {
            axios
                .get("http://localhost:4000/apis/v1/categories")
                .then((res) => {
                    setCategories(res.data.data);
                });
        }, []);
    } catch (err) { }
    useEffect(() => {
        api.products.findMany()
            .then(res => {
                if (res.status == 200) {
                    setProducts(res.data.data)
                } else {
                    alert(res.data.message)
                }
            })
            .catch(err => {
                alert("Lỗi server")
            })
    }, [])
    function deleteSelectPicture(index) {
        let tempPictures = [...pictures];
        tempPictures = tempPictures.filter((picture, indexMap) => indexMap != index);
        setPictures(tempPictures);
    }

    //tao sp
    async function createProduct(eventForm) {
        eventForm.preventDefault(); // khử hành vi form

        let formData = new FormData();

        for (let i in pictures) {
            formData.append("pictures", pictures[i].file)
        }
        formData.append("category_id", eventForm.target.category_id.value)//category mặc định là 1
        formData.append("name", eventForm.target.name.value)
        formData.append("price", eventForm.target.price.value)
        formData.append("des", eventForm.target.des.value)

        api.products.create(formData)
            .then(res => {
                console.log("res", res)
            })
            .catch(err => {
                console.log("err", err)
                alert("Sập server!")
            })
    }
    return (
        <div style={{height:'auto'}}>
        <div >
            <div className="mask d-flex align-items-center h-100 gradient-custom-3"  >
                <div className="container h-100">
                    <div className="row d-flex justify-content-center align-items-center h-100" style={{width:"1300"}}>
                        <div className="col-12 col-md-9 col-lg-7 col-xl-6">
                            <div className="card" style={{ borderRadius: 15 }}>
                                <div className="card-body p-5">
                                    <h2 className="text-uppercase text-center mb-5">
                                        REGISTER
                                    </h2>
                                    <form style={{width:"2000px",padding:"10px"}}
                                        onSubmit={(e) => {
                                            createProduct(e)
                                        }}
                                    >
                                        <div className="form-outline">
                                            <select
                                                name="category_id"
                                                style={{
                                                    border: "1px solid black",
                                                    borderRadius: "5px",
                                                }}
                                            >
                                                {categories?.map((category, index) => (
                                                    <option key={index} value={category.id}>
                                                        {category.title}
                                                    </option>
                                                ))}
                                            </select>
                                        </div>
                                        <br />
                                        <div className="form-outline">
                                            <input type="text" name='name' className="form-control border" placeholder=" Name"/>
                                        </div>
                                        <br />
                                        <div className="form-outline">
                                            <input type="text" name='price' className="form-control border" placeholder=" Price" />
                                        </div>
                                        <br />
                                        <div className="form-outline">
                                            <textarea name="des" cols="30" rows="10" className="form-control border" placeholder=" des"></textarea>
                                        </div>
                                        <br />
                                        <div className="form-outline ">
                                            <input onChange={(e) => {
                                                if (e.target.files.length != 0) {
                                                    //console.log("đã chọn hình", e.target.files)
                                                    let tempPictures = [...pictures];

                                                    for (let i in e.target.files) {
                                                        if (i == "length") {
                                                            break;
                                                        }
                                                        let item = {
                                                            file: e.target.files[i],
                                                            url: URL.createObjectURL(e.target.files[i])
                                                        }
                                                        tempPictures.push(item);
                                                    }
                                                    setPictures(tempPictures);
                                                    e.target.value = null; // Reset the input value
                                                }
                                            }} type="file" multiple />
                                        </div>
                                        <br />
                                        <div className="form-outline">
                                            {
                                                pictures.map((picture, index) => (
                                                    <div>
                                                        <img style={{ width: '100px', height: '100px' }} onClick={() => {
                                                            deleteSelectPicture(index)
                                                        }} key={Date.now() * Math.random()} className='product_preview_img' src={`${picture.url}`} />
                                                    </div>
                                                ))
                                            }
                                        </div>
                                        <div className="d-flex justify-content-center">
                                            <button onClick={()=>{ window.location.href = "/admin"}}
                                              
                                            
                                                type="submit"
                                                className="btn btn-success btn-block btn-lg gradient-custom-4 text-body button-register border"
                                            >
                                                Add Product
                                            </button>
                                        </div>

                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div>
            <div className="container" style={{marginTop:"1000px"}}>
                {
                    products?.map((product, index) => (
                        <div key={Date.now() * Math.random()}>
                            <div>
                                <div key={product.id} className="user-card">
                                    <div className="card">
                                        <div className="bg-image hover-overlay ripple" data-mdb-ripple-color="light">
                                            <div style={{ width: '60%', height: '200px', textAlign: 'center', margin: 'auto' }}>
                                                <img
                                                    src={`${product.avatar}`}
                                                    className="img-fluid fixed-size-image"
                                                    alt="User Avatar"
                                                />
                                            </div>
                                            <a href="#!">
                                                <div className="mask" style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }} />
                                            </a>
                                        </div>
                                        <div className="card-body">
                                            <span className="card-title">{product.name}</span>
                                            <p className="card-text">{product.price}</p>
                                            <div className="button-container">
                                                <a href="#!" className="btn btn-primary" onClick={() => {
                                                    let datasss =
                                                    {
                                                        product_id: product.id,
                                                        quantity: 1,
                                                        note: "aaaa"
                                                    }


                                                    return setProduct(datasss)

                                                }}>
                                                    Add To Card
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                          

                        </div>
                    ))
                }
            </div>
        </div>
    </div>
    )
}




