/* Creare una griglia formata da 8x8 quadratini tutti bianchi.
15 di questi quadratini (scelti a caso all’inizio) se cliccati
diventano rossi, gli altri diventano verdi
*BONUS:*
1 - Sopra alla griglia deve esserci un contatore che conta
quanti rossi e quanti verdi sono stati scoperti; */



$( document ).ready(function() {
  var contred = 0;
  var contgreen = 0;
  $(".red").click(function() {
    $(this).css("background-color", "red");
    contred++;
    document.getElementById("miorosso").innerHTML = contred;
  });
  $(".green").click(function() {
    $(this).css("background-color", "green");
    contgreen++;
    document.getElementById("mioverde").innerHTML = contgreen;
  });
});
