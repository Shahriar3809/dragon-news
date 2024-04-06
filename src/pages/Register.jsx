import { Link } from "react-router-dom";
import Navbar from "./shared/Navbar";
import { useContext } from "react";
import { AuthContext } from "../AuthProvider";


const Register = () => {
    const { createUser} = useContext(AuthContext);

    

    const handleRegister = (event) => {
      event.preventDefault();
      const form = new FormData(event.currentTarget);
      const email = form.get('email')
      // const name = form.get('name')
      const password = form.get('password')
      // const photo = form.get('photo')
      
      createUser(email, password)
      .then((result) => console.log(result.user))
      .catch((error)=> console.log(error))
    }
    return (
      <div>
        <Navbar></Navbar>
        <h2 className="text-3xl text-center font-bold">Please Register</h2>
        <div className="card-body md:3/4 lg:w-1/2 mx-auto">
          <form onSubmit={handleRegister} className="">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                placeholder="Name"
                name="text"
                className="input input-bordered"
                required
              />

              <label className="label">
                <span className="label-text">Photo</span>
              </label>
              <input
                type="text"
                placeholder="Photo URL"
                name="photo"
                className="input input-bordered"
                required
              />

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

             
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Register</button>
            </div>
          </form>
          <p className="text-center mt-5">
            Already have an account? Please{" "}
            <Link className="text-blue-700 font-bold underline" to="/login">
              Login
            </Link>
          </p>
        </div>
      </div>
    );
};

export default Register;