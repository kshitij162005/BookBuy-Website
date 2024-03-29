import React from "react";
import { useForm } from "react-hook-form";
import "../Components/Register.css";
// import { Link } from 'react-router-dom';

const Register = () => {
  const [registrationSuccess, setRegistrationSuccess] = React.useState(false);
  const [formData, setFormData] = React.useState({});
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm();

  // storing the data which we are filling in form.
  const onSubmit = (data) => {
    setFormData(data);
    setRegistrationSuccess(true);
    // console logging it so we can see what the user have input in the form.
    console.log("Form Data:", data);
  };

  return (
    <>
      <div className="outerContainerR">
        <form className="Form" onSubmit={handleSubmit(onSubmit)}>
          <label>First Name</label>
          <input
            type="text"
            placeholder="Enter Your First Name Here"
            name="firstName"
            {...register("firstName", {
              required: "First Name is required",
              // checking the maximum qnd minimum length of the characters in first name
              minLength: {
                value: 3,
                message:
                  "Length of the name should be greater than 3 characters",
              },
              maxLength: {
                value: 30,
                message: "Length of the name cannot be more than 30 characters",
              },
            })}
          />
          {errors.firstName && (
            <p className="err">{errors.firstName.message}</p>
          )}

          <label>Last Name</label>
          <input
            type="text"
            placeholder="Enter Your Last Name Here"
            name="lastName"
            {...register("lastName", {
              required: "Last Name is required",
              // checking the maximum qnd minimum length of the characters in last name
              minLength: {
                value: 3,
                message:
                  "Length of the name should be greater than 3 characters",
              },
              maxLength: {
                value: 30,
                message: "Length of the name cannot be more than 30 charecter",
              },
            })}
          />
          {errors.lastName && <p className="err">{errors.lastName.message}</p>}

          <label>Email</label>
          <input
            type="email"
            placeholder="xyz@gmail.com"
            name="email"
            {...register("email", {
              required: "Email is required",
              // checking id the email contains @ symbol or not.
              pattern: { value: /^\S+@\S+$/i, message: "Invalid Email" },
            })}
          />
          {errors.email && <p className="err">{errors.email.message}</p>}

          <label>Password</label>
          <input
            type="password"
            placeholder="**********"
            name="password"
            {...register("password", {
              required: "Password is required",
              // checking if the passwords contains minimum number of characters.
              minLength: {
                value: 10,
                message:
                  "Length of the password should be more than 9 characters",
              },
              // checking if the password contains a minimum of one unique character or not.
              pattern: {
                value: /^.*[!@#$%^&*_-].*$/,
                message: "Password must contain at least one special character",
              },
            })}
          />
          {errors.password && <p className="err">{errors.password.message}</p>}

          <label>Confirm Password</label>
          <input
            type="password"
            placeholder="**********"
            name="confirmPassword"
            {...register("confirmPassword", {
              required: "Confirm Password is required",
              // checking if both the passwords match.
              validate: (value) =>
                value === watch("password") || "Passwords do not match",
              minLength: {
                value: 10,
                message:
                  "Length of the confirmPassword should be more than 9 characters",
              },
            })}
          />
          {errors.confirmPassword && (
            <p className="err">{errors.confirmPassword.message}</p>
          )}

          <input className="signUp" type="Submit" value={"SIGN UP"} />
        </form>

        <div className="success">
          {registrationSuccess && (
            <div>
              <p>Registration Successful!</p>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Register;
