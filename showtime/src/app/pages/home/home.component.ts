import { Component } from '@angular/core';
import { Banner, MovieDetails } from 'src/app/movie.interface';
import { MovieapiserviceService } from 'src/app/services/movieapiservice.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  constructor(private service :MovieapiserviceService){}

  bannerResult:MovieDetails[]=[];
  trendingMovieResult:MovieDetails[]=[]
  actionMovieResult: MovieDetails[] = [];
  adventureMovieResult: MovieDetails[] = [];
  animationMovieResult: MovieDetails[] = [];
  comedyMovieResult: MovieDetails[] = [];
  documentaryMovieResult: MovieDetails[] = [];
  sciencefictionMovieResult: MovieDetails[] = [];
  thrillerMovieResult: MovieDetails[] = [];
  ngOnInit():void{
    this.bannerData();
    this.trendingdata()
    this.actionMovie();
    this.adventureMovie();
    this.comedyMovie();
    this.animationMovie();
    this.documentaryMovie();
    this.sciencefictionMovie();
    this.thrillerMovie();


  
  }


  bannerData(){
    this.service.bannerApiData().subscribe((result)=>{
      console.log(result.results,"bannerresult#")
      if(result.results)
      this.bannerResult=result.results;
    });
  }

  trendingdata(){
    this.service.trendingMovieApiData().subscribe((result)=>{
      console.log(result,"#trendingresult")
      console.log(typeof result.results)
      if(result.results)
      this.trendingMovieResult=result.results
    })
  }
  // action 
  actionMovie() {
    this.service.fetchActionMovies().subscribe((result) => {
      if(result.results)
      this.actionMovieResult = result.results;
    });
  }




  // adventure 
  adventureMovie() {
    this.service.fetchAdventureMovies().subscribe((result) => {
      if(result.results)
      this.adventureMovieResult = result.results;
    });
  }


  // animation 
  animationMovie() {
    this.service.fetchAnimationMovies().subscribe((result) => {
      if(result.results)
      this.animationMovieResult = result.results;
    });
  }


  // comedy 
  comedyMovie() {
    this.service.fetchComedyMovies().subscribe((result) => {
      if(result.results)
      this.comedyMovieResult = result.results;
    });
  }

  // documentary 
  documentaryMovie() {
    this.service.fetchDocumentaryMovies().subscribe((result) => {
      if(result.results)
      this.documentaryMovieResult = result.results;
    });
  }


  // science-fiction 
  sciencefictionMovie() {
    this.service.fetchScienceFictionMovies().subscribe((result) => {
      if(result.results)
      this.sciencefictionMovieResult = result.results;
    });
  }

  // thriller
  thrillerMovie() {
   
    this.service.fetchThrillerMovies().subscribe((result) => {
      if(result.results)
      this.thrillerMovieResult = result.results;
    });
  }

}
