<!DOCTYPE html>
<html lang="en" ng-app="MyApp">
	<head>
		<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
		<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">

		<title><g:layoutTitle /></title>

		<meta name="viewport" content="width=device-width, initial-scale=1.0">

		<link rel="shortcut icon" href="${assetPath(src: 'favicon.ico')}" type="image/x-icon">
		<link rel="apple-touch-icon" href="${assetPath(src: 'apple-touch-icon.png')}">
		<link rel="apple-touch-icon" sizes="114x114" href="${assetPath(src: 'apple-touch-icon-retina.png')}">

  		<asset:stylesheet src="application.css"/>

		<script type="text/javascript">
			var SERVER_URL = '${grailsApplication.config.grails.serverURL}';
		</script>
		<asset:javascript src="application.js"/>
		<g:layoutHead/>
	</head>
	<body>
		<toast></toast>
		<g:layoutBody/>
	</body>
</html>
