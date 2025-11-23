console.log("Nebula Journal geladen 📓");

// Elemente greifen
const addNoteBtn = document.getElementById("addNote");
const noteInput = document.getElementById("noteInput");
const notesList = document.getElementById("notesList");

// Einträge laden
let notes = JSON.parse(localStorage.getItem("nebulaNotes")) || [];

renderNotes();

// Neuen Eintrag speichern
addNoteBtn.addEventListener("click", () => {
    const text = noteInput.value.trim();

    if (text.length === 0) {
        alert("Bruder… schreib was rein 😭");
        return;
    }

    const note = {
        id: Date.now(),
        text: text,
        date: new Date().toLocaleString()
    };

    notes.unshift(note);
    localStorage.setItem("nebulaNotes", JSON.stringify(notes));

    noteInput.value = "";

    renderNotes();
});

// Einträge anzeigen
function renderNotes() {
    notesList.innerHTML = "";

    notes.forEach(note => {
        const card = document.createElement("div");
        card.classList.add("noteCard");

        card.innerHTML = `
            <div class="noteTop">
                <span>${note.date}</span>
                <span class="deleteBtn" data-id="${note.id}">Löschen</span>
            </div>
            <p>${note.text}</p>
        `;

        notesList.appendChild(card);
    });

    // delete listener
    document.querySelectorAll(".deleteBtn").forEach(btn => {
        btn.addEventListener("click", () => {
            const id = Number(btn.dataset.id);
            notes = notes.filter(n => n.id !== id);
            localStorage.setItem("nebulaNotes", JSON.stringify(notes));
            renderNotes();
        });
    });
}