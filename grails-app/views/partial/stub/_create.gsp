<form ng-submit="submit()" class="form-inline">

    <fieldset>
        <legend>Create a stub</legend>

        <div class="form-group">
            <label for="stubName">Stub name : </label>
            <input type="text" ng-model="query.name" placeholder="Name of stub" class="form-control" id="stubName" />
        </div>

        <button type="submit" class="btn btn-default" ng-class="{'disabled': sending}">
            Save
        </button>

    </fieldset>
</form>