<?php

$bsubject = "Booking Reservation";


$bname = $_POST['bname'];

$bphonenumber = $_POST['bphonenumber'];

$bemail = $_POST['bemail'];

$bdate = $_POST['bdate'];

$btime = $_POST['btime'];

$bguest = $_POST['bguest'];


$bmessage = "Customer Name:".$bname."\r\nReservation Date:".$bdate."\r\nReservation Time:".$btime."\r\nGuest Amount".$bguest."\r\nContact Information:".$bphonenumber."\r\n".$bemail;

$bmailheader = "From:".$bname."<".$bemail.">\r\n";

$brecipient = "kanto.websitesupport@gmail.com";


mail($brecipient, $bsubject, $bmessage, $bmailheader)
or die("Error!");

echo"Message Sent";

?>