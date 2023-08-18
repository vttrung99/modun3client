import React from 'react';
import api from '@api';
import './Register.scss'
export default function Register() {
  return (
    <div className="mask d-flex align-items-center h-100 gradient-custom-3">
                <div className="container h-100">
                    <div className="row d-flex justify-content-center align-items-center h-100">
                        <div className="col-12 col-md-9 col-lg-7 col-xl-6">
                            <div className="card" style={{ borderRadius: 15 }}>
                                <div className="card-body p-5">
                                    <h2 className="text-uppercase text-center mb-5">
                                        REGISTER
                                    </h2>
                                    <form
                                       onSubmit={async (e) => {
                                        e.preventDefault();
                                
                                        let newUser = {
                                          user_name: e.target.user_name.value,
                                          email: e.target.email.value,
                                          first_name: e.target.first_name.value,
                                          last_name: e.target.last_name.value,
                                          password: e.target.password.value,
                                        }
                                
                                
                                          let result = await api.users.register(newUser)
                                
                                          if (result.status != 200) {
                                            alert(result.response.data.message)
                                          }else {
                                            alert(result.data != undefined ? result.data.message : result.message)
                                          }
                                        
                                
                                      }
                                    
                                    }
                                    style={{width:"2000px",padding:"10px"}}

                                    >
                                        <div className="">
                                            <input
                                                placeholder=" User Name"
                                                name="user_name"
                                                type="text"
                                                id="form3Example1cg"
                                                className="form-control form-control-lg border"
                                                
                                            />
                                        </div>
                                        <br />
                                        <div className="form">
                                            <input
                                                placeholder="Email"
                                                name="email"
                                                type="email"
                                                id="form3Example3cg"
                                                className="form-control form-control-lg border"
                                            />
                                        </div>
                                        <br />
                                        <div className="form-outline">
                                            <input
                                                placeholder="First Name"
                                                name="first_name"
                                                type="text"
                                                id="form3Example3cg"
                                                className="form-control form-control-lg border"
                                            />
                                        </div>
                                        <br />
                                        <div className="form-outline">
                                            <input
                                                placeholder=" Last Name"
                                                name="last_name"
                                                type="text"
                                                id="form3Example3cg"
                                                className="form-control form-control-lg border"
                                            />
                                        </div>
                                        <br />
                                        <div className="form-outline ">
                                            <input
                                                placeholder="Password"
                                                name="password"
                                                type="password"
                                                id="form3Example4cg"
                                                className="form-control form-control-lg border"
                                            />
                                        </div>
                                        <br />
                                        <div className="d-flex justify-content-center">
                                            <button
                                                type="submit"
                                                className="btn btn-success btn-block btn-lg gradient-custom-4 text-body button-register border"
                                            >
                                                Register
                                            </button>
                                        </div>
                                        <br />
                                        <p
                                            style={{
                                                cursor: "pointer",
                                            }}
                                            className="text-center text-muted  mb-0"
                                        >
                                            Have already an account?
                                            <p
                                                onClick={() => {
                                                    window.location.href =
                                                        "/login";
                                                }}
                                                className="fw-bold text-body"
                                            >
                                                <u
                                                    style={{
                                                        cursor: "pointer",
                                                    }}
                                                >
                                                    Login here
                                                </u>
                                            </p>
                                        </p>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
  )
}




