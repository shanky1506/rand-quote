import { Component, OnInit } from '@angular/core';
import { Quote } from '../../../models/quote';
import {QetQuoteService } from '../../services/qet-quote.service'


@Component({
  selector: 'app-quote-box',
  templateUrl: './quote-box.component.html',
  styleUrls: ['./quote-box.component.css']
})
export class QuoteBoxComponent implements OnInit {
  quote:Quote = {
    quote : "hahaha ",
    author : " sashank"
  };  
  constructor() { }

  ngOnInit(): void {
    this.quote = this.getQuote();
    console.log("init")
  }
  //
  handleClick(){
    this.quote = this.getQuote(); 
    console.log("onClick")
  }

  getQuote() :Quote{

    return this.quote ;
  }

}
