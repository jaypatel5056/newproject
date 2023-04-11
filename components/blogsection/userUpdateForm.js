import { React, useState } from "react";
import styles from "../../styles/blog/blogsForm.module.scss";
import { Accordion, Row, Col } from "react-bootstrap";
import dynamic from "next/dynamic";
import axios from "axios";

const userUpdateForm = ({ closeModal1, postId }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [inputData, setInputData] = useState({});

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = {
      postId,
      firstName,
      lastName,
      userName,
      email,
      password,
    };
    setInputData(data);
    console.log(JSON.stringify(data));
    try {
      const respone = axios.post("/api/updateuser", JSON.stringify(data), {
        headers: {
          Accept: "application/json, text/plain, */*",
          "Content-Type": "application/json",
        },
      });
      console.log("Response revevied");
      if (respone.status === 200) {
        console.log("Post updated successfully!");
        setSubmitted(true);
        setId("");
        setTitle("");
        setContent("");
        setEmail("");
      }
    } catch (error) {
      console.error(error);
    }

    console.log(data);

    if (inputData) {
      // console.log("from ");
      // console.log(inputData);
      // console.log(new1);
      // console.log(new2);
      //   const response = await fetch("/api/message", {
      //     method: "POST",
      //     body: JSON.stringify({ name, email, message }),
      //   });
    }
  };

  return (
    <div className={styles.formsection}>
      <div className={styles.h21}>
        {/* <h2> Get in tou​ch!</h2>
         */}
        <h2>Update Details</h2>
      </div>
      <div className={styles.form}>
        <form onSubmit={handleSubmit}>
          <input
            type="number"
            className={`mb-50 ${styles.name}`}
            onChange={(e) => {
              setFirstName(e.target.value);
              console.log(name);
            }}
            placeholder={postId}
            id="name-2ee9"
            name="postId"
            value={postId}
            readOnly
            required=""
          />

          <input
            type="text"
            className={styles.name}
            onChange={(e) => {
              setFirstName(e.target.value);
              console.log(name);
            }}
            placeholder="Enter the new firstname of the user"
            id="name-2ee9"
            name="firstname"
            value={firstName}
            required=""
          />
          <input
            type="text"
            className={styles.email}
            onChange={(e) => {
              setLastName(e.target.value);
            }}
            placeholder="Enter the new lastname of the user"
            id="name-2ee9"
            name="lastName"
            value={lastName}
            required=""
          />
          <input
            type="text"
            className={styles.message}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            placeholder="Enter the email of the user"
            id="name-2ee9"
            name="email"
            value={email}
            required=""
          />
          <input
            type="text"
            className={styles.email}
            onChange={(e) => {
              setUserName(e.target.value);
            }}
            placeholder="Enter the new username"
            id="name-2ee9"
            name="userName"
            value={userName}
            required=""
          />
          <input
            type="text"
            className={styles.email}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            placeholder="Enter the new password  "
            id="name-2ee9"
            name="password"
            value={password}
            required=""
          />
          <button className={styles.button}>SUBMIT</button>
        </form>
      </div>
    </div>
  );
};

export default userUpdateForm;
