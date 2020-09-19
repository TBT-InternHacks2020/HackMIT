class StickyNote {
    constructor(eventName, eventDate, eventTagLine, eventDescription) {
        this.eventName = eventName;
        this.eventDate = eventDate;
        this.eventTagLine = eventTagLine;
        this.eventDescription = eventDescription;
    }
}

let currentStickyNotes = [new StickyNote("Robotics", "September 4th", "Robots!!!", "First General Meeting")];

function addStickyNotesToRow() {
    console.log(currentStickyNotes.lastIndexOf);
    for (let i = 0; i < currentStickyNotes.length; i++) {
        $('#sports').append(`<tr><td><div class="stickyNote"><h3>${currentStickyNotes[i].eventName}</h3><p>${currentStickyNotes[i].eventDescription}</p></div></td></tr>`);
    }
}

addStickyNotesToRow();