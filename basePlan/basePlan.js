$(document).ready(function() {
    var $abonament = $("#abonament");
    generalMethods.setCheckbox();
    generalMethods.getNavigation();
    generalMethods.setButton();
    $abonament.on('click', () => window.location = '../planSteps/plansSteps.html');
});