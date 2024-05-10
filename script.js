/*
    A JavaScript class outside of conventions*/

____ = {

    /* 
        
    
        Argument against WEB API's
        everyone uses loading anyways for UI/UX
        and animations

    */
    xhttp: "string",

    /*       
        Why not just use classes? 
        the identifiers are there for a reason, classes is generative

        generative means programatically changable 
        css id and class logic delinates here
    */

    

    extractCSSTemplate: {
        /* 
            
            use elements array as search table within the stylesheet
            clone style properties add traverse options for "child elements"

            return objects of said manipulated template into css class structures
        
        */
        subobject_: function (){
            
            /* here goes private objects inside local functions scope */

            /* Private object nest until code ran and returned */
            obj = { newobjects: "new objects"}

            /* here goes for loop to manipulate new objects that's not static */

            return( {nest: "object functions nesting" + obj} )
        },
        subobject: {
            text: "text"
        }
        
    }

    
    
}

console.log(____.extractCSSTemplate.subobject_().nest.obj)

/* add return nesting, allows for private and public chain link class constructors */