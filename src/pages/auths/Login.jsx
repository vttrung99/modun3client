import React, { useEffect } from 'react'
import validate from '@utils/validate';
import api from '@api';
import "./auth.scss"


export default function Login() {
  useEffect(() => {
    if (localStorage.getItem("token")) {
      window.location.href = "/";
    }
  })
  return (
    <div>
      <section
className="vh-100"
style={{
    // backgroundImage:
    //     'url("https://tse2.mm.bing.net/th?id=OIP.iY1APB9geJX58OkXhkHSmAHaFv&pid=Api&P=0&h=180")',
}}
>
<div className="container py-5 h-100">
    <div className="row d-flex justify-content-center align-items-center h-100">
        <div className="col col-xl-10">
            <div
                className="card"
                style={{
                    borderRadius: "1rem",
                    height: "500px",
                }}
            >
                <div className="row g-0">
                    <div className="col-md-6 col-lg-5 d-none d-md-block">
                        <img
                            src="https://tse2.mm.bing.net/th?id=OIP.iY1APB9geJX58OkXhkHSmAHaFv&pid=Api&P=0&h=180"
                            alt="login form"
                            className="img-fluid"
                            style={{
                                borderRadius: "1rem 0 0 1rem",
                                height: "500px",
                            }}
                        />
                    </div>

                    
                    <div className="col-md-6 col-lg-7 d-flex align-items-center">
                        <div className="card-body p-4 p-lg-5 text-black">
                            <form
                               onSubmit={async (e) => {
                                e.preventDefault();
                                let data = {
                                  user_name: e.target.user_name.value,
                                  password: e.target.password.value,
                                  type: !validate.isEmail(e.target.user_name.value) // Email false, User Name true
                                }
                        
                                try {
                                  alert("ok đã gửi")
                                  let result = await api.users.login(data);
                                  if (result.status == 200) {
                                    if (result.data.token == undefined) {
                                      alert("Đăng nhập thất bại")
                                    } else {
                                      localStorage.setItem("token", result.data.token);
                                      alert("Đăng nhập Thành Công")
                                      window.location.href = "/";
                                    }
                        
                        
                                  } else {
                                    alert(result.data.message)
                                  }
                                } catch { err } {
                        
                                }
                        
                              }}
                            >
                                <div className="d-flex align-items-center mb-3 pb-1">
                                    <h1 className="h1 fw-bold mb-0">
                                        {/* <img
                                            style={{
                                                width: "230px",
                                                height: "40px",
                                            }}
                                            
                                        /> */}
                                        Electronic
                                    </h1>
                                </div>
                                <h5
                                    className="fw-normal mb-3 pb-3"
                                    style={{ letterSpacing: 1 }}
                                >
                                    Sign into your account
                                </h5>
                                <div className="form-outline mb-4">
                                    <input
                                        placeholder="User Name or Email"
                                        name="user_name"
                                        type="text"
                                        id="form2Example17"
                                        className="form-control form-control-lg border"
                                    />
                                </div>
                                <div className="form-outline mb-4">
                                    <input
                                        placeholder=" Password"
                                        name="password"
                                        type="password"
                                        id="form2Example27"
                                        className="form-control form-control-lg border"
                                    />
                                </div>
                                <div className="pt-1 mb-4">
                                    <button
                                        className="btn btn-dark btn-lg btn-block button-login"
                                        type="submit"
                                    >
                                        Login
                                    </button>
                                </div>
                                <a
                                    className="small text-muted"
                                    href="#!"
                                >
                                    Forgot password?
                                </a>
                                <p
                                    className="mb-5 pb-lg-2"
                                    style={{
                                        color: "#393f81",
                                        cursor: "pointer",
                                    }}
                                >
                                    Don't have an account?{" "}
                                    <a
                                        href="/register"
                                    >
                                        Register here
                                    </a>
                                </p>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</section>
    </div>


  )
}







