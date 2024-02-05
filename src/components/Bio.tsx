import React from "react";

const BackgroundImage: React.FC = () => {
  return (
    <div
      className="bg-fixed bg-cover bg-center h-screen flex items-center justify-end"
      style={{ backgroundImage: "url('./src/images/banner.jpeg')" }}
    >
      <div className="bg-opacity-70 bg-black p-8 text-white text-right rounded-lg w-2/5">
        <h1 className="text-3xl font-bold mb-4 text-center">About Me</h1>
        <p className="text-lg">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Eleifend
          mi in nulla posuere sollicitudin aliquam ultrices. Tellus rutrum
          tellus pellentesque eu. Duis ut diam quam nulla. Id velit ut tortor
          pretium viverra suspendisse potenti nullam ac. Potenti nullam ac
          tortor vitae purus faucibus ornare. A condimentum vitae sapien
          pellentesque habitant. Scelerisque eleifend donec pretium vulputate.
          Odio euismod lacinia at quis. Nisi quis eleifend quam adipiscing
          vitae. Consectetur adipiscing elit pellentesque habitant morbi. Cursus
          euismod quis viverra nibh. Sit amet volutpat consequat mauris nunc
          congue nisi vitae. Consectetur a erat nam at. Ut lectus arcu bibendum
          at varius vel pharetra vel.
        </p>
      </div>
    </div>
  );
};

export default BackgroundImage;
