import React from "react";
import DMphoto from "../images/Fall 2021 Profile (500) copy.png";
import AMphoto from "../images/AndrewMoss_Photo.jpg";
import SPphoto from "../images/Sara2023.jpg";

export default function TheTeam() {
  return (
    <div className="p-1 rounded-lg ">
      <div className="p-3 bg-white rounded-lg">
        {/* <h2 className="mb-1 text-xl font-medium">Our Team</h2> */}
        {/* <p className="mb-3 text-sm">
          All four of us are in the same CS 456 class and came together as a team to tackle this project head on. Andrew Moss, Sara Peel, David Murdock, This class/Our Majors/BYU? Andrew Moss - BYU
          Compter Science Sara Peel - BYU Computer Science David Murdock - BYU MSB Information Systems Published on ___ Supervised by Laura Dahl, a professional UI designer and professor at BYU and
          Utah Tech University.
        </p> */}
        <div className="flex flex-row justify-between">
          { PersonCard("Andrew Moss", AMphoto, "Computer Science") }
          { PersonCard("Sara Peel", SPphoto, "Computer Science") }
          { PersonCard("David Murdock", DMphoto, "MSB Information Systems") }
        </div>
        <div className="w-full text-center py-2 my-6 border-y-2">
          <p>Supervised by <b>Laura Dahl</b>, professional UX designer and professor at BYU and Utah Tech University</p>
        </div>
      </div>
    </div>
  );
}

function PersonCard(name, image, major) {
  return (
    <div className="flex flex-row">
      <img className={`w-24 h-24 rounded-full object-cover object-center`} src={image} alt={"Profile Image"}/>
      <div className="flex items-center px-4">
        <p>
          <b>{ name }</b>
          <br/>
          { major }
        </p>
      </div>
    </div>
  );
}
