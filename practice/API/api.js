const baseURL = "http://openapi.seoul.go.kr:8088";
const keyValue = "4472494141736f7338387043545168";
const type = "json";
const service = "LOCALDATA_031305";
const start_index = 1;
const end_index = 500;
const url = baseURL + "/" + keyValue + "/" + type + "/" +
         service + "/" + start_index + "/" + end_index + "?";

console.log(url);
// 4472494141736f7338387043545168/json/LOCALDATA_031305/1/10/?
const drawInfoElement = document.getElementById("draw-info");

axios.get(url).then(response => response.data)
.then(result => {
    console.log(result);
    drawInfoElement.innerHTML = ``;
    let obj = result.LOCALDATA_031305.row;
    obj.forEach(element => {
        drawInfoElement.innerHTML += 
            `
            <div class="col-md-4">
               <div>
               <p>${element.BPLCNM}</p>
               <p>${element.SITEWHLADDR}</p>
               <p>${element.TRDSTATENM}</p>
               <p>${element.DTLSTATENM}</p>
               </div>
               <br><br>
            </div>
            `;
    });
    
});