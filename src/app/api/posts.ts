import axios from "@/utils/axios";
import { isAxiosError } from "axios";

export const getPosts = async () => {
  try {
    const response = await axios.get(`api/posts`);

    return response;
  } catch (error) {
    if (isAxiosError(error)) {
      return error.response;
    } else {
      console.log(error);
    }
  }
};

export const getPost = async (id: string) => {
  try {
    const response = await axios.get(`api/posts/${id}`);

    return response;
  } catch (error) {
    if (isAxiosError(error)) {
      return error.response;
    } else {
      console.log(error);
    }
  }
};

export const addPost = async (payload: IPostFormValues) => {
  try {
    const response = await axios.post(`api/posts`, {
      ...payload,
    });

    return response;
  } catch (error) {
    if (isAxiosError(error)) {
      return error.response;
    } else {
      console.log(error);
    }
  }
};

export const updatePost = async (
  id: string,
  payload: Partial<IPostFormValues>
) => {
  try {
    const response = await axios.patch(`api/posts/${id}`, payload);

    return response;
  } catch (error) {
    if (isAxiosError(error)) {
      return error.response;
    } else {
      console.log(error);
    }
  }
};

export const deletePost = async (id: string) => {
  try {
    const response = await axios.delete(`api/posts/${id}`);

    return response;
  } catch (error) {
    if (isAxiosError(error)) {
      return error.response;
    } else {
      console.log(error);
    }
  }
};
