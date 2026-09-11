/* =========================================
   SCENE
========================================= */

const opening = document.getElementById("opening");
const house = document.getElementById("house");
const enterHouse = document.getElementById("enterHouse");


/* =========================================
   ENTER HOUSE
========================================= */

enterHouse.addEventListener("click", function () {

    opening.classList.remove("active");

    house.classList.add("active");

});
/* =========================================
   DOOR I
========================================= */

const doorOne = document.querySelector(
    '.door[data-room="room1"]'
);

const roomOne = document.getElementById("room1");


doorOne.addEventListener("click", function () {

    house.classList.remove("active");

    roomOne.classList.add("active");

});


/* =========================================
   BACK TO HOUSE
========================================= */

const backButton = roomOne.querySelector(".back-button");


backButton.addEventListener("click", function () {

    roomOne.classList.remove("active");

    house.classList.add("active");

    markRoomCompleted("room1");

});

/* =========================================
   DOOR II
========================================= */

const doorTwo = document.querySelector(
    '.door[data-room="room2"]'
);

const roomTwo = document.getElementById("room2");


doorTwo.addEventListener("click", function () {

    house.classList.remove("active");

    roomTwo.classList.add("active");

});

/* =========================================
   BACK FROM ROOM II
========================================= */

const backButtonTwo = roomTwo.querySelector(".back-button");


backButtonTwo.addEventListener("click", function () {

    roomTwo.classList.remove("active");

    house.classList.add("active");

    markRoomCompleted("room2");

});

/* =========================================
   DOOR III
========================================= */

const doorThree = document.querySelector(
    '.door[data-room="room3"]'
);

const roomThree = document.getElementById("room3");


doorThree.addEventListener("click", function () {

    house.classList.remove("active");

    roomThree.classList.add("active");

});


/* =========================================
   BACK FROM ROOM III
========================================= */

const backButtonThree = roomThree.querySelector(".back-button");


backButtonThree.addEventListener("click", function () {

    roomThree.classList.remove("active");

    house.classList.add("active");

    markRoomCompleted("room3");

});

/* =========================================
   DOOR IV
========================================= */

const doorFour = document.querySelector(
    '.door[data-room="room4"]'
);

const roomFour = document.getElementById("room4");


doorFour.addEventListener("click", function () {

    house.classList.remove("active");

    roomFour.classList.add("active");

});


/* =========================================
   BACK FROM ROOM IV
========================================= */

const backButtonFour = roomFour.querySelector(".back-button");


backButtonFour.addEventListener("click", function () {

    roomFour.classList.remove("active");

    house.classList.add("active");

    markRoomCompleted("room4");

});

/* =========================================
   MEMORY — WORDS
========================================= */

const wordsDoor = document.querySelector(
    '.memory-door[data-memory="words"]'
);

const memoryWords = document.getElementById("memoryWords");

wordsDoor.addEventListener("click", function () {
    roomFour.classList.remove("active");
    memoryWords.classList.add("active");
});


/* =========================================
   BACK FROM WORDS
========================================= */

const backFromWords = document.getElementById("backFromWords");

backFromWords.addEventListener("click", function () {
    memoryWords.classList.remove("active");
    roomFour.classList.add("active");
});

/* =========================================
   MEMORY — FRAMES
========================================= */

const framesDoor = document.querySelector(
    '.memory-door[data-memory="frames"]'
);

const memoryFrames = document.getElementById("memoryFrames");

framesDoor.addEventListener("click", function () {
    roomFour.classList.remove("active");
    memoryFrames.classList.add("active");
});


/* =========================================
   BACK FROM FRAMES
========================================= */

const backFromFrames = document.getElementById("backFromFrames");

backFromFrames.addEventListener("click", function () {
    memoryFrames.classList.remove("active");
    roomFour.classList.add("active");
});

/* =========================================
   MEMORY — ECHOES
========================================= */

const echoesDoor = document.querySelector(
    '.memory-door[data-memory="echoes"]'
);

const memoryEchoes = document.getElementById("memoryEchoes");

echoesDoor.addEventListener("click", function () {
    roomFour.classList.remove("active");
    memoryEchoes.classList.add("active");
});


/* =========================================
   BACK FROM ECHOES
========================================= */

const backFromEchoes = document.getElementById("backFromEchoes");

backFromEchoes.addEventListener("click", function () {
    memoryEchoes.classList.remove("active");
    roomFour.classList.add("active");
});
const playEchoes = document.getElementById("playEchoes");
const echoesAudio = document.getElementById("echoesAudio");

playEchoes.addEventListener("click", () => {
    if (echoesAudio.paused) {
        echoesAudio.play();
        playEchoes.textContent = "Ⅱ";
    } else {
        echoesAudio.pause();
        playEchoes.textContent = "▶";
    }
});

const playerTrackLine = document.querySelector(".player-track-line");
const currentTime = document.getElementById("currentTime");
const duration = document.getElementById("duration");

// Ubah detik menjadi menit:detik
function formatTime(time) {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);

    return `${minutes}:${seconds.toString().padStart(2, "0")}`;
}

// Saat durasi lagu sudah terbaca
echoesAudio.addEventListener("loadedmetadata", () => {
    duration.textContent = formatTime(echoesAudio.duration);
});

// Saat lagu sedang berjalan
echoesAudio.addEventListener("timeupdate", () => {
    currentTime.textContent = formatTime(echoesAudio.currentTime);

    const progress =
        (echoesAudio.currentTime / echoesAudio.duration) * 100;

    playerTrackLine.style.width = `${progress}%`;
});

// Saat lagu selesai
echoesAudio.addEventListener("ended", () => {
    playEchoes.textContent = "▶";
    currentTime.textContent = "0:00";
    playerTrackLine.style.width = "0%";
});

/* =========================================
   MEMORY — TRACES
========================================= */

const tracesDoor = document.querySelector(
    '.memory-door[data-memory="traces"]'
);

const memoryTraces = document.getElementById("memoryTraces");

tracesDoor.addEventListener("click", function () {
    roomFour.classList.remove("active");
    memoryTraces.classList.add("active");
});


/* =========================================
   BACK FROM TRACES
========================================= */

const backFromTraces = document.getElementById("backFromTraces");

backFromTraces.addEventListener("click", function () {
    memoryTraces.classList.remove("active");
    roomFour.classList.add("active");
});

/* =========================================
   MEMORY — KEEPSAKES
========================================= */

const keepsakesDoor = document.querySelector(
    '.memory-door[data-memory="keepsakes"]'
);

const memoryKeepsakes = document.getElementById("memoryKeepsakes");

keepsakesDoor.addEventListener("click", function () {
    roomFour.classList.remove("active");
    memoryKeepsakes.classList.add("active");
});


/* =========================================
   BACK FROM KEEPSAKES
========================================= */

const backFromKeepsakes = document.getElementById("backFromKeepsakes");

backFromKeepsakes.addEventListener("click", function () {
    memoryKeepsakes.classList.remove("active");
    roomFour.classList.add("active");
});

/* =========================================
   ROOM V — A LETTER
========================================= */

const letterDoor = document.querySelector(
    '.door[data-room="room5"]'
);

const room5 = document.getElementById("room5");

letterDoor.addEventListener("click", function () {
    house.classList.remove("active");
    room5.classList.add("active");
});


/* =========================================
   BACK FROM LETTER
========================================= */

const backFromLetter = document.getElementById("backFromLetter");

backFromLetter.addEventListener("click", function () {

    room5.classList.remove("active");
    house.classList.add("active");

    markRoomCompleted("room5");

});

/* =========================================
   FINAL DOOR — UNLOCK SYSTEM
========================================= */

const lastDoor = document.getElementById("lastDoor");
const roomSix = document.getElementById("room6");

const completedRooms = JSON.parse(
    localStorage.getItem("completedRooms") || "[]"
);


/* =========================================
   CHECK FINAL DOOR
========================================= */

function checkFinalDoor() {

    const requiredRooms = [
        "room1",
        "room2",
        "room3",
        "room4",
        "room5"
    ];

    const allCompleted = requiredRooms.every(function (room) {
        return completedRooms.includes(room);
    });

    if (allCompleted) {

        lastDoor.classList.remove("locked");

        const lockText = lastDoor.querySelector(".lock-text");

        if (lockText) {
            lockText.textContent = "Terbuka";
        }
    }
}


/* =========================================
   MARK ROOM AS COMPLETED
========================================= */

function markRoomCompleted(roomName) {

    if (!completedRooms.includes(roomName)) {

        completedRooms.push(roomName);

        localStorage.setItem(
            "completedRooms",
            JSON.stringify(completedRooms)
        );
    }

    checkFinalDoor();
}


/* =========================================
   FINAL DOOR CLICK
========================================= */

lastDoor.addEventListener("click", function () {

    if (lastDoor.classList.contains("locked")) {
        return;
    }

    house.classList.remove("active");
    roomSix.classList.add("active");

});


/* =========================================
   CHECK WHEN PAGE LOADS
========================================= */

checkFinalDoor();

/* =========================================
   ROOM VI — THE LAST DOOR
========================================= */

const backFromLastDoor = document.getElementById("backFromLastDoor");