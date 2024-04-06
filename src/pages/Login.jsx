import { Link, useLocation, useNavigate } from "react-router-dom";
import Navbar from "./shared/Navbar";
import { useContext } from "react";
import { AuthContext } from "../AuthProvider";


const Login = () => {

  const {signIn} = useContext(AuthContext)
  const location = useLocation()

  const navigate = useNavigate()

    const handleLogin = (event) => {

        event.preventDefault();
        const form = new FormData(event.currentTarget);
        const email = form.get('email');
        const password = form.get('password')
       
        signIn(email, password)
        .then(result=> {
          console.log(result)
          navigate(location?.state? location.state : '/')
        })
        .catch(error=> {
          console.log(error)
        })
    }
    return (
      <div>
        <Navbar></Navbar>
        <h2 className="text-3xl text-center font-bold">Please Login</h2>
        <div className="card-body md:3/4 lg:w-1/2 mx-auto">
          <form onSubmit={handleLogin} className="">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="Email"
                name="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="Password"
                className="input input-bordered"
                required
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Login</button>
            </div>
          </form>
          <p className="text-center mt-5">
            Do not have an account? Please <Link className="text-blue-700 font-bold underline" to="/register">Register</Link>
          </p>
        </div>
      </div>
    );
};

export default Login;