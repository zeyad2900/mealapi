// import React, { useState } from "react";

// const ContactUs = () => {
//     const [formData, setFormData] = useState({
//         username: "",
//         email: "",
//         phone: "",
//         age: "",
//         password: "",
//         rePassword: "",
//     });

//     const [errors, setErrors] = useState({
//         username: "",
//         email: "",
//         phone: "",
//         age: "",
//         password: "",
//         rePassword: "",
//     });

//     const validateForm = () => {
//         let isValid = true;
//         const updatedErrors = { ...errors };

//         // Validate username
//         const usernameRegex = /^[a-zA-Z_]{3,20}$/;
//         if (!usernameRegex.test(formData.username)) {
//             updatedErrors.username = "Username must be 3-20 characters and contain only letters";
//             isValid = false;
//         } else {
//             updatedErrors.username = "";
//         }

//         // Validate email
//         const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
//         if (!emailRegex.test(formData.email)) {
//             updatedErrors.email = "Invalid email address";
//             isValid = false;
//         } else {
//             updatedErrors.email = "";
//         }

//         // Validate phone number (assuming US phone number format)
//         const phoneRegex = /^\d{11}$/;
//         if (!phoneRegex.test(formData.phone)) {
//             updatedErrors.phone = "Invalid phone number (11 digits)";
//             isValid = false;
//         } else {
//             updatedErrors.phone = "";
//         }

//         // Validate age (assuming age is a number between 18 and 99)
//         const ageRegex = /^(1[89]|[2-9]\d)$/;
//         if (!ageRegex.test(formData.age)) {
//             updatedErrors.age = "Age must be between 18 and 99";
//             isValid = false;
//         } else {
//             updatedErrors.age = "";
//         }

//         // Validate password (at least 8 characters)
//         if (formData.password.length < 8) {
//             updatedErrors.password = "Password must be at least 8 characters";
//             isValid = false;
//         } else {
//             updatedErrors.password = "";
//         }

//         // Validate re-entered password
//         if (formData.password !== formData.rePassword) {
//             updatedErrors.rePassword = "Passwords do not match";
//             isValid = false;
//         } else {
//             updatedErrors.rePassword = "";
//         }

//         setErrors(updatedErrors);
//         return isValid;
//     };

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         if (validateForm()) {
//             // Form is valid, you can submit it or perform other actions
//             console.log("Form is valid");
//         } else {
//             // Form is not valid, display errors
//             console.log("Form is not valid");
//         }
//     };

//     const handleChange = (e) => {
//         const { name, value } = e.target;
//         setFormData({
//             ...formData,
//             [name]: value,
//         });
//     };

//     return (
//         <form className="pt-5 container" onSubmit={handleSubmit}>
//             <div className="mb-3">
//                 <input className="form-control" placeholder="Enter Your Name" type="text" name="username" value={formData.username} onChange={handleChange} />
//                 <span className="text-danger">{errors.username}</span>
//             </div>
//             <div className="mb-3">
//                 <input className="form-control " placeholder="Enter Your Email" type="text" name="email" value={formData.email} onChange={handleChange} />
//                 <span className="text-danger">{errors.email}</span>
//             </div>
//             <div className="row">
//                 <div className="col-5 mb-3">
//                     <input className="form-control " placeholder="Enter Your Phone" type="text" name="phone" value={formData.phone} onChange={handleChange} />
//                     <span className="text-danger">{errors.phone}</span>
//                 </div>
//                 <div className="col-5 ms-auto mb-3">
//                     <input className="form-control " placeholder="Enter Your Age" type="text" name="age" value={formData.age} onChange={handleChange} />
//                     <span className="text-danger">{errors.age}</span>
//                 </div>
//             </div>
//             <div className="row">
//                 <div className="col-5 mb-3">
//                     <input className="form-control " placeholder="Enter Your Password" type="password" name="password" value={formData.password} onChange={handleChange} />
//                     <span className="text-danger">{errors.password}</span>
//                 </div>
//                 <div className="col-5 ms-auto mb-3">
//                     <input className="form-control " placeholder="Re Password" type="password" name="rePassword" value={formData.rePassword} onChange={handleChange} />
//                     <span className="text-danger">{errors.rePassword}</span>
//                 </div>
//             </div>
//             <button className="btn btn-primary" type="submit">
//                 Submit
//             </button>
//         </form>
//     );
// };

// export default ContactUs;

import React, { useState } from "react";

const ContactUs = () => {
    const [formData, setFormData] = useState({
        username: "",
        email: "",
        phone: "",
        age: "",
        password: "",
        rePassword: "",
    });

    const [errors, setErrors] = useState({
        username: "",
        email: "",
        phone: "",
        age: "",
        password: "",
        rePassword: "",
    });

    const validateUsername = (value) => {
        const usernameRegex = /^[a-zA-Z_]{3,20}$/;
        if (!usernameRegex.test(value)) {
            return "Username must be 3-20 characters and contain only letters";
        }
        return "";
    };

    const validateEmail = (value) => {
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if (!emailRegex.test(value)) {
            return "Invalid email address";
        }
        return "";
    };

    const validatePhone = (value) => {
        const phoneRegex = /^\d{11}$/;
        if (!phoneRegex.test(value)) {
            return "Invalid phone number (11 digits)";
        }
        return "";
    };

    const validateAge = (value) => {
        const ageRegex = /^(1[0-9]|[2-9][0-9])$/;
        if (!ageRegex.test(value)) {
            return "Age must be between 10 and 99";
        }
        return "";
    };

    const validatePassword = (value) => {
        if (value.length < 8) {
            return "Password must be at least 8 characters";
        }
        return "";
    };

    const validateRePassword = (value) => {
        if (value !== formData.password) {
            return "Passwords do not match";
        }
        return "";
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });

        // Perform validation on each input change
        const updatedErrors = { ...errors };
        switch (name) {
            case "username":
                updatedErrors.username = validateUsername(value);
                break;
            case "email":
                updatedErrors.email = validateEmail(value);
                break;
            case "phone":
                updatedErrors.phone = validatePhone(value);
                break;
            case "age":
                updatedErrors.age = validateAge(value);
                break;
            case "password":
                updatedErrors.password = validatePassword(value);
                break;
            case "rePassword":
                updatedErrors.rePassword = validateRePassword(value);
                break;
            default:
                break;
        }
        setErrors(updatedErrors);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Check if there are any errors in the errors object
        const isValid = Object.values(errors).every((error) => error === "");
        if (isValid) {
            console.log("valid")
        } else {
            
            console.log("in valid")
        }
    };

    return (
        <form className="pt-5 container" onSubmit={handleSubmit}>
            <div className="mb-3">
                <input className="form-control" placeholder="Enter Your Name" type="text" name="username" value={formData.username} onChange={handleInputChange} />
                <span className="text-danger">{errors.username}</span>
            </div>
            <div className="mb-3">
                <input className="form-control " placeholder="Enter Your Email" type="text" name="email" value={formData.email} onChange={handleInputChange} />
                <span className="text-danger">{errors.email}</span>
            </div>
            <div className="row">
                <div className="col-5 mb-3">
                    <input className="form-control " placeholder="Enter Your Phone" type="text" name="phone" value={formData.phone} onChange={handleInputChange} />
                    <span className="text-danger">{errors.phone}</span>
                </div>
                <div className="col-5 ms-auto mb-3">
                    <input className="form-control " placeholder="Enter Your Age" type="text" name="age" value={formData.age} onChange={handleInputChange} />
                    <span className="text-danger">{errors.age}</span>
                </div>
            </div>
            <div className="row">
                <div className="col-5 mb-3">
                    <input className="form-control " placeholder="Enter Your Password" type="password" name="password" value={formData.password} onChange={handleInputChange} />
                    <span className="text-danger">{errors.password}</span>
                </div>
                <div className="col-5 ms-auto mb-3">
                    <input className="form-control " placeholder="Re Password" type="password" name="rePassword" value={formData.rePassword} onChange={handleInputChange} />
                    <span className="text-danger">{errors.rePassword}</span>
                </div>
            </div>
            <button className=" btn btn-primary" type="submit">
                Submit
            </button>
        </form>
    );
};

export default ContactUs;
