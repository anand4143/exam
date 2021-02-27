import { Injectable} from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { AuthenticationServiceService } from './authentication-service.service';


@Injectable({ providedIn: 'root'})

export class AuthGuard implements CanActivate{

    constructor(private authenticationService: AuthenticationServiceService, private router: Router){}

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot){
        const currentUser = this.authenticationService.currentUserValue;
        if(currentUser){
            return true;
        }
        this.router.navigate(['/auth/login'], {queryParams:{returnUrl: state.url}});
        return false;
    }
}