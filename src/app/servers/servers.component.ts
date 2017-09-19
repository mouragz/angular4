import { Component, OnInit } from '@angular/core';
import { ServersService } from './servers.service';
import { Router,ActivatedRoute } from '@angular/router';
import {provideTranslator} from 'angular-translator';
@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styles: ['./servers.component.scss'],
  providers: [ provideTranslator('servers')]
})
export class ServersComponent implements OnInit {
  private servers: { id: number, name: string, status: string }[] = [];

  constructor(private serversService: ServersService,
              private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.servers = this.serversService.getServers();
  }

  onReload() {
     this.router.navigate(['/servers'],{relativeTo: this.route})
  }

}
