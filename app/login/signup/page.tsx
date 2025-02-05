"use client";
import Eye from "@/components/icons/Eye";
import Eyeoff from "@/components/icons/EyeOff";
import Lock from "@/components/icons/Lock";
import Mail from "@/components/icons/Mail";
import { authEmailPW } from "@/lib/auth/authentication";
import { useRouter } from "next/navigation";
import { ChangeEventHandler, FormEventHandler, useState } from "react";
import Link from "next/link";

const Signup = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    passwordConfirmation: "",
  });

  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState({
    email: "",
    password: "",
    passwordConfirmation: "",
  });
  const router = useRouter();

  const handleChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    // Clear error when user starts typing
    setError((prev) => ({
      ...prev,
      [name]: "",
    }));
  };

  const validateForm = () => {
    let isValid = true;
    const newError = { email: "", password: "", passwordConfirmation: "" };

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email) {
      newError.email = "Email is required";
      isValid = false;
    } else if (!emailRegex.test(formData.email)) {
      newError.email = "Please enter a valid email";
      isValid = false;
    }

    // Password validation
    if (!formData.password) {
      newError.password = "Password is required";
      isValid = false;
    } else if (formData.password.length < 6) {
      newError.password = "Password must be at least 6 characters";
      isValid = false;
    }

    // Password confirmation validation
    if (!formData.passwordConfirmation) {
      newError.passwordConfirmation = "Password confirmation is required";
      isValid = false;
    } else if (formData.passwordConfirmation != formData.password) {
      newError.passwordConfirmation =
        "Password confirmation must equal to password.";
      isValid = false;
    }

    setError(newError);
    return isValid;
  };

  const handleSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    if (validateForm()) {
      try {
        const user = await authEmailPW(
          "SIGNUP",
          formData.email,
          formData.password,
        );
        if (user) {
          router.push("/");
        }
      } catch (error) {
        window.alert(error);
      }
    }
  };

  return (
    <div className="min-h-screen bg-neutral-50 dark:bg-neutral-900 flex flex-col justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        {/* Header */}
        <h2 className="text-center text-3xl font-bold text-neutral-900 dark:text-gray-100">
          Sim-ads user sign up
        </h2>
        <p className="mt-2 text-center text-sm text-neutral-800 dark:text-gray-200">
          Already have an account?{" "}
          <Link
            href="/login"
            className="font-medium text-blue-600 hover:text-blue-500"
          >
            Sign in
          </Link>
        </p>

        {/* Form */}
        <div className="mt-8 bg-white dark:bg-black py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Email field */}
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-black dark:text-white"
              >
                Email address
              </label>
              <div className="mt-1 relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Mail className="h-5 w-5 text-black dark:text-white" />
                </div>
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className={`appearance-none block bg-white dark:bg-black w-full pl-10 pr-3 py-2 border ${
                    error.email ? "border-red-500" : "border-gray-300"
                  } rounded-md shadow-sm placeholder-gray-400 text-black dark:text-white focus:outline-none focus:ring-blue-500 focus:border-blue-500`}
                  placeholder="Enter your email"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>
              {error.email && (
                <p className="mt-2 text-sm text-red-600">{error.email}</p>
              )}
            </div>

            {/* Password field */}
            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-black dark:text-white"
              >
                Password
              </label>
              <div className="mt-1 relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Lock className="h-5 w-5 text-black dark:text-white" />
                </div>
                <input
                  id="password"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  autoComplete="new-password"
                  required
                  className={`appearance-none block bg-white dark:bg-black w-full pl-10 pr-10 py-2 border ${
                    error.password ? "border-red-500" : "border-gray-300"
                  } rounded-md shadow-sm placeholder-gray-400 text-black dark:text-white focus:outline-none focus:ring-blue-500 focus:border-blue-500`}
                  placeholder="Create a password"
                  value={formData.password}
                  onChange={handleChange}
                />
                <button
                  type="button"
                  className="absolute inset-y-0 right-0 pr-3 flex items-center"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? (
                    <Eyeoff className="h-5 w-5 text-black dark:text-white" />
                  ) : (
                    <Eye className="h-5 w-5 text-black dark:text-white" />
                  )}
                </button>
              </div>
              {error.password && (
                <p className="mt-2 text-sm text-red-600">{error.password}</p>
              )}
            </div>

            {/* Password confirmation field */}
            <div>
              <label
                htmlFor="passwordConfirmation"
                className="block text-sm font-medium text-black dark:text-white"
              >
                Password confirmation
              </label>
              <div className="mt-1 relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Lock className="h-5 w-5 text-black dark:text-white" />
                </div>
                <input
                  id="passwordConfirmation"
                  name="passwordConfirmation"
                  type={showPassword ? "text" : "password"}
                  autoComplete="password confirm"
                  required
                  className={`appearance-none block bg-white dark:bg-black w-full pl-10 pr-10 py-2 border ${
                    error.passwordConfirmation
                      ? "border-red-500"
                      : "border-gray-300"
                  } rounded-md shadow-sm placeholder-gray-400 text-black dark:text-white focus:outline-none focus:ring-blue-500 focus:border-blue-500`}
                  placeholder="Confirm a password"
                  value={formData.passwordConfirmation}
                  onChange={handleChange}
                />
                <button
                  type="button"
                  className="absolute inset-y-0 right-0 pr-3 flex items-center"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? (
                    <Eyeoff className="h-5 w-5 text-black dark:text-white" />
                  ) : (
                    <Eye className="h-5 w-5 text-black dark:text-white" />
                  )}
                </button>
              </div>
              {error.passwordConfirmation && (
                <p className="mt-2 text-sm text-red-600">
                  {error.passwordConfirmation}
                </p>
              )}
            </div>

            {/* Submit button */}
            <div>
              <button
                type="submit"
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                Sign Up
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
