window.addEventListener("DOMContentLoaded", () => {
    const firstList_firstName = 'Ludwig';
    const firstList_lastName = 'Beethoven';
    const firstList_address = '505 Main Street';
    const firstList_payRate = 18.9999
    const firstList_hireDate = new Date(2020, 11, 9).toLocaleDateString("en-US");

    document.getElementById('txtFirstNameLudwig').innerHTML = firstList_firstName; 
    document.getElementById('txtLastNameLudwig').innerHTML = firstList_lastName; 
    document.getElementById('txtAddressLudwig').innerHTML = firstList_address; 
    document.getElementById('txtPayRateLudwig').innerHTML = firstList_payRate.toFixed(1) 
    document.getElementById('txtHireDateLudwig').innerHTML = firstList_hireDate; 

    const secondList_firstName = 'Johann';
    const secondList_lastName = 'Bach';
    const secondList_address = '512 Main Street';
    const secondList_payRate = 25.5555
    const secondList_hireDate = new Date(2020, 11, 9).toLocaleDateString("en-US");

    document.getElementById('txtFirstNameJohann').innerHTML = secondList_firstName; 
    document.getElementById('txtLastNameJohann').innerHTML = secondList_lastName; 
    document.getElementById('txtAddressJohann').innerHTML = secondList_address; 
    document.getElementById('txtPayRateJohann').innerHTML = secondList_payRate.toFixed(1)
    document.getElementById('txtHireDateJohann').innerHTML = secondList_hireDate; 

    const thirdList_firstName = 'Wolfgang';
    const thirdList_lastName = 'Mozart';
    const thirdList_address = '600 Main Street';
    const thirdList_payRate = 50.1111
    const thirdList_hireDate = new Date(2020, 11, 9).toLocaleDateString("en-US");

    document.getElementById('txtFirstNameWolfgang').innerHTML = thirdList_firstName; 
    document.getElementById('txtLastNameWolfgang').innerHTML = thirdList_lastName; 
    document.getElementById('txtAddressWolfgang').innerHTML = thirdList_address; 
    document.getElementById('txtPayRateWolfgang').innerHTML = thirdList_payRate.toFixed(1)
    document.getElementById('txtHireDateWolfgang').innerHTML = thirdList_hireDate; 

});