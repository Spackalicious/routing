import { Injectable } from "@angular/core";
import { ActivatedRoute, ActivatedRouteSnapshot, CanActivateChildFn, CanActivateFn, Router, RouterStateSnapshot } from "@angular/router";
import { Observable } from 'rxjs';
import { AuthService } from "./auth.service";

@Injectable()
export class AuthGuard implements CanActivateFn, CanActivateChildFn {

    constructor(private authService: AuthService,
                private router: Router
    ) { }

    canActivate(
        route: ActivatedRouteSnapshot
        , state: RouterStateSnapshot
    ): Observable<boolean> | Promise<boolean> | boolean {
        return this.authService.isAuthenticated()
            .then(
                (authenticated: boolean) => {
                    if (authenticated) {
                        return true;
                    } else {
                        this.router.navigate(['/']);
                    }
                }
            );
    }

    canActivateChild(
        route: ActivatedRouteSnapshot
        , state: RouterStateSnapshot
    ) {
        return this.canActivate(route, state);
    }
}

