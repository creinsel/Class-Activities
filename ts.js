var firebaseConfig = {
    apiKey: "AIzaSyAoPK-NqEQusDpBw8dKOj0WuJq_XgD-QIk",
    authDomain: "timesheetlogic-81c6a.firebaseapp.com",
    databaseURL: "https://timesheetlogic-81c6a.firebaseio.com",
    projectId: "timesheetlogic-81c6a",
    storageBucket: "timesheetlogic-81c6a.appspot.com",
    messagingSenderId: "503056420108",
    appId: "1:503056420108:web:f740fda9e6962c2e30cd29",
    measurementId: "G-HDXVYD8JE4"
  };
  
firebase.initializeApp(firebaseConfig);
var database=firebase.database();

// setting initial values
var name="";
var role="";
var startDate="";
var monthly="";

$("#click-me").on("click", function(event){
    event.preventDefault();

    var name=$("#name").val().trim();
    var role=$("#role").val().trim();
    var startDate=$("#start-date").val().trim();
    var monthly=$("#monthly-rate").val().trim();

   $('#row').append('<tr>'+ '<td>'+name+ '</td>' + '<td>'+role+ '</td>'+ '<td>'+startDate +'</td>'+ '<td>'+ " " +'</td>'+ '<td>'+monthly +'</td>'+ '<td>'+ " "+ '</td>'+ '</tr>');

database.ref().push({
    name,
    role,
    startDate,
    monthly

})
});

Swal.fire({
    title: 'Error!',
    text: 'Do you want to continue',
    icon: 'error',
    confirmButtonText: 'Cool'
  })

Swal.fire({
    title: 'Are you sure?',
    text: "You won't be able to revert this!",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Yes, delete it!'
  }).then((result) => {
    if (result.value) {
      Swal.fire(
        'Deleted!',
        'Your file has been deleted.',
        'success'
      )
    }
  })
