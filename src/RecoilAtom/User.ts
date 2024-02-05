import {atom} from "recoil";

interface User {
    user_id: number;
    email: string;
    nickName: string;
    pw: string;
}

export const Userlist = atom<User[]>({
    key: "user",
    default: [
        {
            user_id: 0,
            email: "dong1234@naver.com",
            nickName: "dong",
            pw: "1234",
        }
    ],
})