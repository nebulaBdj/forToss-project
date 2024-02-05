

export const callProductData = async ()  => {
    try {
        const data = await fetch("http://35.76.53.28:8080/mall",{
            method: "GET",
        });

        if(!data.ok) {
            throw new Error(`${data.status} 에러 발생`);
        }

        const toJson = await data.json();
        console.log(toJson);

        return toJson

    } catch (error) {
        // console.error(error.message);
        throw error;
    }
}