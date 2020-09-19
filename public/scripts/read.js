var database = firebase.database();

function readData() {
    database.ref().on("value", function (snapshot) {
        var numOrgs = snapshot.numChildren();
        snapshot.forEach((childSnapshot) => {
            var snap = childSnapshot.val();
            var Club_email = snap["Club_email"];

            if (snap && snap["Club_name"])
                var Club_name = snap["Club_name"];

            if (snap && snap["Description"])
                var Description = snap["Description"];

            if (snap && snap["Event_Title"])
                var Event_Title = snap["Event_Title"];

            if (snap && snap["Post_Date"])
                var Post_Date = snap["Post_Date"];

            if (snap && snap["Club_email"])
                var latb = snap["Club_email"];

            if (snap && snap["Sign_Up_Link"])
                var Sign_Up_Link = snap["Sign_Up_Link"];

            if (snap && snap["Social_Link"])
                var Social_Link = snap["Social_Link"];

            if (snap && snap["Tag1"])
                var Tag1 = snap["Tag1"];

            if (snap && snap["Tag2"])
                var Tag2 = snap["Tag2"];

            if (snap && snap["Tag3"])
                var Tag3 = snap["Tag3"];
        });
    });
}

readData();