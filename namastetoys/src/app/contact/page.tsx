import React from "react";
import styles from "./contact.module.css";
import { useFormik } from "formik";
import * as Yup from "yup";
const signUpSchema = Yup.object({
    name:Yup.string().min(2).max(25).required("Please Enter Your Name"),
    email:Yup.string().email().required("Please Enter Your Email"),
    contact:Yup.string().min(10).max(10).required("Please Enter Your Contact No"),
    Message:Yup.string().min(20).required("please Enter Your Message"),
});

const initialValues = {
  name: "",
  email: "",
  contact: "",
  Message: "",
};

const Contact = () => {
  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues: initialValues,
      validationSchema: signUpSchema,
      onSubmit: (values, action) => {
        console.log(values);
        action.resetForm();
      },
    });
  console.log(errors);
  return (
    <div>
      <form onSubmit={handleSubmit} className={styles.mainform}>
        <div>
          <label htmlFor="name" className={styles.lable1}>
            Name
          </label>
          <br />
          <input
            type="name"
            autoComplete="off"
            name="name"
            className={styles.input1}
            placeholder="Name"
            value={values.name}
            onChange={handleChange}
            onBlur={handleBlur}
          />

          {errors.name && touched.name ? (
            <span className={styles.span}>
              <p className={styles.form}>{errors.name}</p>
            </span>
          ) : null}
        </div>

        <div className={styles.labeldiv1}>
          <label htmlFor="email" className={styles.lable2}>
            E-mail
          </label>
          <br />
          <input
            type="email"
            autoComplete="off"
            name="email"
            className={styles.input2}
            placeholder="email"
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
          />
        </div>
        {errors.email && touched.email ? (
          <span className={styles.span}>
            {" "}
            <p className={styles.form}>{errors.email}</p>
          </span>
        ) : null}

        <div className={styles.labeldiv2}>
          <label htmlFor="contact" className={styles.lable3}>
            Contact
          </label>
          <br />
          <input
            type="contact"
            autoComplete="off"
            name="contact"
            className={styles.input3}
            placeholder="contact"
            value={values.contact}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.contact && touched.contact ? (
            <span className={styles.span}>
              <p className={styles.form}>{errors.contact}</p>
            </span>
          ) : null}
        </div>
        <div className={styles.labeldiv3}>
          <label htmlFor="Message" className={styles.lable5}>
            Message
          </label>
          <br />
          <textarea
            name="Message"
            className={styles.input4}
            value={values.Message}
            onChange={handleChange}
            onBlur={handleBlur}
          ></textarea>
          {errors.Message && touched.Message ? (
            <span className={styles.span}>
              <p className={styles.form}>{errors.Message}</p>
            </span>
          ) : null}
        </div>
        <button type="submit" className={styles.button1}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default Contact;
