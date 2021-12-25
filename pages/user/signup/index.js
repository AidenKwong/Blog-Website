import styles from "./signup.module.css";
import { useState, useEffect } from "react";
import Link from "next/link";

import { signUp } from "../../../api/auth";

const initialformData = {
  username: "",
  email: "",
  age: 0,
  gender: "male",
  password: "",
  confirmPassword: "",
};

const age = [...Array(121).keys()];

const validateEmail = (email) => {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};

export default function index() {
  const [page, setPage] = useState(0);
  const [formData, setFormData] = useState(initialformData);
  const handleSubmit = async (formData) => {
    await signUp(formData)
      .then((response) => {
        if (response.status == 200) setPage((page) => page + 1);
      })
      .catch((error) => console.log(error));
  };

  return (
    <div>
      <Link href="/">Back to home page</Link>
      <div className={styles.main}>
        <div className={styles.form}>
          <div className={styles.title}>Sign Up Form</div>
          {page < 4 && (
            <div className={styles.description}>
              Sign up in Opinet to share your creative ideas and opinions
            </div>
          )}
          {page == 4 && (
            <div className={styles.description}>
              Below is your account details. Click "confirm" to finish sign up
              proccess.
            </div>
          )}
          {page == 5 && (
            <div className={styles.description}>
              Congratulation! You have successfully signed up. Log in now to
              publish your first post.
              <div>
                <Link href="/">Back to home page</Link>
              </div>
            </div>
          )}
          {page === 0 && (
            <div className={styles.page}>
              <div className={styles.instruction}>
                Please enter your username
              </div>
              <input
                onChange={(e) =>
                  setFormData({ ...formData, username: e.target.value })
                }
                value={formData.username}
                maxLength="20"
                placeholder="username"
                className={styles.inputField}
              ></input>
            </div>
          )}
          {page === 1 && (
            <div className={styles.page}>
              <div className={styles.instruction}>
                please enter your email address
              </div>
              <input
                placeholder="email address"
                className={styles.inputField}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                value={formData.email}
              ></input>
              {!validateEmail(formData.email) && (
                <div>email address is not valid</div>
              )}
            </div>
          )}
          {page === 2 && (
            <div className={styles.page}>
              <div className={styles.instruction}>
                Select your age and gender
              </div>
              <div className={styles.instruction}>
                age
                <select
                  className={styles.select}
                  onChange={(e) =>
                    setFormData({ ...formData, age: e.target.value })
                  }
                >
                  {age.map((age) => (
                    <option key={age}>{age}</option>
                  ))}
                </select>
                gender
                <select
                  className={styles.select}
                  onChange={(e) =>
                    setFormData({ ...formData, gender: e.target.value })
                  }
                >
                  <option>Male</option>
                  <option>Female</option>
                </select>
              </div>
            </div>
          )}
          {page === 3 && (
            <div className={styles.page}>
              <div className={styles.instruction}>
                please enter your password
              </div>
              <input
                type="password"
                value={formData.password}
                placeholder="password"
                className={styles.inputField}
                onChange={(e) =>
                  setFormData({ ...formData, password: e.target.value })
                }
              ></input>
              <input
                type="password"
                value={formData.confirmPassword}
                placeholder="confirm password"
                className={styles.inputField}
                onChange={(e) =>
                  setFormData({ ...formData, confirmPassword: e.target.value })
                }
              ></input>
              {(formData.password != formData.confirmPassword) &
              (formData.confirmPassword.length != 0) ? (
                <div>password doesn't match</div>
              ) : (
                <div></div>
              )}
            </div>
          )}
          {page === 4 && (
            <div className={styles.page}>
              <div className={styles.instruction}>
                Account details:
                <div>username: {formData.username}</div>
                <div>email address: {formData.email}</div>
                <div>age: {formData.age}</div>
                <div>gender: {formData.gender}</div>
              </div>
            </div>
          )}
          <div className={styles.pagination}>
            {page < 5 && (
              <button
                disabled={page === 0}
                className={`${styles.button} ${
                  page == 0 && styles.displayNone
                }`}
                onClick={() => setPage((page) => page - 1)}
              >
                previous
              </button>
            )}

            {page === 4 && (
              <button
                className={`${styles.button} ${styles.confirmButton}`}
                onClick={() => handleSubmit(formData)}
              >
                Confirm
              </button>
            )}
            {page < 4 && (
              <button
                disabled={
                  (page === 0) & (formData.username.length === 0) ||
                  (page === 1) &
                    (formData.email.length === 0 ||
                      !validateEmail(formData.email)) ||
                  (page === 2) & (formData.age === 0) ||
                  (page === 3) &
                    (formData.password.length === 0 ||
                      formData.password != formData.confirmPassword)
                }
                className={`${styles.button} ${styles.confirmButton}`}
                onClick={() => setPage((page) => page + 1)}
              >
                Next
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
