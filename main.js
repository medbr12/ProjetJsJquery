const odd_even_form = document.forms['pairImpForm']
const my_number = odd_even_form ['number_name']
const divTable = document.querySelector['#tableDiv']
const table = document.createElement['table']
table.classList.add('table')
table.classList.add('table-hoverd')
table.classList.add('table-borderd')
table.classList.add('center')
const row_header =['Impaires','paires','somme',"multiplication"]
const tab_paires =[]
const tab_impaires =[]
function createTable(){
    for(let i=0;i<2; i++){
        const tr = document.createElement('tr')
        for(let j=0; j<4;i++){
            if(i==0){
        const th = document.createElement('th')
        th.textContent= row_header[j]
        tr.appendChild(th)
            }
            else{
        const td = document.createElement('td')
        tr.appendChild(td)
            }
        }
        table.appendChild(tr)
    }
    divTable.appendChild(table)
}
createTable()

odd_even_form.addEventListener('submit',function(e){
    e.preventDefault()
if(parseFloat(my_number.value)%2===0 && !tab_paires.includes(parseFloat(my_number.value))){
    const td_paires = document.querySelectorAll('#tableDiv>table>tr>td')[1]
    td_paires.innerHTML += `<li>${my_number.value}</li>`
    tab_impaires.push(parseFloat(my_number.value))
}
else if(parseFloat(my_number.value)%2===0 && !tab_paires.includes(parseFloat(my_number.value))){
      td_impaires.innerHTML += `<li>${my_number.value}</li>`
    tab_impaires.push(parseFloat(my_number.value))
}
})