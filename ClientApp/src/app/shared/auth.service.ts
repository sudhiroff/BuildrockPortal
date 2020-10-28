import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
    providedIn: 'root'
})
export class AuthService {

    constructor() { }

    logout(): void {
        localStorage.setItem('isLoggedIn', 'false');
        localStorage.removeItem('token');
    }

    public isAuthenticated(): boolean {
        const token = localStorage.getItem('token');
        // Check whether the token is expired and return
        // true or false
        return false;
    }

    get fullName() {
        if (localStorage.getItem('user')) {
            const user = JSON.parse(localStorage.getItem('user'));
            return user['firstName'] + ' ' + user['lastName'];
        } else {
            return '';
        }
    }

    get loggedInUserId() {
        if (localStorage.getItem('user')) {
            const user = JSON.parse(localStorage.getItem('user'));
            return user['_id'];
        } else {
            return '';
        }
    }


    get role() {
        if (localStorage.getItem('user')) {
            const user = JSON.parse(localStorage.getItem('user'));
            return user['role'];
        } else {
            return '';
        }
    }

}