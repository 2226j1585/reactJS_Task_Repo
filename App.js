import React from "react";
function PersonalDetails() {
  let Display = () => {
    let name = document.getElementById("name").value;
    let dob = document.getElementById("dob").value;
    let connum = document.getElementById("connum").value;
    let age = document.getElementById("age").value;
    let email = document.getElementById("email").value;
    let add = document.getElementById("add").value;
    alert("Hi " + name + " You've submitted the form!");
  };
  return (
    <>
      <h1>Personal Details Form</h1>
      <br></br>
      <label>Name:</label>
      <input type="text" id="name" name="name" placeholder="Enter Your Name" />
      <br />
      <br />
      <label>Age:</label>
      <input type="number" id="age" name="age" placeholder="Enter Your Age" />
      <br />
      <br />
      <label>DOB:</label>
      <input type="date" id="dob" name="dob" />
      <br />
      <br />
      <label>Contact Number:</label>
      <input
        type="tel"
        id="connum"
        name="connum"
        placeholder="Enter Your Number"
      />
      <br />
      <br />
      <label>Email:</label>
      <input
        type="email"
        id="email"
        name="email"
        placeholder="Enter Your Email Id"
      />
      <br />
      <br />
      <label>Address:</label>
      <textarea
        id="add"
        name="add"
        rows="5"
        cols="30"
        placeholder="Enter Your Address here!"
      ></textarea>{" "}
      <br />
      <br />
      <button onClick={Display}>Submit</button>
    </>
  );
}

export default PersonalDetails;
