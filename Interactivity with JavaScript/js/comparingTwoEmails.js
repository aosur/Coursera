    function check() {
        
        var email1 = document.getElementById('email1');
        var email2 = document.getElementById('email2');

        if (email1.value != email2.value) {
            alert("The two emails must match!!");
            return false;
        }
    }

