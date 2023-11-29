import React from "react";
import Lottie from "lottie-react";
import { useState } from "react";
import team from "../assets/team";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
const LoginPage = (props) => {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const loginform = async (e) => {
    e.preventDefault();
    try {
      const c = await axios.post("/usersignin", user, {
        withCredentials: true,
      });
      if (c.status === 200) {
        toast.success(c.data.msg);
        props.details.setRole("loggedin");
        navigate("/");
      }
    } catch (error) {
      if (error.response) {
        toast.success(error.response.data.error);
      } else {
        toast.success("Some error occured");
      }
    }
  };

  const handleChange = (event) => {
    setUser({ ...user, [event.target.name]: event.target.value });
  };

  return (
    <>
    
      <div>
        <div className="mx-auto max-w-7xl px-4">
          <div className="mx-auto max-w-5xl  py-12 md:py-24">
            <div className="grid items-center justify-items-center gap-y-10 lg:grid-cols-2 shadow-xl h-2/3">
              <div className="flex items-center justify-center ">
                <div
                  className="px-2 md:px-12 "
                  style={{ width: "350px", height: "350px" }}
                >
                  <p className="text-2xl font-bold text-gray-900 md:text-4xl text-center">
                    Login
                  </p>
                  <form
                    action=""
                    className="mt-8 space-y-4 w-full"
                    onSubmit={loginform}
                  >
                    <div className="grid w-full  items-center gap-1.5 mb-7">
                      <label
                        className="text-sm font-medium leading-none text-gray-700 peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        htmlFor="user_name"
                      >
                        Email
                      </label>
                      <input
                        className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm "
                        type="text"
                        placeholder="Email"
                        id="user_name"
                        name="email"
                        autoComplete="email"
                        value={user.email}
                        onChange={handleChange}
                      />
                    </div>

                    <div
                      className="grid w-full  items-center gap-1.5"
                      style={{ marginBottom: "20px" }}
                    >
                      <label
                        className="text-sm font-medium leading-none text-black peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        htmlFor="email"
                      >
                        Password
                      </label>
                      <input
                        className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm"
                        type="password"
                        placeholder="Password"
                        autoComplete="current-password"
                        id="email"
                        name="password"
                        value={user.password}
                        onChange={handleChange}
                      />
                    </div>

                    <button
                      type="submit"
                      // onClick={handleLogin}
                      className="w-full rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                    >
                      Login
                    </button>
                  </form>
                </div>
              </div>
              {/* <img
                            alt="Login"
                            className="hidden max-h-full w-full rounded-lg object-cover lg:block"
                            src="https://images.unsplash.com/photo-1543269664-56d93c1b41a6?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzZ8fGhhcHB5JTIwcGVvcGxlfGVufDB8fDB8fA%3D%3D&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=60"
                        /> */}
              <Lottie animationData={team} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
