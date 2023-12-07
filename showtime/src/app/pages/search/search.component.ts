import { Component,OnInit } from '@angular/core';
import {FormControl,FormGroup} from "@angular/forms"
import { MovieapiserviceService } from 'src/app/services/movieapiservice.service';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  constructor(private service:MovieapiserviceService){}
  ngOnInit():void{}

  searchForm=new FormGroup({
    'movieName':new FormControl(null)
  });

  searchResult:any;
  submitForm(){
    console.log(this.searchForm.value,'searchform#');
    this.service.getSearchMovie(this.searchForm.value).subscribe((result)=>{
        console.log(result,'searchmovie##');
        this.searchResult = result.results;
    });
}
}
