<h2>List of stubs : </h2>
<div class="loading" ng-show="!loaded">Loading...</div>
<ul ng-show="loaded">
    <li ng-repeat="stub in stubs">{{ stub.id }} - {{ stub.name }}</li>
</ul>