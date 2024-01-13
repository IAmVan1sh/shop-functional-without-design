import {api} from "./api.ts";

export const authApi = api.injectEndpoints({
    endpoints: build => ({
        register: build.mutation({
            query: (args: {email: string, password: string}) => ({
                body: {...args},
                url: "/register",
                method: "POST"
            })
        }),
    })
})