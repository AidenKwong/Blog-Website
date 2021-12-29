import styles from "./signin.module.css";
import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { signIn } from "../../../api/auth";

const initialformData = {
  email: "",
  password: "",
};

export default function index() {
  const [formData, setFormData] = useState(initialformData);
  const [invalid, setInvalid] = useState(false);
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await signIn(formData);

      if (response.status == 200) {
        router.push("/");
        localStorage.setItem("profile", JSON.stringify(response.data));
      }
    } catch (error) {
      setLoading(false);
      setInvalid(true);
    }
  };
  return (
    <div>
      <Link href="/">Back to homepage</Link>
      <div className={styles.main}>
        <form className={styles.form} onSubmit={handleSubmit}>
          <div className={styles.title}>Sign In</div>
          <div className={styles.page}>
            <div className={styles.instruction}>
              Please enter your email address and password
            </div>
            <div className={styles.input}>
              <div>
                <input
                  required
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  placeholder="email address"
                  className={styles.inputField}
                ></input>
              </div>

              <div>
                <input
                  required
                  type="password"
                  placeholder="password"
                  className={styles.inputField}
                  onChange={(e) =>
                    setFormData({ ...formData, password: e.target.value })
                  }
                ></input>
              </div>
              {invalid && (
                <div className={styles.invalid}>
                  invalid email address or password
                </div>
              )}
            </div>
            {loading ? (
              <div>Signing in...</div>
            ) : (
              <div className={styles.buttonContainer}>
                <pre className={styles.signUpLink}>
                  {"Don't have an account?\nClick "}
                  <Link href="/user/signup">
                    <span className={styles.link}>here</span>
                  </Link>
                  {" to sign up."}
                </pre>

                <button
                  type="submit"
                  className={`${styles.button} ${styles.confirmButton}`}
                >
                  Sign In
                </button>
              </div>
            )}
          </div>
        </form>
      </div>
    </div>
  );
}
