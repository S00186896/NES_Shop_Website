  $(document).ready(function(){
      
    // check if user is logged in or logged out..
    var loggedin=localStorage.getItem('loggedIn'); 

    if (loggedin==1) {
        $("#loginlogout" ).html("Logout" );
        $( "#accountdetails" ).removeClass( "d-none" );            
    } else{
        $( "#accountdetails" ).addClass( "d-none" );
        $( "#loginlogout" ).html("Login" );
        $("#loginlogout" ).prop("href", "login.html");
    } 

    // wait for loginlogout button to be clicked
    $("#loginlogout").button().click(function(){
        if (loggedin==1) {
            localStorage.setItem('loggedIn',0);
            window.location.href = "login.html";
        }  else 
            window.location.href = "login.html";

    });       


    // wait for submit button to be clicked on login form
    $('form[name="login"]' ).submit(function( event ) {
        var email=$('input[name="email"]').val();
        var password =$('input[name="password"]').val();
        if (email=="wmitty@email.com" && password=="password1")  {   
            // successful login, user redirected to shop.html
            localStorage.setItem('loggedIn',1);    
            window.location.href = "shop.html";
        }
        else {
            // login unsuccessful, error message appears
            localStorage.setItem('loggedIn',0);
            $( "#loginerror" ).addClass( "d-block" );
        }
        return false;
    });     


    if (localStorage.getItem('userdetails') === null) {  
        var userDetails = {firstName:"Walter", lastName:"Mitty", dob:"1990-12-01",address1:"Buenos Ayres Drive", address2:"Strandhill", address3:"Co. Sligo"};
        alert(userDetails);
        localStorage.setItem('userdetails',JSON.stringify(userDetails));
    } else {
        userDetails=JSON.parse(localStorage.getItem('userdetails'));
    }

    if ($('#udetails').length > 0) {
        $('input[name="firstname"]').val(userDetails.firstName);         
        $('input[name="lastname"]').val(userDetails.lastName);
        $('input[name="dob"]').val(userDetails.dob);
        $('input[name="address1"]').val(userDetails.address1);
        $('input[name="address2"]').val(userDetails.address2);
        $('input[name="address3"]').val(userDetails.address3);
    }
      


    // wait for submit button to be clicked on userdetails update form
    $('form[name="userdetails"]' ).submit(function( event ) {
        userDetails.firstName=$('input[name="firstname"]').val();
        userDetails.lastName=$('input[name="lastname"]').val();
        userDetails.address1=$('input[name="address1"]').val(); 
        userDetails.address2=$('input[name="address2"]').val();   
        userDetails.address3=$('input[name="address3"]').val();         
        localStorage.setItem('userdetails',JSON.stringify(userDetails));
        return false;
    }); 

      
          // wait for submit button to be clicked on userdetails update form
    $('form[name="paymentdetails"]' ).submit(function( event ) {
        var cardnumber=$('input[name="cardnumber"]').val();
        if (cardnumber=="1234 5678 9102 3456") {
            $( "#payment-failure" ).addClass( "d-none" );
            $( "#payment-success" ).removeClass( "d-none" );
            $( "#buy-button" ).addClass( "d-none" );
            $( "#checkout" ).html("0" );
            
        } else {
            $( "#payment-failure" ).removeClass( "d-none" );
        }
        return false;
    }); 
      


    });
