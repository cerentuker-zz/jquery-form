const jsPunsShirts =
    `<option value="cornflowerblue">Cornflower Blue (JS Puns shirt only)</option>
<option value="darkslategrey">Dark Slate Grey (JS Puns shirt only)</option> 
<option value="gold">Gold (JS Puns shirt only)</option>`;
const heartJsShirts =
    `<option value="tomato">Tomato (I ♥ JS shirt only)</option>
<option value="steelblue">Steel Blue (I ♥ JS shirt only)</option> 
<option value="dimgrey">Dim Grey (I ♥ JS shirt only)</option>`;

// user should enter manual description when other is selected for job role 
$('#title').on('change', function () {
    if ($('#title').val() == 'other') {
        $('.other-job').show();
    } else {
        $('.other-job').hide();
    }
});

//color selections vary by selected design
$('#design').on('change', function () {
    updateColorSelection($('#design').val());
});

//function to limit color options based on selected design
const updateColorSelection = (selectedDesign) => {
    $('#color option').remove();
    if (selectedDesign == 'js puns') {
        $('#color').append(jsPunsShirts);
    } else if (selectedDesign == 'heart js') {
        $('#color').append(heartJsShirts);
    }
}

//two activities that occur at the same time cannot be selected
//todo: refactor this
$('input[type="checkbox"]').click(function () {
    var checkboxLabel = this.parentElement.textContent;
    var clickedEventDate = fetchDateFromEventString(checkboxLabel);

    if (this.checked) {
        $('.activities input').each(function () {
            if (!this.checked) {
                var currEventDate = fetchDateFromEventString(this.parentElement.innerText);
                if (currEventDate == clickedEventDate) {
                    $(this)[0].disabled = true;
                }
            }
        });
    } else {
        $('.activities input').each(function () {
            var currEventDate = fetchDateFromEventString(this.parentElement.innerText);
            if (currEventDate == clickedEventDate) {
                $(this)[0].disabled = false;
            }
        });
    }
});

//func that gets the date string from clicked checkbox label, since I am not allowed to modify the html I needed this messy workaround
const fetchDateFromEventString = (eventString) => eventString.split('—')[1];

$('#payment').on('change', function () {
    $('#select-method').remove();
    updatePaymentMethodsDiv($('#payment').val());
});

const updatePaymentMethodsDiv = (selectedPaymentMethod) => {
    if (selectedPaymentMethod == 'paypal') {
        $('#credit-card').hide();
        $('#div-bitcoin').hide();
        $('#div-paypal').show();
    } else if (selectedPaymentMethod == 'bitcoin') {
        $('#credit-card').hide();
        $('#div-paypal').hide();
        $('#div-bitcoin').show();
    } else {
        $('#credit-card').show();
        $('#div-paypal').hide();
        $('#div-bitcoin').hide();
    }
};

$('#submitbutton').click(function () {

});