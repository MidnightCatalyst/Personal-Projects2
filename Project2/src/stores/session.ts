import { reactive } from "vue";
import type { User } from "./types";
import myFetch from "../services/myFetch";
import router from "../router";

const session = reactive( {
    user: null as User | null,
});
export async function api<T>(url: string, data: any = null, method?: string) {
    try{
        const response = await myFetch<T>(url, data, method);
        return response;
    }catch(error){
        throw error;
    }
}

export async function login(username: string, password: string) {
    
    await api<User>("/users", { username, password }, "POST").then((user) => {
        if(user.username === username){
            session.user = user;
            router.push("/");
        }else{
            session.user = null;
        }
    });
}

export async function register(username: string, password: string) {
    await api<User>("/users", { username, password }).then((user) => {
        session.user = user;
        router.push("/");
    });
}


export function logout() {
    session.user = null;
    router.push("/Login");
}



export default session;