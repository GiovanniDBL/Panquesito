import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2'
@Component({
  selector: 'app-declaracion',
  templateUrl: './declaracion.component.html',
  styleUrls: ['./declaracion.component.css']
})
export class DeclaracionComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  buttonsi() {
    Swal.fire({
      title: 'pitito',
      width: 600,
      padding: '3em',
      imageUrl: 'https://tercetocomunicacion.es/wp-content/uploads/2017/05/minions.gif',
      imageWidth: 400,
      imageHeight: 300,
      imageAlt: 'Custom image',
      color: '#716add',
      background: '#fff url(https://sweetalert2.github.io/images/trees.png)',
      backdrop: `
        rgba(0,0,123,0.4)
        url("https://sweetalert2.github.io/images/nyan-cat.gif")
        left top
        no-repeat
      `
    })
  }
}
