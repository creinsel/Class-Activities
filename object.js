
// var dogs={
//     raining: true,
//     noise:"Woof!",
//     makeNoise:
//     function rainingDogs(){
//         if(dogs.raining){
//             console.log(dogs.noise)
//         }
//     },

// }

// var cats={
//     raining:false,
//     noise:"Meow!",
//     makeNoise: 
//     function rainingCats(){
//         if(cats.raining){
//             console.log(cats.noise)
//     }
//     }
// }

// dogs.makeNoise();
// cats.makeNoise();

// const massHysteria= function(cat,dog){
//     if(dog.raining && cat.raining){
//         console.log("DOGS AND CATS LIVING IN MASS HYSTERIA")
//     }
// }

// function Play(name, profession, gender, age, strength, hitPoints, printStats){
//     this.name=name;
//     this.profession=profession;
//     this.gender=gender;
//     this.age=age;
//     this.strength=strength;
//     this.hitPoints=hitPoints;
//     this.printStats=function(){
//         console.log("Name:"+name, "Profession:"+ profession, "Gender:"+ gender, "Age:"+ age, "Strength:"+strength, "Hitpoints:"+ hitPoints);
//     }
// }

// const noodle= new Play("Noodle", "dumb bitch", "female", 987, 1000, 33);
// noodle.printStats();

// const crackle= new Play("Crackle", "pouring milk", "male", 445, 200, 9)
// crackle.printStats();

// function IsAlive(hitPoints, strength)


// function DigitalPal(hungry, sleepy, bored, age){
//     this.hungry=hungry;
//     this.sleepy=sleepy;
//     this.bored=bored;
//     this.age=age;
// }

// var snail= new DigitalPal(false, true, true, 2)

// DigitalPal.prototype.increaseAge=function(){
//     if(this.sleep){
//         this.age++;
//         console.log("Happy Birthday to me! I am "+this.age+" old!")
       
//     }
      
// }

// DigitalPal.prototype.feed=function(){
//     if(this.hungry){
//         console.log("FEED ME")
//         this.hungry=false;
//         this.sleepy=true;
//     }
//     else{
//       console.log("No thanks, I'm FULL")  
//     }
    
// }




// DigitalPal.prototype.sleep=function(){
//     if(this.sleepy){
//         console.log("I'm TIRED! Zzzzzzzz")
//         this.sleepy=false;
//         this.bored=true;
//         this.increaseAge();
//     }
//     else{
//       console.log("No way, I'm not tired")  
//     }
    
// }

// snail.sleep();

// DigitalPal.prototype.feed=function(){
//     if(this.hungry){
//         console.log("FEED ME")
//         this.hungry=false;
//         this.sleepy=true;
//     }
//       console.log("No thanks, I'm FULL")  
// }

// DigitalPal.prototype.play=function(){
//     if(this.bored){
//         console.log("YAY Let's play!")
//         this.bored=false;
//         this.hungry=true;
//     }
//       console.log("Not right now, later?")  
// }

// DigitalPal.prototype.play=function(){
//     if(this.bored){
//         console.log("YAY Let's play!")
//         this.bored=false;
//         this.hungry=true;
//     }
//       console.log("Not right now, later?")  
// }

// var dog= new DigitalPal(true, true, true, 9);

// console.log(dog)

const Programmer=function(name, job, age, language){
    this.name=name;
    this.job=job;
    this.age=age;
    this.language=language
    this.printStats=function(){
        console.log("Name: "+ this.name, 
                    "Job: "+this.job, 
                    "Age: "+this.age, 
                    "Fav Lang: "+this.language)
    }
}

var cassie= new Programmer("Cassie", "AVE", 28, "none");

console.log(cassie.printStats())