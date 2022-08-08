import { useForm } from "react-hook-form";
import style from "../ProductForm/productForm.module.css";
import { joiResolver } from "@hookform/resolvers/joi";
import { Navigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../redux/auth/thunks";
import Joi from "joi";

const Login = () => {
  const auth = useSelector((state) => state.auth.auth).length > 0;
  const dispatch = useDispatch();
  const schema = Joi.object({
    email: Joi.string()
      .required()
      .regex(/^\w+([.-]?\w+)@\w+([.-]?\w+)(.\w{2,3})+$/)
      .messages({
        "string.empty": "Email is a required field",
        "string.pattern.base": "Email not valid",
      }),
    password: Joi.string().min(8).messages({
      "string.empty": "Password is a required field",
      "string.min": "Password must contain at least 8 characters",
    }),
  });
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ mode: "onBlur", resolver: joiResolver(schema) });
  const loginWithEmailAndPassword = (data, e) => {
    e.preventDefault();
    dispatch(login(data));
    reset();
  };
  if (auth) {
    return <Navigate to="/" replace />;
  }
  return (
    <div className={style.productFormView}>
      <div className={style.formContainer}>
        <form className="d-flex p-4 flex-column">
          <label htmlFor="email">Email</label>
          <input
            {...register("email", { required: true })}
            name="email"
            id="email"
            className="form-control my-2"
            type="text"
            placeholder="Insert your email"
          />
          <div>{errors.email?.type && <p>{errors.email.message}</p>}</div>
          <label htmlFor="password">Password</label>
          <input
            {...register("password", { required: true })}
            name="password"
            id="password"
            className="form-control my-2"
            type="password"
            placeholder="Insert your password"
          />
          <div>{errors.password?.type && <p>{errors.password.message}</p>}</div>
          <button
            className="btn btn-dark my-2"
            onClick={handleSubmit(loginWithEmailAndPassword)}
          >
            LOGIN
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
