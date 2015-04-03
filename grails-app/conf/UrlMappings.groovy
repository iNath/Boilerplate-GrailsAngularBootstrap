class UrlMappings {

	static mappings = {
        /* // In a SPA this should not be used
        "/$controller/$action?/$id?(.$format)?"{
            constraints {
                // apply constraints here
            }
        }
        //*/

        "/partial/$path**"{
            controller = 'partial'
            action = 'renderPartial'
        }

        "/api/$controller/$action/$id?"{

        }

        "/"(view:"/index")
        "500"(view:'/error')
	}
}
