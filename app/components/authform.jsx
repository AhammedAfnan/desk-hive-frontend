import { useState } from "react";

export default function Authform({
  title,
  showFullName = false,
  showPhone = true,
  buttonText,
  toggleText,
  toggleLinkText,
  toggleLinkHref,
}) {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    phone: "",
  });
  const [errors, setErrors] = useState({
    fullName: "",
    email: "",
    password: "",
    phone:"",
  });

  const validate = () => {
    const newErrors = {
      fullName: "",
      email: "",
      password: "",
      phone:"",
    };
    if (showFullName && !formData.fullName.trim()) {
      newErrors.fullName = "Full name is required.";
    }
    if(showPhone && !formData.phone.trim()) {
      newErrors.phone = "Phone number is required."
    }
    if (!formData.email.trim()) {
      newErrors.email = "Email is required.";
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      newErrors.email = "Enter a valid email.";
    }

    if (!formData.password.trim()) {
      newErrors.password = "Password is required.";
    } else if (formData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters.";
    }

    setErrors(newErrors);
    return Object.values(newErrors).every((error) => !error);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      console.log("Form submitted:", formData);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  return (
    <div className="flex h-screen">
      <div className="w-full bg-white flex flex-col items-center justify-center px-10">
        <div className="w-full max-w-lg">
          {/* Heading */}
          <h1 className="text-6xl text-black text-center font-semibold mb-20">
            {title}
          </h1>
          <form onSubmit={handleSubmit}>
            {/* First Name and Last Name Input Fields */}
            {showFullName && (
              <div className="mb-4 flex space-x-4">
                <div className="flex-1">
                  <label htmlFor="firstName" className="text-xl px-1">
                    First Name
                  </label>
                  <input
                    type="text"
                    name="firstName"
                    placeholder="John"
                    value={formData.firstName}
                    onChange={handleChange}
                    className="py-3 px-4 border-2 block w-full rounded-2xl shadow-sm bg-white text-black focus:ring-black focus:border-blue-100 focus:outline-none"
                  />
                  {errors.firstName && (
                    <p className="text-red-500 text-sm">{errors.firstName}</p>
                  )}
                </div>
                <div className="flex-1">
                  <label htmlFor="lastName" className="text-xl px-1">
                    Last Name
                  </label>
                  <input
                    type="text"
                    name="lastName"
                    placeholder="Doe"
                    value={formData.lastName}
                    onChange={handleChange}
                    className="py-3 px-4 border-2 block w-full rounded-2xl shadow-sm bg-white text-black focus:ring-black focus:border-blue-100 focus:outline-none"
                  />
                  {errors.lastName && (
                    <p className="text-red-500 text-sm">{errors.lastName}</p>
                  )}
                </div>
              </div>
            )}

            {/* Phone Number Input Field */}
            {showPhone && (
              <div className="mb-4">
                <label htmlFor="phone" className="text-xl px-1">
                  Phone Number
                </label>
                <input
                  type="text"
                  name="phone"
                  placeholder="+91 xxxxxxxxxx"
                  value={formData.phone}
                  onChange={handleChange}
                  className="mt-2 py-3 px-4 border-2 block w-full rounded-2xl shadow-sm bg-white text-black focus:ring-black focus:border-blue-100 focus:outline-none"
                />
                {errors.phone && (
                  <p className="text-red-500 text-sm">{errors.phone}</p>
                )}
              </div>
            )}

            {/* Email Address Input Field */}
            <div className="mb-4">
              <label htmlFor="email" className="text-xl px-1">
                Email Address
              </label>
              <input
                type="email"
                name="email"
                placeholder="example@example.com"
                value={formData.email}
                onChange={handleChange}
                className="mt-2 py-3 px-4 border-2 block w-full rounded-2xl shadow-sm bg-white text-black focus:ring-black focus:border-blue-100 focus:outline-none"
              />
              {errors.email && (
                <p className="text-red-500 text-sm">{errors.email}</p>
              )}
            </div>

            {/* Password Input Field  */}

            <div className="mb-4">
              <label htmlFor="password" className="text-xl px-1">
                Password
              </label>
              <input
                type="password"
                name="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleChange}
                className="mt-2 py-3 px-4 border-2 block w-full rounded-2xl shadow-sm bg-white text-black focus:ring-black focus:border-blue-100 focus:outline-none"
              />
              {errors.password && (
                <p className="text-red-500 text-sm">{errors.password}</p>
              )}
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full py-3 px-4 bg-black text-white rounded-full text-lg font-semibold mt-4"
            >
              {buttonText}
            </button>
          </form>
          {/* OR Divider */}
          <div className="flex items-center justify-between my-4">
            <div className="flex-1 border-t border-gray-300"></div>
            <span className="mx-2 text-gray-500">OR</span>
            <div className="flex-1 border-t border-gray-300"></div>
          </div>
          {/* Google and Facebook Login Buttons */}
          <div className="flex w-full space-x-2">
            <button
              type="button"
              className="w-1/2 py-3 px-4 bg-blue-800 text-white rounded-full text-lg font-semibold flex items-center justify-center"
            >
              <img
                src="google.svg"
                alt="Google Logo"
                className="w-5 h-5 mr-2"
              />
              Google
            </button>
            <button
              type="button"
              className="w-1/2 py-3 px-4 bg-blue-600 text-white rounded-full text-lg font-semibold flex items-center justify-center"
            >
              <img
                src="facebook.svg"
                alt="Facebook Logo"
                className="w-5 h-5 mr-2"
              />
              Facebook
            </button>
          </div>
          <div className="text-gray-500 text-center mt-4">
            {toggleText}{" "}
            <a href={toggleLinkHref} className="text-black underline">
              {toggleLinkText}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
