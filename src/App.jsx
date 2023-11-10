import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import './App.css'
import Input from './Input'


const schema = yup.object({
    username: yup.string().required("Username is required field!"),
    number: yup.string().required("Phone number is required field!")
    .matches(
    /^[\+]?[0-9]{3}[)]?[-\&/.]?[0-9]{3}[-\&\.]?[0-9]{4,6}$/, 
    "Phone number is not valid!"),
    email: yup.string().required("Email is required field!").email("Email is not valid!"),
    password: yup.string().min(6, "Password should be at least 6 characters!"),
    confirmPassword: yup.string().oneOf([yup.ref("password")], "Password must be match!")
})

function App() {
  const { handleSubmit, register, reset, formState: {errors} } = useForm({
    resolver: yupResolver(schema)
  });

  const formSubmit = (data) => {
    console.log(data);
    reset();
  }

  return (
    <>
      <h1>React Registration Form</h1>
    <form onSubmit={handleSubmit(formSubmit)}>
      <Input 
        type="text" 
        label="Username"
        name='username' 
        id='username'
        register={{ ...register("username")}}
        errorMessage={errors.username?.message}
        />
      <Input 
        type="text"
        name='number' 
        label="Phone Number"
        id='number'
        register={{ ...register("number")}}
        errorMessage={errors.number?.message}
        />
      <Input 
        type="email" 
        name="email" 
        label="E-mail"
        id="email"
        register={{ ...register("email")}}
        errorMessage={errors.email?.message}
        />
      <Input 
        type="password" 
        label="Password"
        name="password" 
        id="password"  
        register={{ ...register("password")}}
        errorMessage={errors.password?.message}
        />
      <Input 
        label="Confirm Password"
        type="password" 
        name="confirm-password" 
        id="confirm-password" 
        register={{ ...register("confirmPassword")}}
        errorMessage={errors.confirmPassword?.message}
         />

      <button type="submit">Submit</button>
    </form>
    </>
  )
}

export default App
