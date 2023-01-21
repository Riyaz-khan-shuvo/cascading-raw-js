
/* $('#Country').on('change', function () {
     var id = $(this).val();
     $('#State').empty();
     $('#State').append('<Option>----Select----</Option>');
     $.ajax({
         url: '/Cascading/State?id=' + id,
         success: function (Result) {
             $.each(Result, function (i, data) {

                 $('#State').append('<Option value=' + data.id + '>' + data.stateName + '</Option>');
             });
         }
     });
 });*/


const val = document.getElementById("Country");

val.addEventListener("change", () => {
    console.log(val.value)
})


/*    $('#State').on('change', function () {
        var id = $(this).val();
        $('#City').empty();
        $('#City').append('<Option>----Select----</Option>');
        $.ajax({
            url: '/Cascading/City?id=' + id,
            success: function (Result) {
                $.each(Result, function (i, data) {

                    $('#City').append('<Option value=' + data.id + '>' + data.cityName + '</Option>');
                });
            }
        });
    });*/


function GetCountry() {
    /*$.ajax({
        url: '/Cascading/Country',
        success: function (result) {
            $.each(result, function (i, data) {
                $('#Country').append('<Option value=' + data.id + '>' + data.countryName + '<Option>');
            });
        }
    });*/

    fetch("/cascading/country")
        .then(res => res.json())
        .then(data => {
            data.map((country, index) => {
                GetSingleCountry(country)
            })
        })
}

function GetSingleCountry(data) {
    const a = document.createElement("option")
    a.innerText = data.countryName;
    a.value = data.id;
    document.getElementById("Country").appendChild(a);
}

