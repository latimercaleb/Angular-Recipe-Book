import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from "@angular/router";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { map, tap, take } from "rxjs/operators";
import { AuthService } from "./auth.service";

@Injectable({
    providedIn: 'root'
})
export class AuthGuard implements CanActivate {
    constructor(private authService: AuthService, private router: Router){}
    // Note, its preferred to use URLTree for this
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | Observable<boolean> | Promise<boolean> {
        return this.authService.user.pipe(
            take(1),
            map(
            (user) => {
                return !!user;
            }
        ), tap(
            allowed => {
                if(!allowed){
                    this.router.navigate(['/login']);
                }
            }
        ));
    }
}