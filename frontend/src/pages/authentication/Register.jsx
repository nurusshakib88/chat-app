import axios from "axios";

import "./Authentication.scss";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();

  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [confirmpassword, setConfirmpassword] = useState();
  const [password, setPassword] = useState();
  const [pic, setPic] = useState();

  const submitHandler = async () => {
    if (!name || !email || !password || !confirmpassword) {
      window.alert("All field");
      return;
    }
    if (password !== confirmpassword) {
      window.alert("Passwords Do Not Match");
    }
    console.log(name, email, password, pic);

    try {
      const config = {
        headers: {
          "Content-type": "application/json",
        },
      };
      const { data } = await axios.post(
        "/api/user",
        {
          name,
          email,
          password,
          pic,
        },
        config
      );
      console.log(data);

      console.log("Registration Successful");

      localStorage.setItem("userInfo", JSON.stringify(data));

      navigate("/chats");
    } catch (error) {
      console.log("Error Occured");
    }
  };

  const postDetails = (pics) => {
    if (pics === undefined) {
      console.log("Please Select an Image!");
      return;
    }
    console.log(pics);
    if (
      pics.type === "image/jpeg" ||
      pics.type === "image/png" ||
      pics.type === "image/jpg"
    ) {
      const data = new FormData();
      data.append("file", pics);
      data.append("upload_preset", "chat-app");
      data.append("cloud_name", "dp9ecoauy");
      fetch("https://api.cloudinary.com/v1_1/dp9ecoauy/image/upload", {
        method: "post",
        body: data,
      })
        .then((res) => res.json())
        .then((data) => {
          setPic(data.url.toString());
          console.log(data.url.toString());
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      console.log("Please Select an Image!");
      return;
    }
  };

  return (
    <div className="authentication">
      <div className="logo">buzzz</div>

      <div className="login-register">
        <form action="">
          <input
            name="name"
            placeholder="Enter Your Name"
            onChange={(e) => setName(e.target.value)}
            type="text"
          />

          <input
            type="email"
            name="email"
            placeholder="Enter Your Email Address"
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            type="password"
            name="password"
            placeholder="Enter Password"
            onChange={(e) => setPassword(e.target.value)}
          />

          <input
            type="password"
            name="confirmpassword"
            placeholder="Confirm password"
            onChange={(e) => setConfirmpassword(e.target.value)}
          />

          <input
            id="pic"
            name="pic"
            type="file"
            p={1.5}
            accept="image/*"
            onChange={(e) => postDetails(e.target.files[0])}
          />

          <button className="submit" onClick={submitHandler}>
            Sign Up
          </button>

          <p>
            Already have a account? <Link to="/">Log In</Link>
          </p>
        </form>
      </div>
    </div>
  );
};
export default Register;
