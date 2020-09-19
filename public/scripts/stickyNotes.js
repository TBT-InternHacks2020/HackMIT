class StickyNote {
    constructor(eventName, eventDate, eventTagLine, eventDescription) {
        this.eventName = eventName;
        this.eventDate = eventDate;
        this.eventTagLine = eventTagLine;
        this.eventDescription = eventDescription;
    }
}

let currentStickyNotes = [new StickyNote("Robotics", "September 4th", "Robots!!!", "Second General Meeting"), new StickyNote("Robotics", "September 4th", "Robots!!!", "First General Meeting"), new StickyNote("Robotics", "September 4th", "Robots!!!", "First General Meeting"), new StickyNote("Robotics", "September 4th", "Robots!!!", "Third General Meeting")];

function addStickyNotesToRow() {
    let stickiesPerRow = 3;
    for (let i = 0; i < Math.floor(currentStickyNotes.length / stickiesPerRow); i++) {
        $('#sports').append(`<tr>
        <td>
        <div class="stickyNote">
        <h3>${currentStickyNotes[i].eventName}</h3>
        <p>${currentStickyNotes[i].eventDescription}</p>
        </div>
        </td>
        <td>
        <div class="stickyNote">
        <h3>${currentStickyNotes[i + 1].eventName}</h3>
        <p>${currentStickyNotes[i + 1].eventDescription}</p>
        </div>
        </td>
        <td>
        <div class="stickyNote">
        <h3>${currentStickyNotes[i + 2].eventName}</h3>
        <p>${currentStickyNotes[i + 2].eventDescription}</p>
        </div>
        </td>
        </tr>`);
    }

    if (currentStickyNotes.length % stickiesPerRow != 0) {
        if (currentStickyNotes.length % stickiesPerRow == 1) {
            $('#sports').append(`<tr>
            <td>
            <div class="stickyNote">
            <h3>${currentStickyNotes[currentStickyNotes.length - 1].eventName}</h3>
            <p>${currentStickyNotes[currentStickyNotes.length - 1].eventDescription}</p>
            </div>
            </td>
            </tr>`);
        } else if (currentStickyNotes.length % stickiesPerRow == 2) {
            $('#sports').append(`<tr>
            <td>
            <div class="stickyNote">
            <h3>${currentStickyNotes[currentStickyNotes.length - 1].eventName}</h3>
            <p>${currentStickyNotes[currentStickyNotes.length - 1].eventDescription}</p>
            </div>
            </td>
            <td>
            <div class="stickyNote">
            <h3>${currentStickyNotes[currentStickyNotes.length - 2].eventName}</h3>
            <p>${currentStickyNotes[currentStickyNotes.length - 2].eventDescription}</p>
            </div>
            </td>
            </tr>`);
        }
    }
}

addStickyNotesToRow();