class Media {
  constructor(title, isCheckedOut, ratings){
    this._title = title;
    this._isCheckedOut = isCheckedOut;
    this._ratings = ratings
  }
  get title(){
    return this._title
  }
  get isCheckedOut(){
    return this._isCheckedOut;
  }
  get ratings() {
    return this._ratings
  }

  getAverageRating() {
    let total = 0
    for (let i = 0; i<this._ratings.length; i++){
      total += this._ratings[i]
    }
    let avg = total / this._ratings.length
    return avg
  }
  toggleCheckOutStatus() {
    if (this._isCheckedOut === true){
      this._isCheckedOut === false
    } else {
      this._isCheckedOut === true
    }
  }
  addRating(rating){
    this._ratings.push(rating)
  }
}

class Book extends Media {
  constructor(author, title, pages, isCheckedOut, ratings) {
    super(title, isCheckedOut, ratings);
    this._author = author;
    this.pages = pages;
  }
  get author(){
    return this._author
  }
  get pages(){
    return this._pages
  }
}
class Movie extends Media {
  constructor(director, title, runTime, isCheckedOut, ratings) {
    super(title, isCheckedOut, ratings);
    this._director = director;
    this.runTime = runTime;
  }
  get director(){
    return this._director
  }
  get runTime(){
    return this._runTime
  }
}
class CD extends Media {
  constructor(artist, title, songs, isCheckedOut, ratings) {
    super(title, isCheckedOut, ratings);
    this._artist = artist;
    this.songs = songs;
  }
  get artist(){
    return this._artist
  }
  get songs(){
    return this._songs
  }
}





// const johnWick = new Media('John Wick', true, [5,4,3])
// console.log(johnWick.ratings)
// console.log(johnWick.getAverageRating())