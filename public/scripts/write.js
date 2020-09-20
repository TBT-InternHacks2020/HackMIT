
var database = firebase.database();

function newPost(category, club_email, club_name, description, event_title, post_date, sign_up_link, social_link, tag1, tag2, tag3, Hex_color, tzone){
    event.preventDefault(); // prevents the form from reloading the page
    const form = event.currentTarget;
    
    let newPost = this.database.ref('hackmit-d84b7/' + category);
    newPost.child(category).set({Club_email: club_email,
        Club_name: club_nam/e,
        Description: description,
        Event_Title: event_title,
        Post_Date: post_date,
        Sign_Up_Link: sign_up_link,
        social_link: social_link,
        Tag1: tag1,
        Tag2: tag2,
        Tag3: tag3,
        Hex_Color: Hex_color,
        Time_Zone: tzone}).then().catch();
} 

document.getElementById('my-form').addEventListener('submit', newPost);
