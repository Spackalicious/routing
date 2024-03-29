import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, ResolveFn, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";
import { ServersService } from "../servers.service";


interface Server {
    id: number; 
    name: string;
    status: string;
}

@Injectable()
export class ServerResolver implements ResolveFn<Server> {

    constructor(private serversService: ServersService ) { }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Server> | Promise<Server> | Server {
        return this.serversService.getServer(+route.params['id'])
    }

}