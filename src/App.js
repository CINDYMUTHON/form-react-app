import React from "react";
import { useForm } from "react-hook-form";
import "./App.css"; 

function App() {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="App">
      <div className="centered-container">
        <div className="form-container">
          <h2 className="text-2xl font-semibold mb-4">Registration Form</h2>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div>
              <label htmlFor="name" className="block font-medium text-gray-700">Name</label>
              <input
                {...register("name", {
                  required: "Name is required",
                })}
                type="text"
                id="name"
                className="w-full px-4 py-2 rounded border focus:ring focus:ring-blue-400"
              />
              {errors.name && (
                <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
              )}
            </div>

            <div>
              <label htmlFor="email" className="block font-medium text-gray-700">Email</label>
              <input
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                    message: "Invalid email address",
                  },
                })}
                type="email"
                id="email"
                className="w-full px-4 py-2 rounded border focus:ring focus:ring-blue-400"
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
              )}
            </div>

            <div>
              <label htmlFor="country" className="block font-medium text-gray-700">Country</label>
              <input
                {...register("country", {
                  required: "Country is required",
                })}
                type="text"
                id="country"
                className="w-full px-4 py-2 rounded border focus:ring focus:ring-blue-400"
              />
              {errors.country && (
                <p className="text-red-500 text-sm mt-1">{errors.country.message}</p>
              )}
            </div>

            <div>
              <label htmlFor="city" className="block font-medium text-gray-700">City</label>
              <input
                {...register("city", {
                  required: "City is required",
                })}
                type="text"
                id="city"
                className="w-full px-4 py-2 rounded border focus:ring focus:ring-blue-400"
              />
              {errors.city && (
                <p className="text-red-500 text-sm mt-1">{errors.city.message}</p>
              )}
            </div>

            <div>
              <button
                type="submit"
                className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
