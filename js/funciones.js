function traerInformacionGamas(){
    $.ajax({
        url:"http://129.151.122.234:8080/api/Gama/all",
        type:"GET",
        datatype:"JSON",
        success:function(response){
            console.log(response);
            pintarRespuesta(response);
        },
    });
}

function pintarRespuesta(response){
    let myTable="<table>";
    for(i=0;i<response.length; i++){
        myTable+="<tr>";
        myTable+="<td>"+response[i].name+"</td>";
        myTable+="<td>"+response[i].description+"</td>";
        myTable+="<tr>";
    }
    myTable +="</table>";
    $("#resultado1").html(myTable);
}

function guardarInformacionGama(){
    let var1={
        name:$("#Gname").val(),
        description:$("#Gdescription").val()
    };
    $.ajax({
        url:"http://129.151.122.234:8080/api/Gama/save",
        type:"POST",
        contentType:"application/json; charset=utf-8",
        datatype:"JSON",
        data: JSON.stringify(var1),
        success:function(response){
            console.log(response);
            console.log("Se guardo correctamente");
            alert("Se guardo correctamente");
            window.location.reload()
        },
        error: function(jqXHR, textStatus, errorThrown){
            window.location.reload()
            alert("No se guardo correctamente");
        }
    });

}

function traerInformacionCars(){
    $.ajax({
        url:"http://129.151.122.234:8080/api/Car/all",
        type:"GET",
        datatype:"JSON",
        success:function(response){
            console.log(response);
            pintarRespuestaCar(response);
        },
    });
}

function pintarRespuestaCar(response){
    let myTable="<table>";
    for(i=0;i<response.length; i++){
        myTable+="<tr>";
        myTable+="<td>"+response[i].name+"</td>";
        myTable+="<td>"+response[i].brand+"</td>";
        myTable+="<td>"+response[i].year+"</td>";
        myTable+="<td>"+response[i].description+"</td>";
        myTable+="<tr>";
    }
    myTable +="</table>";
    $("#resultado2").html(myTable);
}

function guardarInformacionCar(){
    let var2={
        name:$("#name").val(),
        brand:$("#brand").val(),
        year:$("#year").val(),
        description:$("#description").val()
    };
    $.ajax({
        url:"http://129.151.122.234:8080/api/Car/save",
        type:"POST",
        contentType:"application/json; charset=utf-8",
        datatype:"JSON",
        data: JSON.stringify(var2),
        success:function(response){
            console.log(response);
            console.log("Se guardo correctamente");
            alert("Se guardo correctamente");
            window.location.reload()
        },
        error: function(jqXHR, textStatus, errorThrown){
            window.location.reload()
            alert("No se guardo correctamente");
        }
    });
}

function traerInformacionClients(){
    $.ajax({
        url:"http://129.151.122.234:8080/api/Client/all",
        type:"GET",
        datatype:"JSON",
        success:function(response){
            console.log(response);
            pintarRespuestaClient(response);
        },
    });
}

function pintarRespuestaClient(response){
    let myTable="<table>";
    for(i=0;i<response.length; i++){
        myTable+="<tr>";
        myTable+="<td>"+response[i].email+"</td>";
        myTable+="<td>"+response[i].password+"</td>";
        myTable+="<td>"+response[i].name+"</td>";
        myTable+="<td>"+response[i].age+"</td>";
        myTable+="<tr>";
    }
    myTable +="</table>";
    $("#resultado3").html(myTable);
}

function guardarInformacionClient(){
    let var3={
        email:$("#Cemail").val(),
        password:$("#Cpassword").val(),
        name:$("#Cname").val(),
        age:$("#Cage").val()
    };
    $.ajax({
        url:"http://129.151.122.234:8080/api/Client/save",
        type:"POST",
        contentType:"application/json; charset=utf-8",
        datatype:"JSON",
        data: JSON.stringify(var3),
        success:function(response){
            console.log(response);
            console.log("Se guardo correctamente");
            alert("Se guardo correctamente");
            window.location.reload()
        },
        error: function(jqXHR, textStatus, errorThrown){
            window.location.reload()
            alert("No se guardo correctamente");
        }
    });
}

function traerInformacionMessages(){
    $.ajax({
        url:"http://129.151.122.234:8080/api/Message/all",
        type:"GET",
        datatype:"JSON",
        success:function(response){
            console.log(response);
            pintarRespuestaMessage(response);
        },
    });
}

function pintarRespuestaMessage(response){
    let myTable="<table>";
    for(i=0;i<response.length; i++){
        myTable+="<tr>";
        myTable+="<td>"+response[i].messagetext+"</td>";
        myTable+="<tr>";
    }
    myTable +="</table>";
    $("#resultado4").html(myTable);
}

function guardarInformacionMessage(){
    let var4={
        messagetext:$("#messagetext").val()
    };    
    $.ajax({
        url:"http://129.151.122.234:8080/api/Message/save",
        type:"POST",
        contentType:"application/json; charset=utf-8",
        datatype:"JSON",
        data: JSON.stringify(var4),
        success:function(response){
            console.log(response);
            console.log("Se guardo correctamente");
            alert("Se guardo correctamente");
            window.location.reload()
        },
        error: function(jqXHR, textStatus, errorThrown){
            window.location.reload()
            alert("No se guardo correctamente");
        }
    });
}

function traerInformacionReservations(){
    $.ajax({
        url:"http://129.151.122.234:8080/api/Reservation/all",
        type:"GET",
        datatype:"JSON",
        success:function(response){
            console.log(response);
            pintarRespuestaReservation(response);
        },
    });
}

function pintarRespuestaReservation(response){
    let myTable="<table>";
    for(i=0;i<response.length; i++){
        myTable+="<tr>";
        myTable+="<td>"+response[i].startdate+"</td>";
        myTable+="<td>"+response[i].devolutiondate+"</td>";
        myTable+="<td>"+response[i].status+"</td>";
        myTable+="<tr>";
    }
    myTable +="</table>";
    $("#resultado5").html(myTable);
}

function guardarInformacionReservation(){
    let var5={
        startdate:$("#startdate").val(),
        devolutiondate:$("#devolutiondate").val(),
        status:$("#Rstatus").val(),
    };    
    $.ajax({
        url:"http://129.151.122.234:8080/api/Reservation/save",
        type:"POST",
        contentType:"application/json; charset=utf-8",
        datatype:"JSON",
        data: JSON.stringify(var5),
        success:function(response){
            console.log(response);
            console.log("Se guardo correctamente");
            alert("Se guardo correctamente");
            window.location.reload()
        },
        error: function(jqXHR, textStatus, errorThrown){
            window.location.reload()
            alert("No se guardo correctamente");
        }
    });
}