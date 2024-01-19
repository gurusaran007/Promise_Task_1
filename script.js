var container = document.createElement("div");
container.className="container";
container.className="main";

var row = document.createElement("div");
row.className="row";





async function get_data(){
    var res = await fetch("https://dog.ceo/api/breeds/image/random");
    var final_res = await res.json();
    console.log(final_res);
    value_data(final_res);
}

get_data()


function value_data(final_res){
    for(let i=0;i<10;i++)
    {
        var col = document.createElement("div");
        col.className="col-md-4";
        col.innerHTML=
        `<div style="width: 18rem;margin: 10px;" class="card" >
    
        <div style="background-color: lightgray;text-align:center;" class="card-body" >
        <p class="card-text"><b>Property name</b>:${final_res.hasOwnProperty.name} </p>
        <p class="card-text"><b>value name</b>: ${final_res.valueOf.name}</p>
        
        </div>
      </div>`
      row.append(col);
      container.append(row);
      document.body.append(container);
    }
    }
    


