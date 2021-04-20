import React, { Component } from "react";

const Profile = () => {
  return (
    <div className="content">
      <div>
        <img src="https://img.freepik.com/free-vector/ocean-sea-beach-nature-tranquil-landscape_33099-2248.jpg?size=626&ext=jpg&ga=GA1.2.1356500412.1617235200" />
      </div>
      <div>
        <img
          className="avatarImage"
          src="https://i.guim.co.uk/img/media/684c9d087dab923db1ce4057903f03293b07deac/205_132_1915_1150/master/1915.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=14a95b5026c1567b823629ba35c40aa0"
        />
      </div>
      <div>
        My posts
        <div>New post</div>
        <div>
          <div>Post 1</div>
          <div>Post 2</div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
