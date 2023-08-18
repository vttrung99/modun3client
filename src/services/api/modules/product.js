import axios from "axios";

export default {
  create: async (formData) => {
    return await axios.post(
      `${process.env.REACT_APP_SERVER_HOST_API}/products`, //http://127.0.0.1:4000/apis/v1/products
      formData,
      {
        headers: {
            "Content-Type": "multipart/form-data"
        }
      }
    )
  },
  findMany: async () => {
    return await axios.get(
      `${process.env.REACT_APP_SERVER_HOST_API}/products`
    )
  }
};
