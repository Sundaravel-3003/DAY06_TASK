// write a person class to hold all the details of the person -

// class Person {
//     constructor(firstName,lastName,age,gender,place){
//         this.firstName = firstName;
//         this.lastName = lastName;
//         this.age = age;
//         this.gender =  gender;
//         this.place =  place;
//     }
//     getDetails(){
//     return (`Name of the person is ${this.firstName} ${this.lastName} of age ${this.age} years old and belongs to ${this.place} and the person's gender is ${this.gender}`)

//     }
// }

// let person1 = new Person ("Thalapathy","Vijay",50,"male","Chennai");
// let person2 = new Person ("Thala","Ajith",50,"male","Chennai");
// let person3 = new Person ("Raashi","Kannan",25,"female","Chennai");
// let person4 = new Person ("Nithya","Menon",35,"female","Chennai");

// console.log(person1.getDetails());
// console.log( person2.getDetails());
// console.log( person3.getDetails());
// console.log( person4.getDetails());



// // class to calculate the uber price -

// class Uber {
//     constructor(distance,waitingPeriod,otp){
//         this.distance = distance;
//         this.waitingPeriod = waitingPeriod;
//         this.otp = otp;
//     }

//     setDistance(newDistance){
//         this.distance = newDistance;
//     }

//     getRate(){
//         if(this.distance <= 10){
//            return  50;
//         }
//         else {
//             let rate = 10 * this.distance ;
//            return  rate;
//         }
//     }

//     getWaitingCharge(){
//         if(this.waitingPeriod <= 15){
//             return 0;
//         }
//         else{
//            let waitingCharge = 5 * this.waitingPeriod;
//           return  waitingCharge;
//         }
//     }

//     getUberPrice(){
//         if (this.otp === "0000"){
//             let TotalPrice = this.getRate() + this.getWaitingCharge();
//             return (`Price of your journey is ${TotalPrice}`);
//         }
//         else {
//             return (`your otp is wrong`);
//         }
//     }
// }

// let customer1 = new Uber (20,20,"0000")
// let customer2 = new Uber (10,15,"0000")
// let customer3 = new Uber (5,25,"0000")
// let customer4 = new Uber (10,10,"1234")

// console.log(customer1.getUberPrice());
// console.log(customer2.getUberPrice());
// console.log(customer3.getUberPrice());
// console.log(customer4.getUberPrice());

// customer1.setDistance(25);
// console.log(customer1.getUberPrice());


// class to construct a movie -

class Movie {
    constructor(title,studio,rating){
        this.title = title;
        this.studio = studio;
        this.rating = rating;
    }
getRating(){
    if(this.rating === "PG13"){
        return this.rating = "PG13";
    }
    else if (this.rating === "G"){
        return this.rating = "G";
    }
    else {
        return this.rating = "PG";
    }
}
    getPG(){
           let array = [
            this.title , this.rating
           ];
           if (this.rating === "PG"){
        return array;
    }
    else {
        return (`This movie is not in the rating PG.It's rating is ${this.rating}`)
    }
    }
getMovieDetails(){
    return (`The name of the movie is ${this.title} produced by ${this.studio} of rating ${this.rating}.` );
}
}

let movie1 = new Movie ("Spiderman","Columbia pictures","PG");
let movie2 = new Movie ("Avengers","Marvel studios",);
let movie3 = new Movie ("Avatar","20th century FOX studios","PG");
let movie4 = new Movie ("Casino Royale","Eon Productions","PG13");

console.log(movie2.getRating());
console.log(movie4.getMovieDetails());
console.log(movie2.getPG());
