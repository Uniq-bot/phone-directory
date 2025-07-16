import axios from "axios";

const baseUrl='./datas.json'

const getAll=()=>axios.get(baseUrl);

const add = (newContact) => axios.post(baseUrl, newContact);

const update = (id, updatedContact) => axios.put(`${baseUrl}/${id}`, updatedContact);

const remove = (id) => axios.delete(`${baseUrl}/${id}`);



export default {
    getAll:getAll,
    add:add,
    update:update,
    remove:remove
    

}