import { Component, OnInit, inject } from '@angular/core';
import { UsersService } from '../servicios/users.service';

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [],
  templateUrl: './users.component.html',
  styleUrl: './users.component.css'
})
export class UsersComponent implements OnInit{

   private servicioUsuario = inject(UsersService);
   
   users: any[]=[];

  ngOnInit(): void {
    this.servicioUsuario.getUsers().subscribe((resp:any)=>{
    this.users=resp.data;
    console.log('Usuarios ->' , this.users);
   });
  }

}
