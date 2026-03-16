(function executeRule(current, previous /*null when async*/) {

	current.user_name = current.email.split("@")[0];

})(current, previous);