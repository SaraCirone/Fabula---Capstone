import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SalutiDataService } from 'src/services/data/saluti-data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

    utente: string = "";

  constructor(private route: ActivatedRoute, private salutiSrv : SalutiDataService) { }

  ngOnInit(): void {

    this.utente = this.route.snapshot.params['userid'];
  }

  saluti : string = "";

  getSaluti = () : void => {
    this.salutiSrv.getSaluti(this.utente).subscribe(
        response => this.handleResponse(response)
    );
  }

handleResponse(response:object) {
    this.saluti = response.toString();
    console.log(this.saluti);
}

}
