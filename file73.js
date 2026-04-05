

function about(hobby, favMusician){
    console.log(this.firstName, this.age ,hobby, favMusician)
}

const user1 = {
    firstName: "Rahat ishaq",
    age: 8,
}
const user2 = {
    firstName: "Ishaq khan",
    age: 8,
    
}
// call
// apply
// about.call(user2, 'guitar:', 'someone');
// about.apply(user2, ['guitar:', 'someone']);
// bind ,it retrun a function
const func = about.bind(user1,"guitar", "someone" );

func();




