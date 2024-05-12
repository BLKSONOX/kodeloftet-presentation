/*
    
    A JavaScript class outside of webstandards conventions
    looks like a C program

    Mimicks C object model with functions wrapped within objects
    interfaces are either models of a class, or the wrapper around a class
    two ways

    use constant to declare interfaces as models, different Object oriented pattern
    not covered here

    bind method usually used to extend

    Author Bendikt Martin Myklebust 

*/

____ = {

    /*     
       
        Argument against WEB API's
        everyone uses loading anyways for UI/UX
        and animations

    */
    xhttp: new XMLHttpRequest(),
    docs: {0:"html", 1:"css"},

    /*       
        Why not just use CSS classes? 
        the identifiers are there for a reason, classes is generative

        generative means programatically changable 
        css id and class logic delinates here

    */

    
    /* why not objects? binding tree unsets, just like C */
    bindingTree: new Array,

    

    exec: {
        /* 
            
            use elements array as search table within the stylesheet
            clone style properties add traverse options for "child elements"

            return objects of said manipulated template into css class structures
        
        */
        
        /* A JS class inside a JS class also possible in regular languages, differently */
        /* Also known as string arrays, string arrays can contain code and pointer addresses */
        /* use self to escape this scope */

        _(){ 
            
            /* regular forever loop here as event loop */
            /* can direct towards one already running */

            /* 
                
                Event calls are just ques in an array fired off if signal recived 
                it's all the same as low level code

                can do this without forever loop

            */
            xhttp = self.window.____.xhttp;
            return  xhttp;
        },
        
        subobject_: function (){
            
            /* here goes private objects inside local functions scope */
            /* Private object nest until code ran and returned */
            eventObject = {}
            obj = { newobjects: "new objects"}

            /* here goes for loop to manipulate new objects that's not static */
            /* in C this would be a type array with string arrays */
            return( {nest: "object functions nesting" + obj} )

            /* Event rotational objects and functions */
        },
        subobject: {
            text: "text"
        },

        
    },

    /* 
        just use JSON files HTML attributes are as old as HTML can be anything
    */
    models: { _(){


        /* Standard formating */
        /* mutatet exec */
        /* compressed programming, rock solid programming */

        /* 
            property and functions mutations, also known as constructor 
            which makes the whole defining the constructors more akin to how API's are really designed at the fundemental levels
        */
        m = self.window.____.exec;
        /* bind or change said function, both possible also in C */
        return m._

        /* private functions */
        /* escape scope with self */

        /* access local scope with this */
        /* models.newProperty._() */

        },

        /* public functions */
    },

    documents:{ _(){


        /* Standard formating */
        /* mutatet exec */
        /* compressed programming, rock solid programming */

        /* 
            property and functions mutations, also known as constructor 
            which makes the whole defining the constructors more akin to how API's are really designed at the fundemental levels
        */
        d = self.window.____.exec;
        /* bind or change said function, both possible also in C */
        return d._

        /* private functions */
        /* escape scope with self */

        /* access local scope with this */
        /* documents.newProperty._() */

        },

        /* public functions */
    },

    /* 
        
        my hex dump is not the same as your hex dump, also known as transcoding 
        key here not the same as key on server etc
        public pipe, private pipe, private pipe feeds public pipe
        kinda like the economy

        to do afterwards, it's all colours and none colours outside of
       
        in C this would be the direct memory addresses
        or even device hex stream addresses of said chip

    */
    hexStream:{

    },
    
}

console.log(____.documents._());

/* add return nesting, allows for private and public chain link class constructors */
/* From here events and callback loops are very straight forward */

/* 
    
    Look up the program would look exactly like an object oriented C program 
    C is as loosleey typed as Javascript in its nature
    pointers, functions, pointer arrays, nested functions, similar scope structures
    basically the same with syntax variation

    escaping and entering scopes would be pointer manipulation
    with struct and bind manipulations

    this JS document:

    <object>
    |   <constructor>(property)
            <function>
            <struct>(property)
                <function>
            <struct>(property)
        <struct>(property)
            <function>

    how interfaces are made, this approch declares the whole structure as interfaces
    and is C friendly

    a private function would be an anonoymous or named function within the struct and method
    binding to the object tree declared visible or not, where event loops and call back functions tend to get called

    same as C

*/