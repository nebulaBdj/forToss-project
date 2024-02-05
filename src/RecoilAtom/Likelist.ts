import { atom } from "recoil";

interface Like {
    like_id: number;
    board_id: number;
    user_list: number[];
}

export const LikeList = atom<Like[]>({
    key:'likelist',
    default: [{
        like_id: 0,
        board_id: 1,
        user_list: [
            0, 1, 3
        ]
    }]
})