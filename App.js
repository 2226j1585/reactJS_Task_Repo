import React from "react";

function Form() {
  let Display_Form = () => {
    let uname = document.getElementById("uname").value;
    let udob = document.getElementById("udob").value;
    let ucno = document.getElementById("ucno").value;
    let uage = document.getElementById("uage").value;
    let uemail = document.getElementById("uemail").value;
    let uaddr = document.getElementById("uaddr").value;
    alert("Hello" + uname + " You'r Form has been Submitted!");
  };

  return (
    <>
      <h1>Personal Details</h1>
      <br></br>
      <label>Name:</label>
      <input type="text" id="uname" name="uname" placeholder="Enter Your Name" />
      <br />
      <label>Age:</label>
      <input type="number" id="uage" name="uage" placeholder="Enter Your Age" />
      <br />
      <label>Date Of Birth:</label>
      <input type="date" id="udob" name="udob" />
      <br />
      <label>Contact Number:</label>
      <input type="tel" id="ucno" name="ucno" placeholder="Enter Your Contact Number" />
      <br />
      <label>Email Address:</label>
      <input type="email" id="uemail" name="uemail" placeholder="Enter Your Email Address" />
      <br />
      <label>Physical Address:</label>
      <textarea id="uaddr" name="uaddr" rows="4" cols="35" placeholder="Enter Your Address" ></textarea>{" "}
      <br />
      <button onClick={Display_Form}>Submit</button>
    </>
  );
}

export default Form;
