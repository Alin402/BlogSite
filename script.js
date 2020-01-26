function SendEmail()
{
    var EmailButton = document.querySelector("#SubmitBtn");
    var emailContentBox = document.querySelector("#ContentBox");
    var NameBox = document.querySelector("#NameBox");
    var EmailBox = document.querySelector("#EmailBox");
    var emailContent = emailContentBox.value;
    var email = EmailBox.value;
    var name = NameBox.value;

    alert(name + " " + email + " " + emailContent);
    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "balanescu.alin03@yahoo.com",
        Password : "61938C57C0AF66A96A6690EED2F8484D48A3",
        To : 'balanescu.alin03@gmail.com',
        From : email,
        Subject : name,
        Body : emailContent
    }).then(
      message => alert("Email has been sent")
    );

    NameBox.value = "";
    EmailBox.value = "";
    emailContentBox.value = "";
}