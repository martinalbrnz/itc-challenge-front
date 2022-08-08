import { useEffect } from "react";
import style from "./productForm.module.css";
import { useForm } from "react-hook-form";
import { joiResolver } from "@hookform/resolvers/joi";
import { useDispatch, useSelector } from "react-redux";
import { createProduct } from "../../redux/products/thunks";
import { getBrands } from "../../redux/brands/thunks";
import Joi from "joi";
import { Navigate } from "react-router-dom";

const ProductForm = () => {
  const auth = useSelector((state) => state.auth.auth).length > 0;
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getBrands());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const brands = useSelector((state) => state.brands.list);
  const schema = Joi.object({
    name: Joi.string()
      .required()
      .trim()
      .messages({ "string.empty": "Name is a required field" }),
    description: Joi.string().messages({
      "string.empty": "Description is a required field",
    }),
    image_url: Joi.string().uri().messages({
      "string.empty": "Image URL is a required field",
      "string.uri": "Image URL must be a valid URL",
    }),
    price: Joi.number().min(0).precision(2).required().messages({
      "number.base": "Price is a required field",
      "number.min": "Price should be a positive number",
    }),
    brand: Joi.string().length(24).required().messages({
      "string.empty": "Brand is a required field",
    }),
  });
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ mode: "onBlur", resolver: joiResolver(schema) });
  const submitNewProduct = (data, e) => {
    e.preventDefault();
    dispatch(createProduct(data));
    reset();
  };
  if (!auth) {
    return <Navigate to="/" replace />;
  }
  return (
    <div className={style.productFormView}>
      <div className={style.formContainer}>
        <form className="d-flex p-4 flex-column">
          <label htmlFor="name">Name</label>
          <input
            {...register("name", { required: true })}
            name="name"
            id="name"
            className="form-control my-2"
            type="text"
            placeholder="Product name"
          />
          <div>{errors.name?.type && <p>{errors.name.message}</p>}</div>
          <label htmlFor="description">Description</label>
          <input
            {...register("description", { required: true })}
            name="description"
            id="description"
            className="form-control my-2"
            type="text"
            placeholder="Product description"
          />
          <div>
            {errors.description?.type && <p>{errors.description.message}</p>}
          </div>
          <label htmlFor="image_url">Image URL</label>
          <input
            {...register("image_url", { required: true })}
            name="image_url"
            id="image_url"
            className="form-control my-2"
            type="text"
            placeholder="Product image url"
          />
          <div>
            {errors.image_url?.type && <p>{errors.image_url.message}</p>}
          </div>
          <label htmlFor="brand">Brand</label>
          <select
            name="brand"
            id="brand"
            {...register("brand", { required: true })}
            className="form-control my-2"
          >
            <option value="" disabled selected>
              Select a brand
            </option>
            {brands.map((brand) => {
              return (
                <option key={brand._id} value={brand._id}>
                  {brand.name}
                </option>
              );
            })}
          </select>
          <div>{errors.brand?.type && <p>{errors.brand.message}</p>}</div>
          <label htmlFor="price">Price</label>
          <input
            {...register("price", { required: true })}
            name="price"
            id="price"
            className="form-control my-2"
            type="number"
            placeholder="Product price"
          />
          <div>{errors.price?.type && <p>{errors.price.message}</p>}</div>
          <button
            className="btn btn-dark my-2"
            onClick={handleSubmit(submitNewProduct)}
          >
            SUBMIT
          </button>
        </form>
      </div>
    </div>
  );
};

export default ProductForm;
