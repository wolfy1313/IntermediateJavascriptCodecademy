// class Media {
//   constructor(title, isCheckedOut, ratings){
//     this._title = title;
//     this._isCheckedOut = isCheckedOut;
//     this._ratings = ratings
//   }
//   get title(){
//     return this._title
//   }
//   get isCheckedOut(){
//     return this._isCheckedOut;
//   }
//   get ratings() {
//     return this._ratings
//   }

//   getAverageRating() {
//     let total = 0
//     for (let i = 0; i<this._ratings.length; i++){
//       total += this._ratings[i]
//     }
//     let avg = total / this._ratings.length
//     return avg
//   }
//   toggleCheckOutStatus() {
//     if (this._isCheckedOut === true){
//       this._isCheckedOut === false
//     } else {
//       this._isCheckedOut === true
//     }
//   }
//   addRating(rating){
//     this._ratings.push(rating)
//   }
// }

// class Book extends Media {
//   constructor(author, title, pages, isCheckedOut, ratings) {
//     super(title, isCheckedOut, ratings);
//     this._author = author;
//     this.pages = pages;
//   }
//   get author(){
//     return this._author
//   }
//   get pages(){
//     return this._pages
//   }
// }
// class Movie extends Media {
//   constructor(director, title, runTime, isCheckedOut, ratings) {
//     super(title, isCheckedOut, ratings);
//     this._director = director;
//     this.runTime = runTime;
//   }
//   get director(){
//     return this._director
//   }
//   get runTime(){
//     return this._runTime
//   }
// }
// class CD extends Media {
//   constructor(artist, title, songs, isCheckedOut, ratings) {
//     super(title, isCheckedOut, ratings);
//     this._artist = artist;
//     this.songs = songs;
//   }
//   get artist(){
//     return this._artist
//   }
//   get songs(){
//     return this._songs
//   }
// }

class Media {
  constructor(title){
    this._title = title;
    this._isCheckedOut = false;
    this._ratings = []
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

  set isCheckedOut(checkedOut){
   this._isCheckedOut = checkedOut
  }

  getAverageRating() {

    let sum = this.ratings.reduce((currentSum, rating) => currentSum + rating, 0)
    return sum / this.ratings.length
  }
  toggleCheckOutStatus() {
    this.isCheckedOut = !this.isCheckedOut
  }
  addRating(rating){
    if (rating < 1 || rating > 5){
      console.log('please enter a number from 1 to 5')
    }
    this.ratings.push(rating)
  }
}

class Book extends Media {
  constructor(author, title, pages) {
    super(title);
    this._author = author;
    this._pages = pages;
  }
  get author(){
    return this._author
  }
  get pages(){
    return this._pages
  }
}
class Movie extends Media {
  constructor(director, title, runTime) {
    super(title);
    this._director = director;
    this._runTime = runTime;
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

const historyOfEverything = new Book('Bill Bryson', 'A Short History of Nearly Everything', 544)
historyOfEverything.toggleCheckOutStatus()
console.log(historyOfEverything.isCheckedOut)
historyOfEverything.addRating(4)
historyOfEverything.addRating(5)
historyOfEverything.addRating(5)
console.log(historyOfEverything.getAverageRating())


const johnWick = new Movie('John Wu','John Wick', 120)
johnWick.toggleCheckOutStatus()
console.log(johnWick.isCheckedOut)
johnWick.addRating(5)
johnWick.addRating(2)
johnWick.addRating(4)
console.log(johnWick.ratings)
console.log(johnWick.getAverageRating())