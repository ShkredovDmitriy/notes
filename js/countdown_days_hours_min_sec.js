
if (document.getElementById("profileOnlineBlock")) {
    const dateStart = new Date("November 25, 2024 00:00:01").getTime();

    const tick = () => {
        const dateCurrent = new Date().getTime();
        const diff = (dateStart - dateCurrent) / 1000;

        if (diff > 0) {
            const days = Math.floor(diff / 86400);
            const hours = Math.floor((diff % 86400) / 3600);
            const minutes = Math.floor(((diff % 86400) % 3600) / 60);
            const seconds = Math.floor(((diff % 86400) % 3600) % 60);

            $("#profileOnlineDays").html(days);
            $("#profileOnlineHours").html(`${hours}`.padStart(2, "0"));
            $("#profileOnlineMinutes").html(`${minutes}`.padStart(2, "0"));
            $("#profileOnlineSeconds").html(`${seconds}`.padStart(2, "0"));
        }
    };

    tick();
    setInterval(() => tick(), 1000);
}
