var jsPunsShirts = 
`<option value="cornflowerblue">Cornflower Blue (JS Puns shirt only)</option>
<option value="darkslategrey">Dark Slate Grey (JS Puns shirt only)</option> 
<option value="gold">Gold (JS Puns shirt only)</option>`;
var heartJsShirts = 
`<option value="tomato">Tomato (I ♥ JS shirt only)</option>
<option value="steelblue">Steel Blue (I ♥ JS shirt only)</option> 
<option value="dimgrey">Dim Grey (I ♥ JS shirt only)</option>`;

$('#title').on('change', function () {
    if ($('#title').val() == 'other') {
        $('.other-job').show();
    } else {
        $('.other-job').hide();
    }
});

$('#design').on('change', function () {
    updateColorSelection($('#design').val());
});

const updateColorSelection = (selectedDesign) => {
    $('#color option').remove();
    if (selectedDesign == 'js puns') {
        $('#color').append(jsPunsShirts);
    } else if (selectedDesign == 'heart js') {
        $('#color').append(heartJsShirts);
    }
}