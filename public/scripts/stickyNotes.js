class StickyNote {
    constructor(eventName, eventDate, eventTagLine, eventDescription) {
        this.eventName = eventName;
        this.eventDate = eventDate;
        this.eventTagLine = eventTagLine;
        this.eventDescription = eventDescription;
    }
}

let currentStickyNotes = [new StickyNote("Robotics", "September 4th", "Robots!!!", "Second General Meeting"), new StickyNote("Robotics", "September 4th", "Robots!!!", "Second General Meeting"), new StickyNote("Robotics", "September 4th", "Robots!!!", "First General Meeting"), new StickyNote("Robotics", "September 4th", "Robots!!!", "First General Meeting"), new StickyNote("Robotics", "September 4th", "Robots!!!", "Third General Meeting")];

function addStickyNotesToRow() {
    let stickiesPerRow = 5;
    let stringToAdd1 = "";

    for (let i = 0; i < Math.floor(currentStickyNotes.length / stickiesPerRow); i++) {
        for(let j = 0; j < stickiesPerRow; j++) {
            stringToAdd1 += `<td>
            <div class="stickyNote">
            <h3>${currentStickyNotes[j].eventName}</h3>
            <p>${currentStickyNotes[j].eventDescription}</p>
            </div>
            </td>`
        }
        $('#sports').append("<tr>" + stringToAdd1 + "</tr>");
        stringToAdd1 = "";
    }

    let stringToAdd2 = "hello";

    for (let i = 0; i < currentStickyNotes.length % stickiesPerRow; i++) {
        stringToAdd2 += `
        <td>
        <div class="stickyNote">
        <h3>${currentStickyNotes[currentStickyNotes.length - (i + 1)].eventName}</h3>
        <p>${currentStickyNotes[currentStickyNotes.length - (i + 1)].eventDescription}</p>
        </div>
        </td>
        `;
    }

    $('#sports').append("<tr>" + stringToAdd2 + "</tr>");
}

addStickyNotesToRow();