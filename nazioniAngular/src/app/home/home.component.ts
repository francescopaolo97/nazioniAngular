import { Component } from '@angular/core';
import { MyServiceService } from '../services/my-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  listaNazioni: any[];
  constructor(private service: MyServiceService) {
    this.listaNazioni = [];
  }

  ngOnInit() {
    this.service.getNazioni().subscribe({
      next: (e: any) => {
        this.listaNazioni = e.data;
        console.log(this.listaNazioni);
      },
    });
  }
}
