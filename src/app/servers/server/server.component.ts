import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { ServersService } from '../servers.service';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrl: './server.component.css'
})
export class ServerComponent implements OnInit {
  server: {id: number, name: string, status: string};

  constructor(
    private serversService: ServersService, 
    private route: ActivatedRoute, 
    private router: Router
  ) { }

  // In theory, we could use a resolver for this ngOnInit code, but the resolver we're using is deprecated. 
  ngOnInit() {
    const id = +this.route.snapshot.params['id']; //the "+" converts the string 'id' to a number! wow! 
    this.server = this.serversService.getServer(id);
    this.route.params 
      .subscribe(
        (params: Params) => {
          this.server = this.serversService.getServer(+params['id']); // also needs to be a number, not a string. 
        }
      );
  }

  onEdit() {
    // this.router.navigate(['/servers', this.server.id, 'edit']); // we're already on this path, so we can use a relative path, like below: 
    // if we want to use a relative path here when using the navigate method, you need to set up the relativeTo property for the second argument
    this.router.navigate(['edit'], {relativeTo: this.route, queryParamsHandling: 'preserve'});
  }

}
