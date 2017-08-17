import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  allowNewServer = false;
  serverCreationStatus = "Server not ready";
  serverName = '';
  serverCreated = false;
  servers = ['testServer','testServer 2'];

  constructor() { 
    setTimeout(() => {
      this.allowNewServer = true;
    },2000);
  }

  ngOnInit() {
  }

  onCreateServer(){
    this.serverCreationStatus = "server is ready";
    this.serverName = "Akshay's Server";
    this.serverCreated = true;
    this.servers.push(this.serverName);

  }
}
