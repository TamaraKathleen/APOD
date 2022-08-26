import api from "../api"

export async function searchPlanetary(){
    try {
        const result = await api.get();
        return result.data
    } catch (error) {
        console.log(error)
        return []
    }
}

export async function searchByDate(data){
    try {
        const result = await api.get(`${data}`);
        return result.data
    } catch (error) {
        console.log(error)
        return []
    }
}