import rafael from "./Images/Rafael.png";
import "./Header.css";

const HeaderContent = () => {
  return (
    <div className="image-div">
      <div className="background-image">
        <div>
          <img className="foreground-image" src={rafael}></img>
        </div>
      </div>
      <div className="text-header">
        <h3 className="">Hello, it's me</h3>
        <h1 className="">Rafael Cavazzani</h1>
        <h2> Web Developer</h2>
        <p>
          I'm located in São Paulo, Brazil.. I have a passion for new challanges
          and love to create Web applications always taking the best of it
          learning as much as i can.
        </p>
      </div>
    </div>
  );
};

export default HeaderContent;
