import React, { Component } from "react";
import imgOne from "../assets/img-one.jpg";
import imgTwo from "../assets/img-two.jpg";
import imgThree from "../assets/img-three.jpg";
import imgFour from "../assets/img-four.jpg";
import "../Styles/Hero.css";
import $ from "jquery";
class Hero extends Component {
  state = {};
  componentDidMount() {
    var elements = $(".img, .text").toArray();
    console.log("value of elements: ", elements);
    // window.addEventListener("scroll", function () {
    //   elements.forEach(function (item) {
    //     console.log("value", $(window));
    //     if ($(document).scrollTop() >= $(item).offset().top - 500) {
    //       $(item).addClass("reveal");
    //       console.log("item: ", item);
    //     }
    //   });
    // });

    $(window).scroll(function () {
      elements.forEach(function (item) {
        if ($(document).scrollTop() >= $(item).offset().top - 400) {
          $(item).addClass("reveal");
          $(item).removeClass("hide");
        } else if ($(document).scrollTop() <= $(item).offset().top - 400) {
          // $(item).addClass("reveal");
          $(item).removeClass("reveal");
          $(item).addClass("hide");
          //   console.log("item: ", $(item));
        }

        console.log("scrollTop Value: ", $(document).scrollTop());
        console.log("item offset Value: ", $(item).offset().top - 400);
      });
    });
    $(window).scroll(function () {});
    elements.forEach(function (item) {
      if ($(document).scrollTop() >= $(item).offset().top - 400) {
        $(item).addClass("reveal");
      }
    });
  }

  render() {
    return (
      <div className="content">
        <div className="container">
          <h1 className="text">Title Text One</h1>
          <div className="img">
            <img src={imgOne} alt="" />
          </div>
          <p className="text">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Autem
            doloremque voluptatem quod maxime debitis nesciunt corrupti sit ipsa
            recusandae, provident nisi, praesentium ipsam commodi. Consequuntur
            ea voluptate hic sapiente animi!
          </p>
        </div>

        <div className="container">
          <h1 className="text">Title Text Two</h1>
          <div className="img">
            <img src={imgTwo} alt="" />
          </div>
          <p className="text">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Autem
            doloremque voluptatem quod maxime debitis nesciunt corrupti sit ipsa
            recusandae, provident nisi, praesentium ipsam commodi. Consequuntur
            ea voluptate hic sapiente animi!
          </p>
        </div>
        <div className="container">
          <h1 className="text">Title Text Three</h1>
          <div className="img">
            <img src={imgThree} alt="" />
          </div>
          <p className="text">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Autem
            doloremque voluptatem quod maxime debitis nesciunt corrupti sit ipsa
            recusandae, provident nisi, praesentium ipsam commodi. Consequuntur
            ea voluptate hic sapiente animi!
          </p>
        </div>
        <div className="container">
          <h1 className="text">Title Text Four</h1>
          <div className="img">
            <img src={imgFour} alt="" />
          </div>
          <p className="text">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Autem
            doloremque voluptatem quod maxime debitis nesciunt corrupti sit ipsa
            recusandae, provident nisi, praesentium ipsam commodi. Consequuntur
            ea voluptate hic sapiente animi!
          </p>
        </div>
      </div>
    );
  }
}

export default Hero;
