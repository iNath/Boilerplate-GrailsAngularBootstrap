package com


class PartialController {

    def renderPartial(){

        def path = params.path

        render template: path
    }

}
