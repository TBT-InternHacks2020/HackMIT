class StickyNote {
    constructor(clubEmail, clubName, description, eventTitle, hexColor, postDate, signUpLink, socialLink, tag1, tag2, tag3, timezone) {
        this.clubEmail = clubEmail;
        this.clubName = clubName;
        this.description = description;
        this.eventTitle = eventTitle;
        this.hexColor = hexColor;
        this.postDate = postDate;
        this.signUpLink = signUpLink;
        this.socialLink = socialLink;
        this.tag1 = tag1;
        this.tag2 = tag2;
        this.tag3 = tag3;
        this.timezone = timezone;
    }
}

let currentStickyNotes = [];

function addStickyNotesToRow() {
    let stickiesPerRow = 5;
    let stringToAdd1 = "";

    console.log(currentStickyNotes.length);
    for (let i = 0; i < currentStickyNotes.length / stickiesPerRow; i++) {
        for (let j = 0; j < stickiesPerRow; j++) {
            let index = (stickiesPerRow  * i) + j;
            stringToAdd1 += `<td>
            <div class="stickyNote" style="background-color:${currentStickyNotes[index].hexColor}">
            <h3>${currentStickyNotes[index].eventTitle}</h3>
            <p>${currentStickyNotes[index].timezone}</p>
            </div>
            </td>`
        }
        $('#sports').append("<tr>" + stringToAdd1 + "</tr>");
        stringToAdd1 = "";
    }

    let stringToAdd2 = "hello";

    for (let i = 0; i < currentStickyNotes.length % stickiesPerRow; i++) {
        let index = currentStickyNotes.length - (i + 1);
        stringToAdd2 += `
        <td>
        <div class="stickyNote" style="background-color:${currentStickyNotes[index].color}">
        <h3>${currentStickyNotes[index].eventTitle}</h3>
        <p>${currentStickyNotes[index].timezone}</p>
        </div>
        </td>
        `;
    }

    $('#sports').append("<tr>" + stringToAdd2 + "</tr>");
}

var database = firebase.database();
function readData() {
    database.ref().on("value", function (snapshot) {
        snapshot.forEach((childSnapshot) => {
            var snap = childSnapshot.val();
            currentStickyNotes.push(new StickyNote(snap["Club_email"], snap["Club_name"], snap["Description"], snap["Event_Title"], snap["Hex_Color"], snap["Post_Date"], snap["Sign_Up_Link"], snap["Social_Link"], snap["Tag1"], snap["Tag2"], snap["Tag3"], snap["Time Zone"]));
        });
        console.log(currentStickyNotes);
        addStickyNotesToRow();
    });
}

readData();