
function makeGrid() {
    var table = $('#pixel_canvas');
    var row = $('#input_height').val();
    var col = $('#input_width').val();

    for (var i=0; i<row; i++) {
        var height = $('<tr></tr>');
        for (var j=0; j<col; j++) {
            $('<td></td>').appendTo(height);
        }
        table.append(height);
    }

    table.on('click', 'td', function () {
        var colour = $('#colorPicker').val();
        $(this).css('background-color',colour);
    });

    table.on('dblclick', 'td', function () {
        $(this).css('background-color', '#fff')
    })
}

$("input[type='submit']").click(function (e) {
    e.preventDefault();
    makeGrid();
});