export const postMallData = async(postId:number) => {
    try {
        const postdate = await fetch(`http://35.76.53.28:8080/mal l/${postId}`, {
            method: "DELETE",
        });

        if(!postdate.ok) {
            throw new Error(`${postdate.status} 에러 발생 in function`);
        }

        const json = await postdate.json();

        return json;
    } catch (error) {
        throw error;
    }
}