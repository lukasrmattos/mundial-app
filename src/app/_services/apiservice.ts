import { HttpHeaders } from "@angular/common/http";

export class APIService {
    public static TOKEN : string = '';

    public static getHeader() {
        return new HttpHeaders({ 'Content-Type': 'application/json',
                                 'Authorization': 'Bearer ' + this.TOKEN,
                                 'Accept':'application/json',
                                 'Access-Control-Allow-Headers': '*'});
    }
}