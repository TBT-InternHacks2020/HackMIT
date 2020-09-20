
class readinfo {
    var database = firebase.database();

    database.ref().on("value", function (snapshot) {
    var numOrgs = snapshot.numChildren();
    snapshot.forEach((childSnapshot) => {
    var snap = childSnapshot.val();
    constructor(snap["Club_email"], snap["Club_name"], snap["Description"], snap["Event_Title"], snap["Post_Date"], snap["Sign_Up_Link"], snap["Social_Link"], snap["Tag1"], snap["Tag2"], snap["Tag3"]){

        this.Club_email = snap["Club_email"]
        this.Club_name = snap["Club_name"]
        this.Description = snap["Description"]
        this.Event_Title = snap["Event_Title"]
        this.Post_Date = snap["Post_Date"]
        this.Tage1 = snap["Tag1"]
        this.Tag2 = snap["Tag2"]
        this.Tag3 = snap["Tag3"]
        this.Sign_Up_Link = snap["Sign_Up_Link"]
        this.Social_Link = snap["Social_Link"]

    }

}