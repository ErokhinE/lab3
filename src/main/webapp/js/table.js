function anime() {
    $(".table-content").slideToggle("slow");
}

function drawPointsFromTableData() {
    $(".table-row").each(function () {
        const query = $(this);
        const x = parseFloat(query.find(">:first-child").text());
        const y = parseFloat(query.find(">:nth-child(2)").text());
        const r = parseFloat(query.find(">:nth-child(3)").text());
        const color = query.find(">:nth-child(5)").css("color");

        // новые точки
        const existingContent = plot.html();
        const contentToInsert = `<circle r="4" cx="${fromRToSvgX(x, r)}" cy="${fromRToSvgY(y, r)}" fill="${color}"></circle>`;
        plot.html(existingContent + contentToInsert);
    });
}

drawPointsFromTableData();
$(".table-header").click(anime);