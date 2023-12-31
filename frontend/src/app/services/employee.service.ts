import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Employee } from "../models/employee.model";
import { Observable } from "rxjs/internal/Observable";

@Injectable({
    providedIn: 'root',
})

export class EmployeeService {
    readonly url: string = 'http://localhost:8080/';

    constructor(private http: HttpClient) { }

    getEmployees(): Observable<Employee[]> {
        return this.http.get<Employee[]>(
            `${this.url}employees`
        );
    }

    addEmployee(json: any) {
        return this.http.post(
            `${this.url}employees`, json
        );
    }

    public deleteEmployee(json: any) {
        console.log(json)
        return this.http.delete(
            `${this.url}employees/` + json.id, json.id

        )
    }
}