$(document).ready(function() {

  // Input field langsung fokus
  $('#inputs').focus();

  // jika ada perubahan di input field [ENTER], akan mentrigger
  $("input").change(function() {
    var id = $('#inputs').val();

    $.ajax({
        url: 'input.php',
        type: 'post',
        data: {
          id: id
        }
      })
      .done(function(data) {
        $('ul').load("show_rfid.php", function(data) {
          var jsonObj = JSON.parse(data);
          $('ul').html(jsonObj.li);
          $('#jumlahRow').html(jsonObj.jumlahBaris);
        });
      })
      .fail(function(data) {
        console.log(data);
      });

    $('#tampilMessage').html("<b>RFID SUKSES</b> " + id);
    $('#inputs').focus();
  });

});