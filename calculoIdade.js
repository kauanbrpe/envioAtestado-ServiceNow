function onChange(control, oldValue, newValue, isLoading, isTemplate) {
    if (isLoading || newValue === '') {
        return;
    }

    var birthDate = new Date(newValue);
    var today = new Date();

    var age = today.getFullYear() - birthDate.getFullYear();
    var m = today.getMonth() - birthDate.getMonth();
    var d = today.getDate() - birthDate.getDate();

    if ( m< 0 || (m === 0 && d < 0)) {
		age--;
    }

    g_form.setValue('idade', age);

   //Type appropriate comment here, and begin script below

}