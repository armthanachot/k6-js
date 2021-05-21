import http from 'k6/http';
import { sleep } from 'k6';
export default function () {
    console.log("555555555");
    http.get('http://test.k6.io');
    sleep(1);
}