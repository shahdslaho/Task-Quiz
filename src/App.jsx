// eslint-disable-next-line no-unused-vars
import React from 'react'
import { useForm } from "react-hook-form";
import z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";


const schema = z.object({
  name: z.string().min(2,{message:"name is required"}),
  email: z.string().min(5,{message:" Email is required"}),
  password: z.string()
    .min(8, { message: "Password must be at least 8 characters long" })
    .max(255),
  confirm: z.string()
    .min(8, { message: "Password must be at least 8 characters long" })
    .max(255)
}).refine((data) => data.password === data.confirm, {
  message: "Passwords do not match",
  path: ["confirm"], 
});

const App = () => {
 
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: zodResolver(schema) });
 

  const onSubmit = (data) => {
  console.log(data)
  };
  return (
    <div>
      <form  onSubmit={handleSubmit(onSubmit)}
        className="bg-white p-5 shadow-lg rounded-lg max-w-md mx-auto flex flex-col gap-4"
      >
        <div className="flex flex-col">
          <label htmlFor="task" className="text-gray-700 font-medium">
          Name
          </label>
          <input
            {...register("name" ) }
            type="text"
            id='name'
            name='name'
            placeholder="Enter your name"
            className="border border-gray-300 rounded-lg px-3 py-2 mt-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {errors.name && <p className="text-red-600 mt-1">{errors.name.message}</p>}
        </div>




        <div className="flex flex-col">
          <label htmlFor="task" className="text-gray-700 font-medium">
         Email
          </label>
          <input
            {...register("email")}
            type="email"
                id='email'
            name='email'
            placeholder="Enter your email"
            className="border border-gray-300 rounded-lg px-3 py-2 mt-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {errors.email && <p className="text-red-600 mt-1">{errors.email.message}</p>}
        </div>



        <div className="flex flex-col">
          <label htmlFor="task" className="text-gray-700 font-medium">
        Password
          </label>
          <input
            {...register("password") }
            type="password"
            placeholder="Enter your password"
            className="border border-gray-300 rounded-lg px-3 py-2 mt-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {errors.password && <p className="text-red-600 mt-1">{errors.password.message}</p>}
        </div>




        <div className="flex flex-col">
          <label htmlFor="task" className="text-gray-700 font-medium">
        Confirm Password
          </label>
          <input
            {...register("confirm") }
            type="password"
            placeholder="Confirm Password"
            className="border border-gray-300 rounded-lg px-3 py-2 mt-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {errors.confirm && <p className="text-red-600 mt-1">{errors.confirm.message}</p>}
        </div>






        <button
          type="submit"
          className="bg-blue-600 text-white font-bold px-5 py-2 rounded hover:bg-blue-700 transition"
        >
         Submit
        </button>
      </form>
    </div>
  )
}

export default App
