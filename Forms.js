function validate()
{
    var up = /^[A-Za-z]+$/
    var pnum = /^[6-9]{1}[0-9]{9}$/
    var pv = document.getElementById("pnum").value
    var uv = document.getElementById("uname").value
    var pp = /[A-Z]{1}[a-z]{7}[1-9]{1}/
    var pu = document.getElementById("pass").value

    if(uv=="")
    {
        document.getElementById("msg").innerHTML="Enter the user name"
        return false
    }
    if(uv.match(up))
    true
    else
    {
        document.getElementById("msg").innerHTML="user name should contain alphabets only"
        return false
    }
    if(uv.length<3)
    {
        document.getElementById("msg").innerHTML="user name should contain minimum 3 character"
        return false
    }
    if(uv.length>=9)
    {
        document.getElementById("msg").innerHTML="user name should contain maxmium 9 characters"
        return false
    }
    if(pv=="")
    {
        document.getElementById("msg1").innerHTML="Enter the phone number"
        return false
    }
    if(pv.match(pnum))
    true
else
{
    document.getElementById("msg1").innerHTML="Invalid phone number"
    return false
}
if(pu=="")
{
    document.getElementById("msg2").innerHTML = "Enter the password"
    return false
}
if(pu.match(pp))
true
else
{
    document.getElementById("msg2").innerHTML = "Entered password is too weak!!!"
    return false
}
if(pu.length<8)
{
    document.getElementById("msg2").innerHTML = "Password must contain 8 characters!!!"
    return false
}
if(pu.length>13)
{
    document.getElementById("msg2").innerHTML = "Your password is too long!!!"
    return false
}
}