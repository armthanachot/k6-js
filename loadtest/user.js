import http from 'k6/http';
import { sleep } from 'k6';
const findAllUser = ()=>{
    const res = http.get('http://localhost:4400/api/v1/users')
    // console.log(res.body);
}
const createUser = ()=>{
    const url='http://localhost:4400/api/v1/users'
    const data = {
        data: [
            {
                username: "Amppcmk",
                password:"Amp123456798",
                email: "amptest@mail.com",
                fullName: "Patchara Mangkorn",
                type: "Person"
            },
            {
                username: "Armthtj",
                password:"Arm123456798",
                email: "armtest@mail.com",
                fullName: "Thanachot Tesjaroen",
                type: "Organization"
            }
        ]
    }
    const params = {
        headers:{
            'Content-Type':'application/json'
        }
    }
    const res = http.post(url,JSON.stringify(data),params)
    // console.log("res: ",Object.keys(res));
    console.log(res.status);
    console.log(res.body);
}
export let options={
    vus:1000,
    iterations:1000,
    duration:'2s'
}
// 1000 คน 1000 รอบ ภายใน 20 วิ
export default function () {
    findAllUser()
}