import axios from "axios";
export const updateEvent = async (id, data) => {
    let res = await axios.put('' + id, data);
    return res;
};