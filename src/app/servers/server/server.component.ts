import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Params } from '@angular/router';

import { ServersService } from '../servers.service';
import {provideTranslator} from 'angular-translator';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styles: ['./server.component.css'],
  providers: [ provideTranslator('servers')]
})
export class ServerComponent implements OnInit {
  server: {id: number, name: string, status: string};

  constructor(private serversService: ServersService, private route: ActivatedRoute) { }

  ngOnInit() {
    const id = +this.route.snapshot.params['id'];
    this.server = this.serversService.getServer(id);
    this.route.params
    .subscribe(
      (params: Params) => {
        this.server = this.serversService.getServer(+params['id']);
      }
    );
  }

}
