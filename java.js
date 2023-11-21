

function submitFeedback() {
    var name = document.getElementById('name').value;
    var feedback = document.getElementById('feedback').value;

    if (name && feedback) {
        var feedbackList = document.getElementById('feedbackList');
        var feedbackItem = document.createElement('div');
        feedbackItem.innerHTML = '<strong>' + name + ':</strong> ' + feedback;
        feedbackList.appendChild(feedbackItem);

        // Clear the form fields
        document.getElementById('name').value = '';
        document.getElementById('feedback').value = '';
    } else {
        alert('Please enter both name and feedback.');
    }
}
/*orederboard*/
var orderList = [];

function addToOrder(event) {
    // Check if the clicked element is an image
    if (event.target.tagName === 'IMG') {
        var productName = event.target.getAttribute('data-name');
        var productPrice = parseFloat(event.target.getAttribute('data-price'));

        // Add the selected product to the order list
        orderList.push({ name: productName, price: productPrice });

        // Update the UI
        updateOrderUI();
    }
}

function updateOrderUI() {
    var orderBoard = document.getElementById('orderBoard');
    orderBoard.innerHTML = '';

    // Populate the order board
    orderList.forEach(function (item) {
        var orderItem = document.createElement('div');
        orderItem.className = 'order-item';
        orderItem.textContent = item.name + ' - $' + item.price.toFixed(2);
        orderBoard.appendChild(orderItem);
    });
}

function submitOrder() {
    
    alert('Order submitted!\nTotal: $' + calculateTotal().toFixed(2));
    // Clear the order list after submission
    orderList = [];
    updateOrderUI();
}

function calculateTotal() {
    return orderList.reduce(function (total, item) {
        return total + item.price;
    }, 0);
}

/*SIGNUP*/
function signup() {
  var username = document.getElementById("username").value;
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;

  
 
  var message = document.getElementById("message");
  message.innerHTML = `Welcome, ${username}! Your account has been created.`;
}
