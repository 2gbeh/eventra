from flask import request
from apiflask import APIFlask
from api.db.ApiManager import ApiManager
from Constants import FIREBASE_EVENTRA_COLLECTION

apiflask = APIFlask(__name__)

apiManager: ApiManager = ApiManager()


# ERROR HANDLING ============================================================
@apiflask.errorhandler(404)
def route_not_found(error):
    return {
        "status": False,
        "message": f"{error}",
        "data": None
    }


@apiflask.errorhandler(400)
def bad_request(error):
    return {
        "status": False,
        "message": f"{error}",
        "data": None
    }


@apiflask.errorhandler(500)
def server_error(error):
    return {
        "status": False,
        "message": f"{error}",
        "data": None
    }


@apiflask.errorhandler(502)
def bad_gateway_error(error):
    return {
        "status": False,
        "message": f"{error}",
        "data": None
    }


# **********************************************************************************

# API HANDLING ===================================================================
# root api path

@apiflask.get("/")
def index():
    """
    This does not do anything
    :return:
    """
    return {
        "status": True,
        "message": "Hello from Eventra",
        "data": None
    }


# get all event from firebase
@apiflask.get("/events")
def get_all_event_from_firebase():
    """
    This returns every document in the eventra collection.
    NOTE be careful with this since could take too long
    :return:
    """
    data = apiManager.readAllDocument(collection=FIREBASE_EVENTRA_COLLECTION)
    return {
        "status": True,
        "message": "Could not get all event from firebase",
        "data": data
    }


# get one event from firebase
@apiflask.get("/events/<doc_id>")
def get_one_event_from_firebase(doc_id: str):
    """Only one document is gotten from the database"""
    data = apiManager.readDocument(collection=FIREBASE_EVENTRA_COLLECTION, doc_id=doc_id)
    return data.toDict()


# add events to firebase
@apiflask.post("/events")
def add_event_to_firebase():
    """
    Add event to database the request method applicable is json. eg
    {"name": "John Doe"};  When adding / creating an event an id must be pass,
    in this case using phone number or email as ID allowed since those are unique.
    This will be updated in the future
    :return: 
    """
    data = apiManager.createDocument(
        collection=FIREBASE_EVENTRA_COLLECTION,
        document_data=request.json
    )
    return data.toDict()


# update an event in firebase
@apiflask.patch("/events/<doc_id>")
def update_event_in_firebase(doc_id: str):
    """ The patch method is to update a particular place in the database,
     where the request json key is true. If the data is not in database, it is created.
     """
    data = apiManager.updateDocument(
        collection=FIREBASE_EVENTRA_COLLECTION,
        doc_id=doc_id,
        update_data=request.json
    )
    return data.toDict()


# update an event in firebase
@apiflask.put("/events/<doc_id>")
def replace_event_in_firebase(doc_id: str):
    """ The 'put' method is to update a particular place in the database,
     where the request json key is true. If the data is not in database, it is created.
     """
    print(doc_id)
    data = apiManager.updateDocument(
        collection=FIREBASE_EVENTRA_COLLECTION,
        doc_id=doc_id,
        update_data=request.json
    )
    return data.toDict()


# delete one event from firebase
@apiflask.delete("/events/<doc_id>")
def delete_one_event_from_firebase(doc_id: str):
    """ The 'delete' method is to delete a particular document from the database,
     where the doc id is true
     """
    data = apiManager.deleteDocument(
        collection=FIREBASE_EVENTRA_COLLECTION,
        doc_id=doc_id,
    )
    return data.toDict()


if __name__ == "__main__":
    apiflask.run(debug=False, host="0.0.0.0", port=8080)
