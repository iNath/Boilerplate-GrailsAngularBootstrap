package com

import grails.converters.JSON

class StubController {

    def create(){

        // request.JSON contains post parameters
        println request.JSON

        sleep(1000); // process simulation

        render text: [success: true, message: 'Successfully created'] as JSON
    }

    def list(){

        sleep(1000); // process simulation

        render text: [
                stubs: [
                        [
                                id  : 1,
                                name: 'Stub 1'
                        ],
                        [
                                id: 2,
                                name: 'Stub 2'
                        ]
                ]
        ] as JSON

    }

}
