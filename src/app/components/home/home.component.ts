import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

  }

  buttonsi() {
    Swal.fire({
      title: 'VOLTEA A VERME',
      width: 600,
      padding: '3em',
      imageUrl: 'assets/fotito.jpeg',
      imageWidth: 400,
      imageHeight: 400,
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
