
            const table=[
{categary:"A", name:"C&R rules file", specification:"", Duration:"Indefinite period"},
{categary:"A", name:"Sanctioned Post file", specification:"", Duration:"Indefinite period"},
{categary:"A", name:"Reorganization file", specification:"", Duration:"Indefinite period"},
{categary:"A", name:"Seniority file", specification:"", Duration:"Indefinite period"},
{categary:"A", name:"Circular file", specification:"", Duration:"Indefinite period"},
{categary:"A", name:"Govt order file", specification:"", Duration:"Indefinite period"},
{categary:"A", name:"scheme guidelines", specification:"", Duration:"Indefinite period"},
{categary:"A", name:"rules file", specification:"", Duration:"Indefinite period"},
{categary:"A", name:"Vehicle Purchase", specification:"", Duration:"Indefinite period"},
{categary:"A", name:"DPC register", specification:"", Duration:"Indefinite period"},
{categary:"A", name:"Instrument/Furniture register", specification:"", Duration:"Indefinite period"},        
{categary:"A", name:"permanent assets register", specification:"", Duration:"Indefinite period"},
{categary:"A", name:"Assets & liability file", specification:"", Duration:"Indefinite period"},
{categary:"A", name:"acquittance register", specification:"", Duration:"Indefinite period"},       
{categary:"A", name:"service book", specification:"", Duration:"Indefinite period"},         
{categary:"", name:"service book", specification:"Death within 5 year of appointment", Duration:"6 month from the death"},       
{categary:"", name:"service book", specification:"retrenched/removed/dismissed", Duration:"5 years if no cases are" + '<br>' + "in the any court or " + '<br>' + "3 years after the final" + '<br>' + "judgement"}, 
{categary:"", name:"service book", specification:"retired/die while in the service", Duration:"20 years from date of"+'<br>'+ "retirement/death"},
{categary:"A", name:"pension papers", specification:"after the introduction of NPS", Duration:"25 years from date of death"},
{categary:"B", name:"Recruitment file", specification:"", Duration:"30 years"},
{categary:"B", name:"cash book", specification:"", Duration:"30 years"},
{categary:"B", name:"promotion/roaster file", specification:"", Duration:"30 years"},
{categary:"B", name:"Outsourcing recruitment and tender file", specification:"", Duration:"30 years"},
{categary:"B", name:"Remittance register", specification:"", Duration:"30 years"},
{categary:"B", name:"62B paper", specification:"", Duration:"30 years"},
{categary:"B", name:"62 A register/encashment register", specification:"", Duration:"30 years"},
{categary:"B", name:"Voucher file", specification:"", Duration:"30 years"},
{categary:"B", name:"Vehicle movement register/log book", specification:"", Duration:"30 years"},
{categary:"B", name:"family pension paper", specification:"", Duration:"30 years"},
{categary:"B", name:"Attendance register", specification:"", Duration:"30 years"},
{categary:"B", name:"Disciplinary action file", specification:"", Duration:"30 years"},
{categary:"B", name:"court judgement File", specification:"", Duration:"30 years"}, 
{categary:"B", name:"livestock management register in Farms", specification:"", Duration:"30 years"}, 
{categary:"B", name:"Farms maintenace register", specification:"", Duration:"30 years"},
{categary:"C", name:"Employee personal information file", specification:"", Duration:"10 years"}, 
{categary:"c", name:"Semen stock book", specification:"", Duration:"10 years"}, 
{categary:"C", name:"Animal health camp and calf rally register", specification:"", Duration:"10 years"}, 
{categary:"c", name:"electronic goods stock book", specification:"", Duration:"10 years"},             
{categary:"C", name:"Inward book", specification:"", Duration:"10 years"}, 
{categary:"c", name:"outward/dispatch book", specification:"", Duration:"10 years"}, 
{categary:"C", name:"postal stamp register", specification:"", Duration:"10 years"}, 
{categary:"c", name:"local delivary book", specification:"", Duration:"10 years"},
{categary:"C", name:"casual leave register", specification:"", Duration:"10 years"}, 
{categary:"c", name:"medicine stock book", specification:"", Duration:"10 years"}, 
{categary:"C", name:"Vaccine stock & Vaccination register", specification:"", Duration:"10 years"}, 
{categary:"c", name:"Artificial Insemination register", specification:"", Duration:"10 years"},        
{categary:"C", name:"dismissed employee service book", specification:"", Duration:"10 years"}, 
{categary:"c", name:" AI straw production file", specification:"", Duration:"10 years"}, 
{categary:"C", name:"Detailed contigency bill register", specification:"", Duration:"10 years"}, 
{categary:"C", name:"Office expenditure file", specification:"", Duration:"10 years"},
{categary:"C", name:"Travelling allowance register", specification:"", Duration:"10 years"},       
{categary:"c", name:"beneficiary selection and schemes file", specification:"", Duration:"10 years"},
{categary:"C", name:"livestock insurance scheme file", specification:"", Duration:"10 years"}, 
{categary:"c", name:"Auction file", specification:"", Duration:"10 years"}, 
{categary:"C", name:"livestock census file", specification:"", Duration:"10 years"}, 
{categary:"c", name:"sample survey file", specification:"", Duration:"10 years"}, 
{categary:"c", name:"KDP file", specification:"", Duration:"10 years"}, 
{categary:"C", name:"Training related file", specification:"", Duration:"10 years"}, 
{categary:"c", name:"Lab or x-ray report", specification:"", Duration:"10 years"},
{categary:"C", name:"livestock insurance scheme file", specification:"", Duration:"10 years"}, 
{categary:"c", name:"Promation/Timebound/increment file", specification:"", Duration:"10 years"}, 
{categary:"C", name:"Transfer File", specification:"", Duration:"10 years"}, 
{categary:"c", name:"Leave file", specification:"", Duration:"10 years"},
{categary:"c", name:"No objection file", specification:"", Duration:"10 years"}, 
{categary:"C", name:"visitor opinion register", specification:"", Duration:"10 years"}, 
{categary:"c", name:"Calf born register", specification:"", Duration:"10 years"}, 
{categary:"c", name:"Pregnancy diagnosis register", specification:"", Duration:"10 years"}, 
{categary:"C", name:"Deworming register", specification:"", Duration:"10 years"}, 
{categary:"c", name:"Out patient treatment register", specification:"", Duration:"10 years"},
{categary:"C", name:"On visit treatment Register", specification:"", Duration:"10 years"}, 
{categary:"c", name:"Movement Register", specification:"", Duration:"10 years"}, 
{categary:"", name:"Paybill", specification:"excluding acquittance", Duration:"6 years"}, 
{categary:"", name:"Subvoucher", specification:"not sent to audit office", Duration:"3 years"}, 
{categary:"", name:"contract/agreement", specification:"", Duration:"5 years" + '<br>' + "after the contract or" + '<br>' + "agreement terminated"}
  ]
    const tableHeader=Object.keys(table[0]);
    const search=document.querySelector(".filter-input");
    const output=document.querySelector(".output");
     window.addEventListener("DOMContentLoaded", loadTable);
     search.addEventListener("input", filter); 
         function loadTable(){
             let temp=`<table><tr>`//use back tic symbol to create template variable
          // tableHeader.forEach(function(name){
           //  console.log(name)}
           tableHeader.forEach(header=> temp+= `<th> ${header.toUpperCase()} </th>`);
             temp+=`<tr>` 
             table.forEach(row=>{
                 temp +=`
    <tr>
<td>${row.categary}</td>
<td>${row.name}</td>
<td>${row.specification}</td>
<td>${row.Duration}</td>
    </tr>
`    })
             temp+=`</table>`
              output.innerHTML=temp;
                       
         };
         
         function filter(e){
                        let results;
             let temp="";
           results = table.filter( item=>
         //  item.state.toLowerCase().includes(e.target.value.toLowerCase())||  
           item.categary.toLowerCase().includes(e.target.value.toLowerCase())||
           item.name.toLowerCase().includes(e.target.value.toLowerCase())|| 
           item.specification.toLowerCase().includes(e.target.value.toLowerCase())||  
           item.Duration.toLowerCase().includes(e.target.value.toLowerCase())           
           );
           if(results.length>0){
                temp=`<table><tr>`//use back tic symbol to create template variable
                tableHeader.forEach(header=> temp+= `<th> ${header.toUpperCase()} </th>`);
             temp+=`<tr>` 
             results.forEach(row=>{
                 temp +=`
    <tr>
<td>${row.categary}</td>
<td>${row.name}</td>
<td>${row.specification}</td>
<td>${row.Duration}</td>
    </tr>
`    
             });
             temp+=`</table>`               
           }else{
               temp=`<div class="no item">Item Not Found</div>`
           }
             output.innerHTML=temp;
          }
    
       