/* Creare una griglia formata da 8x8 quadratini tutti bianchi.
15 di questi quadratini (scelti a caso all’inizio) se cliccati
diventano rossi, gli altri diventano verdi */

$( document ).ready(function() {
  $(".red").click(function() {
    $(this).css("background-color", "red");
  });
  $(".green").click(function() {
    $(this).css("background-color", "green");
  });
});
