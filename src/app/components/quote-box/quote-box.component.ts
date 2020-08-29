import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-quote-box',
  templateUrl: './quote-box.component.html',
  styleUrls: ['./quote-box.component.css']
})
export class QuoteBoxComponent implements OnInit {
  quote = "Et tu Brute"
  author = "Julius Caeser"
  constructor() { }

  ngOnInit(): void {
  }
  //
  handleClick(){

  }

}
