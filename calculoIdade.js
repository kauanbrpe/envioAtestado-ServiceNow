(function executeRule(current, previous /*null when async*/) {
		
		var birth = new GlideDate();
		birth.setValue(current.date_of_birth);

        var today = new GlideDate();
        var age = parseInt(today.getByFormat('yyyy'), 10) - parseInt(birth.getByFormat('yyyy'), 10);

        var tMd = today.getByFormat('MMdd');
        var bMd = birth.getByFormat('MMdd');

        if (tMd < bMd){
            age--;
        }

        current.age = age;

})(current, previous);