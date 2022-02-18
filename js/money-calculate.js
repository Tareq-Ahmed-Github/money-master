document.getElementById('calculate-btn').addEventListener('click', function () {
    // // storing income input
    const incomeInput = document.getElementById('income-input');
    const incomeAmount = incomeInput.value;

    // //expense input segment
    // food
    const foodExpenseInput = document.getElementById('food-expense-input');
    const foodExpenseAmount = foodExpenseInput.value;
    // rent
    const rentExpenseInput = document.getElementById('rent-expense-input');
    const rentExpenseAmount = rentExpenseInput.value;
    // clothes
    const clothesExpenseInput = document.getElementById('clothes-expense-input');
    const clothesExpenseAmount = clothesExpenseInput.value;

    // total
    const totalExpenseAmount = parseFloat(foodExpenseAmount) + parseFloat(rentExpenseAmount) + parseFloat(clothesExpenseAmount);

    //show amount
    // total expense
    const totalExpense = document.getElementById('total-expense');
    totalExpense.innerText = /*parseFloat(totalExpense.innerText) + */ totalExpenseAmount;
    // balance
    const balanceTotal = document.getElementById('balance');
    balanceTotal.innerText = incomeAmount - totalExpense.innerText;

    // clear ipnut box 
    incomeInput.value = '';
    foodExpenseInput.value = '';
    rentExpenseInput.value = '';
    clothesExpenseInput.value = '';


})

