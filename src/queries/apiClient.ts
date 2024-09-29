import axios, { AxiosError, AxiosRequestConfig } from "axios";

export const axiosInstance = axios.create({
    baseURL: "/api/",
});

class APIClient<T, TResponse> {
    endpoint: string;
    constructor(endpoint: string) {
        this.endpoint = endpoint;
    }
    get = async (config?: AxiosRequestConfig): Promise<TResponse> => {
        try {
            const response = await axiosInstance.get<TResponse>(
                this.endpoint,
                config
            );
            return response.data;
        } catch (error) {
            if (error instanceof AxiosError)
                if (error.response && error.response.status === 400) {
                    throw new Error(error.response.data);
                } else {
                    throw new Error("An error occured!");
                }
            throw error;
        }
    };
    post = async (data: T, config?: AxiosRequestConfig): Promise<TResponse> => {
        try {
            const response = await axiosInstance.post<TResponse>(
                this.endpoint,
                data,
                config
            );
            return response.data;
        } catch (error) {
            if (error instanceof AxiosError)
                if (error.response) {
                    throw new Error(error.response.data);
                } else {
                    throw new Error("An error occured!");
                }
            throw error;
        }
    };
    patch = async (
        data: T,
        config?: AxiosRequestConfig
    ): Promise<TResponse> => {
        try {
            const response = await axiosInstance.patch<TResponse>(
                this.endpoint,
                data,
                config
            );
            return response.data;
        } catch (error) {
            if (error instanceof AxiosError)
                if (error.response) {
                    throw new Error(error.response.data);
                } else {
                    throw new Error("An error occured!");
                }
            throw error;
        }
    };
    delete = async (config?: AxiosRequestConfig): Promise<TResponse> => {
        try {
            const response = await axiosInstance.delete<TResponse>(
                this.endpoint,
                config
            );
            return response.data;
        } catch (error) {
            if (error instanceof AxiosError)
                if (error.response && error.response.status === 400) {
                    throw new Error(error.response.data);
                } else {
                    throw new Error("An error occured!");
                }
            throw error;
        }
    };
}

export default APIClient;
