import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { errorContext } from 'rxjs/internal/util/errorContext';

@Component({
  selector: 'app-simulador',
  standalone: true,
  imports: [],
  templateUrl: './simulador.component.html',
  styleUrl: './simulador.component.css',
})
export class SimuladorComponent implements OnInit {
  datosProesas: string = '';
  datosObservables: string[] = [];

  ngOnInit(): void {
    this.obtenerDatosConPromesa();
    this.obtenerDatosConObservables().subscribe({
      next: (dato) =>this.datosObservables.push(dato),
      complete: () => console.log('Observable completado'),
    });
    
  }

  obtenerDatosConPromesa() {
    const promesa = new Promise<string>((resolve, reject) => {
      setTimeout(() => {
        resolve('Datos recibidos de la promesa');
      }, 2000);
    });

    promesa
      .then((datos) => {
        this.datosProesas = datos;
        console.log(datos);
      })
      .catch((error) => console.log(console.error()));
  }

  obtenerDatosConObservables(): Observable<string>{
    return new Observable<string>((subscriber)=>{
      subscriber.next('Primer dato del observable');
      setTimeout(()=> subscriber.next('Segundo dato del observable'),1000);
      setTimeout(()=> subscriber.next('Tercer dato del observable'),2000);
      setTimeout(()=> subscriber.complete(),3000);
    });
  }
}
