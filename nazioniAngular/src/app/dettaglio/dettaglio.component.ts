import { ChangeDetectorRef, Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Nazione } from '../model/Nazione';
import { MyServiceService } from '../services/my-service.service';

@Component({
  selector: 'app-dettaglio',
  templateUrl: './dettaglio.component.html',
  styleUrls: ['./dettaglio.component.scss'],
})
export class DettaglioComponent {
  parametro!: number;
  nazione!: Nazione;
  constructor(
    private activatedRoute: ActivatedRoute,
    private service: MyServiceService,
    private cd: ChangeDetectorRef
  ) {}

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe({
      next: (e: any) => {
        console.log(e.params.id);
        this.parametro = +e.params.id;
      },
    });
    this.service.getNazioni().subscribe({
      next: (e: any) => {
        console.log(e.data);
        this.nazione = e.data.find(
          (l: any, index: number) => index == this.parametro
        );
        console.log('nazione attuale', this.nazione);
      },
    });
    // this.cd.detectChanges();
  }
}
