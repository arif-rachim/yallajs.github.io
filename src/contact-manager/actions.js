var initialState = {
    contacts: [
        {
            firstName : 'Jim',
            lastName : 'Rohn',
            email : 'jim.rohn@gmail.com',
            phoneNo : '050123456',
            id : 'a'
        },
        {
            firstName : 'Les',
            lastName : 'Brown',
            email : 'les.brown@gmail.com',
            phoneNo : '050123456',
            id : 'b'
        },
        {
            firstName : 'Eric',
            lastName : 'Thomas',
            email : 'eric.thomas@gmail.com',
            phoneNo : '050123456',
            id : 'c'
        },
        {
            firstName : 'Arif',
            lastName : 'Rachim',
            email : 'arif@gmail.com',
            phoneNo : '05012345',
            id : 'd'
        }
    ],
    selectedContact: {}
};

var reducer = function (prevState, action) {
    var newState = yalla.clone(prevState);
    switch (action.type){
        case 'update' :{
            newState.contacts.map(function(contact){
                if(contact.id == action.data.get('contactId')){
                    contact.firstName = action.data.get('firstName');
                    contact.lastName = action.data.get('lastName');
                    contact.email = action.data.get('email');
                    contact.phoneNo = action.data.get('phoneNo');
                }
                return contact;
            });

            break;
        }
        case 'new' :{
            var contact = {};
            contact.id = Math.round(Math.random()*1000);
            contact.firstName = action.data.get('firstName');
            contact.lastName = action.data.get('lastName');
            contact.email = action.data.get('email');
            contact.phoneNo = action.data.get('phoneNo');
            newState.contacts.push(contact);
            break;
        }
        case 'delete' : {
            newState.contacts = newState.contacts.filter(function(contact){
                return contact.id != action.id;
            });
            break
        }
        case 'selectContact' : {
            newState.selectedContact = newState.contacts.filter(function(contact){
                return contact.id == action.id;
            })[0];
            break
        }
    }
    return newState;
};

var store = yalla.createStore(reducer, initialState);

store.subscribe(function () {
    yalla.markAsDirty();
});

$export = {
    getState: function () {
        return store.getState();
    },
    showContact: function(id){
        window.location = '#app/contact-manager.index/contact-manager.detail:id='+id;
    },
    getContact : function(id) {
        if(!id || id == ''){
            return {};
        }else{
            var contacts = store.getState().contacts.filter(function (contact) {
                return contact.id == id;
            });
            if (contacts.length > 0) {
                if(store.getState().selectedContact.id != id){
                    store.dispatch({
                        type : 'selectContact',
                        id : id
                    });
                }
                return contacts[0];
            }
        }
    },
    saveForm : function(form){
        var formData = new FormData(form);
        if(formData.get('contactId')){

            store.dispatch({
                type : 'update',
                data : formData
            });
        }else{
            store.dispatch({
                type : 'new',
                data : formData
            });
        }

        form.reset();
        return false;
    },
    delete : function(id){
        store.dispatch({
            type : 'delete',
            id : id
        });
    },
    addNewItem : function(){
        location = '#app/contact-manager.index/contact-manager.detail:id=new';
    },
    isContactSelected : function(id){
        var state = store.getState();
        return state.selectedContact && state.selectedContact.id == id;
    }

};