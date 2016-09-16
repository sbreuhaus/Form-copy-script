$(document).ready(function(){
  $('.checkbox').click(function(){
    let site = $('input[name^=site]');
    let mailing = $('input[name^=mailing]');
    let clientName = $('input[name^=client_name]');
    let mailingName = $('input[name=mailing_address_name]');
    if($('#isSelected').prop('checked') == false){
      let form = document.getElementById('my-form');
      form.reset();
    } else {
      mailingName[0].value = clientName[0].value;
      for (var i = 0; i < site.length-1; i++) {
        mailing[i+1].value = site[i].value;
      }
    }
  })
})
