import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Banner, CastData, MovieData, MovieVid } from '../movie.interface';

@Injectable({
  providedIn: 'root'
})
export class MovieapiserviceService {

  constructor(private http:HttpClient) { }
  baseurl = "https://api.themoviedb.org/3";
  apikey = "08cc33bd5ae3a747598ce2ad84376e66";

  //bannerapidata

  bannerApiData(): Observable<MovieData> {
    return this.http.get<MovieData>(`${this.baseurl}/trending/all/week?api_key=${this.apikey}`);
  }

  //trnding movie apidata

  trendingMovieApiData(): Observable<MovieData> {
    return this.http.get<MovieData>(`${this.baseurl}/trending/movie/day?api_key=${this.apikey}`);
  }
  getSearchMovie(data: any): Observable<any> {
    console.log(data, 'movie#');

    return this.http.get(`${this.baseurl}/search/movie?api_key=${this.apikey}&query=${data.movieName}`);
  }
  getMovieDetails(data: any): Observable<any> {
    return this.http.get(`${this.baseurl}/movie/${data}?api_key=${this.apikey}`)
  }

  // getMovieVideo
  getMovieVideo(data: any): Observable<MovieVid> {
    return this.http.get<MovieVid>(`${this.baseurl}/movie/${data}/videos?api_key=${this.apikey}`)
  }

  // getMovieCast
  getMovieCast(data: any): Observable<CastData> {
    return this.http.get<CastData>(`${this.baseurl}/movie/${data}/credits?api_key=${this.apikey}`)
  }
   // action 
   fetchActionMovies(): Observable<MovieData> {
    return this.http.get<MovieData>(`${this.baseurl}/discover/movie?api_key=${this.apikey}&with_genres=28`);
  }

  // adventure
  fetchAdventureMovies(): Observable<MovieData> {
    return this.http.get<MovieData>(`${this.baseurl}/discover/movie?api_key=${this.apikey}&with_genres=12`);
  }

  // animation
  fetchAnimationMovies(): Observable<MovieData> {
    return this.http.get<MovieData>(`${this.baseurl}/discover/movie?api_key=${this.apikey}&with_genres=16`);
  }

  // comedy
  fetchComedyMovies(): Observable<MovieData> {
    return this.http.get<MovieData>(`${this.baseurl}/discover/movie?api_key=${this.apikey}&with_genres=35`);
  }

  // documentary
  fetchDocumentaryMovies(): Observable<MovieData> {
    return this.http.get<MovieData>(`${this.baseurl}/discover/movie?api_key=${this.apikey}&with_genres=99`);
  }

  // science-fiction:878

  fetchScienceFictionMovies(): Observable<MovieData> {
    return this.http.get<MovieData>(`${this.baseurl}/discover/movie?api_key=${this.apikey}&with_genres=878`);
  }

  // thriller:53
  fetchThrillerMovies(): Observable<MovieData> {
    return this.http.get<MovieData>(`${this.baseurl}/discover/movie?api_key=${this.apikey}&with_genres=53`);
  }

}