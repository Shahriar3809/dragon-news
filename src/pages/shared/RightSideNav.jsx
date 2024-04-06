import {
  FaGoogle,
  FaGithub,
  FaFacebookF,
  FaTwitter,
  FaInstagram,
} from "react-icons/fa";
import qZone1 from "../../assets/qZone1.png";
import qZone2 from "../../assets/qZone2.png";
import qZone3 from "../../assets/qZone3.png";

const RightSideNav = () => {
  return (
    <div className=" border border-black">
      <div className="p-4 space-y-3 mb-4 ">
        <h2 className="text-3xl">Login With</h2>
        <button className="btn btn-outline w-full">
          <FaGoogle />
          Google
        </button>
        <button className="btn btn-outline w-full">
          <FaGithub />
          Github
        </button>
      </div>

      <div className="p-4 mb-4">
        <h2 className="text-3xl">Find Us On</h2>
        <a
          href=""
          className="p-4 border border-black rounded-t-lg flex items-center gap-3"
        >
          <FaFacebookF className="bg-white rounded-full text-2xl p-1" />
          Facebook
        </a>
        <a
          href=""
          className="p-4 border-x border-black flex items-center gap-3"
        >
          <FaTwitter className="bg-white rounded-full text-2xl p-1" />
          Twitter
        </a>
        <a
          href=""
          className="p-4 border border-black rounded-b-lg flex items-center gap-3"
        >
          <FaInstagram className="bg-white rounded-full text-2xl p-1" />
          Instagram
        </a>
      </div>

      <div className="p-4 space-y-3 mb-4 ">
        <h2 className="text-3xl">q Zone</h2>
        <img src={qZone1} alt="" />
        <img src={qZone2} alt="" />
        <img src={qZone3} alt="" />
      </div>
    </div>
  );
};

export default RightSideNav;
