function toggleButtons(sectionId) {
  const sending = document.getElementById('sending');
  const receive = document.getElementById('receive');
  const sendMoney = document.getElementById('send-money');
  const receiveMoney = document.getElementById('receive-money');

  sending.classList.remove('active');
  receive.classList.remove('active');
  sendMoney.classList.remove('active');
  receiveMoney.classList.remove('active');

  if(sectionId === 'sendMoney')
    {
      sending.classList.add('active');
      sendMoney.classList.add('active');
    }
    else
    {
      receive.classList.add('active');
      receiveMoney.classList.add('active');
    }
}

document.addEventListener('DOMContentLoaded', function() {
  toggleSection('send-money');
});



function burgerIcon(){
  const menu = document.getElementById('menu');
  const burgerIcon = document.getElementById('burger-icon');
  const closeIcon = document.getElementById('close-icon');
  burgerIcon.style.display = "none";
  closeIcon.style.display = "block";
  menu.style.display = 'block';
}

function closeIcon()
{
  const closeIcon = document.getElementById('close-icon');
  const menu = document.getElementById('menu');
  const burgerIcon = document.getElementById('burger-icon');
  burgerIcon.style.display = "block";
  closeIcon.style.display = "none";
  menu.style.display = 'none';
}

function validateSendMoney() {
  const recipientName = document.getElementById('sendRecipientName').value;
  const accountNumber = document.getElementById('sendAccountNumber').value;
  const amount = document.getElementById('sendAmount').value;
  const nameError = document.getElementById('sendRecipientNameError');
  const accountNumberError = document.getElementById('sendAccountNumberError');
  const amountError = document.getElementById('sendAmountError');

  if(!recipientName){
    nameError.innerHTML = "*Name is invalid";
    return;
  } 
  else nameError.innerHTML = "";

  if(!accountNumber || accountNumber < 0 ) {
    accountNumberError.innerHTML = "*Account Number is Invalid";
    return;
  }else accountNumberError.innerHTML = "";

  if(!amount || amount < 0){
    amountError.innerHTML = "*Amount is invalid";
    return;
  }else amountError.innerHTML = ""; 

  alert('Money sent successfully!');
}

function validateRequestMoney() {
  const recipientName = document.getElementById('requestRecipientName').value;
  const amount = document.getElementById('requestAmount').value;
  const contact = document.getElementById('requestContact').value;

  const nameError = document.getElementById('requestRecipientNameError');
  const amountError = document.getElementById('requestAmountError');
  const ContactError = document.getElementById('requestContactAmount');

  if(!recipientName){
     nameError.innerHTML = "*Name is invalid";
    return;
    }
    else{
      nameError.innerHTML = "";
    }
  if(!amount || amount<0){
    amountError.innerHTML = "*Amount is Invalid";
    return;
  } 
  else
  {
    amountError.innerHTML = "";
  }
  if(!contact){
    ContactError.innerHTML = "*Enter Correct Contact deatil";
    return;
  } 
  else 
  {
    ContactError.innerHTML = "";
  }
  alert('Money request sent successfully!');
}

function Contact(){
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;
  const nameError = document.getElementById('nameError');
  const emailError = document.getElementById('emailError');
  const messageError = document.getElementById('messageError');

  if(!name){
    nameError.innerHTML = "*please enter name";
    return;
  }
  else nameError.innerHTML = "";

  if(!email)
    {
      emailError.innerHTML = "*Enter Full Email Address";
      return;
    }else emailError.innerHTML = "";

    if(!message)
      {
        messageError.innerHTML = "*Drop your message";
        return;
      }
      else messageError.innerHTML = "";

      alert("Send Message sussecceful");
}