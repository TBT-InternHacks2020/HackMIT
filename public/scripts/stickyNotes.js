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
            let index = (stickiesPerRow * i) + j;
            stringToAdd1 += `<td>
            <div class="stickyNote" style="background-color:${currentStickyNotes[index].hexColor};" 
                                           onMouseOver="this.style.backgroundColor='${shadeColor(currentStickyNotes[index].hexColor, -5)}'" 
                                           onMouseOut="this.style.backgroundColor='${currentStickyNotes[index].hexColor}'">
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
            currentStickyNotes.push(new StickyNote(snap["Club_email"], snap["Club_name"], snap["Description"], snap["Event_Title"], snap["Hex_Color"], snap["Post_Date"], snap["Sign_Up_Link"], snap["Social_Link"], snap["Tag1"], snap["Tag2"], snap["Tag3"], snap["Time_Zone"]));
        });
        console.log(currentStickyNotes);
        addStickyNotesToRow();
    });
}


// Thanks SO:  https://stackoverflow.com/questions/5560248/programmatically-lighten-or-darken-a-hex-color-or-rgb-and-blend-colors
function shadeColor(color, percent) {
    var R = parseInt(color.substring(1, 3), 16);
    var G = parseInt(color.substring(3, 5), 16);
    var B = parseInt(color.substring(5, 7), 16);

    R = parseInt(R * (100 + percent) / 100);
    G = parseInt(G * (100 + percent) / 100);
    B = parseInt(B * (100 + percent) / 100);

    R = (R < 255) ? R : 255;
    G = (G < 255) ? G : 255;
    B = (B < 255) ? B : 255;

    var RR = ((R.toString(16).length == 1) ? "0" + R.toString(16) : R.toString(16));
    var GG = ((G.toString(16).length == 1) ? "0" + G.toString(16) : G.toString(16));
    var BB = ((B.toString(16).length == 1) ? "0" + B.toString(16) : B.toString(16));

    return "#" + RR + GG + BB;
}

readData();