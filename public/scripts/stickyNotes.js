class StickyNote {
    constructor(eventName, eventDate, eventTimeZone, eventDescription, color) {
        this.eventName = eventName;
        this.eventDate = eventDate;
        this.eventTimeZone = eventTimeZone;
        this.eventDescription = eventDescription;
        this.color = color;
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
            <div class="stickyNote" style="background-color:${currentStickyNotes[index].color}">
            <h3>${currentStickyNotes[index].eventName}</h3>
            <p>${currentStickyNotes[index].eventTimeZone}</p>
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
        <h3>${currentStickyNotes[index].eventName}</h3>
        <p>${currentStickyNotes[index].eventTimeZone}</p>
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
            currentStickyNotes.push(new StickyNote(snap["Club_name"], snap["Post_Date"], snap["Time Zone"], snap["Description"], snap["Hex_Color"]));
        });
        console.log(currentStickyNotes);
        addStickyNotesToRow();
    });
}

readData();