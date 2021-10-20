import React, { useState, useEffect } from "react";
import Axios from "axios";
import setAuthToken from "../utils/setAuthToken";
import { Link } from "react-router-dom";
import WishListImages from "../components/WishListImages";

const { REACT_APP_SERVER_URL } = process.env;

const Profile = (props) => {
  const { handleLogout, user } = props;
  const { id, name, email, exp } = user;
  const [wishList, setWishList] = useState();
  const expirationTime = new Date(exp * 1000);
  let currentTime = Date.now();
  console.log("profile props", props);

  let token = localStorage.getItem("jwtToken");
  console.log(token);

  setAuthToken(token);

  useEffect(() => {
    const fetchWishList = async () => {
      const response = await Axios.get(`${REACT_APP_SERVER_URL}/wishlists`);
      console.log("fetch wishlist", response);
      setWishList(response.data.wishlist.images);
    };
    fetchWishList();
  }, []);
  console.log('wishlist', wishList)

  const allWishListImages = () => {
      return wishList.map((e, i) => {
          return (
            <WishListImages
            key={i}
            _id={e._id}
            name={e.name}
            url={e.url}
            location={e.location}
            subject={e.subject}
            />
          )
      })
  }

  let displayWishListImages = wishList ? ( allWishListImages()) : ( <h2>Hold your 🐎</h2>)

  // make a condition that compares exp and current time
  if (currentTime >= expirationTime) {
    handleLogout();
    alert("Session has ended. Please login to continue.");
  }

  const userData = user ? (
    <div>
        {displayWishListImages}
      <h1>Profile</h1>
      <p>Name: {name}</p>
      <p>Email: {email}</p>
      <p>ID: {id}</p>
    </div>
  ) : (
    <h2>Loading...</h2>
  );

  const errorDiv = () => {
    return (
      <div className="text-center pt-4">
        <h3>
          Please <Link to="/login">login</Link> to view this page
        </h3>
      </div>
    );
  };

  return <div className="text-center pt-4">{user ? userData : errorDiv()}</div>;
};

export default Profile;
