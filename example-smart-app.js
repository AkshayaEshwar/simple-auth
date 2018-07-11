(function(window){
  window.extractData = function() {
    var ret = $.Deferred();

    function onError() {
      console.log('Loading error', arguments);
      ret.reject();
    }
    function onReady(smart)  {
      if (smart.hasOwnProperty('patient')) {
       // var user=user.read();
      //getting the FHIR server url
      var url = smart.server.serviceUrl;
      //getting the access token
      var token = smart.server.auth.token;
        var arr=token.split('.');
        var head = arr[0];
        var load = arr[1];
        //getting the id token(response token)
       var idtoken=smart.tokenResponse.id_token;
       //var accesstoken=smart.server.access.token;
       var array = idtoken.split('.');
       var header = window.atob(array[0]);
       var payload = window.atob(array[1]);
       var res = header + payload;
       var obj1 = JSON.parse(payload);
        var text="Bearer "+token;
    // document.getElementById("demo").innerHTML = obj1.name + ", " + obj.sub + "," + obj.profile
         var settings = {
               "async": true,
               "crossDomain": true,
               "url": obj1.fhirUser,
               "method": "GET",
               "headers": {
                   "Accept": "application/json+fhir",
                   "header": head,
                   "Authorization": text,
                   "Cache-Control": "no-cache",
                  // "Postman-Token": "9f1488d2-1096-4acf-b052-bb1721519dfd"
               }
           }
           var id;
           $.ajax(settings).done(function (response) {
               console.log(response);
             console.log(smart.tokenResponse);
             console.log(token);
             console.log(idtoken);
             id=response.id;
           });
      
          var p = defaultPatient();
          p.name=obj1.name;
          p.id=id;
          p.email=obj1.email;
          ret.resolve(p);
      
      } else {
        onError();
      }
    }

    FHIR.oauth2.ready(onReady, onError);
    return ret.promise();

  };

  function defaultPatient(){
    return {
      name:{value: ''},
      id:{value: ''},
      email:{value: ''},
    };
  }
  window.drawVisualization = function(p){
    $('#name').html(p.name);
    $('#id').html(p.id);
    $('#email').html(p.email);
  };
 
})(window);
